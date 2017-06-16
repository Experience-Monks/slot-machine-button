import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'gsap';

export default class SlotMachineButton extends PureComponent {
  constructor(props) {
    super(props);

    this.idleY = props.bottomToTop ? '0%' : '-50%';
    this.activeY = props.bottomToTop ? '-50%' : '0%';
    this.didPause = false;

    this.animateActive = this.animateActive.bind(this);
    this.animateIdle = this.animateIdle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.getChildren = this.getChildren.bind(this);
  }

  componentDidMount() {
    this.wheels = [...this.container.querySelectorAll('.wheel')];
    this.idleChildren = [...this.container.querySelectorAll('.idle')];
    this.activeChildren = [...this.container.querySelectorAll('.active')];
    this.timeline = new TimelineLite({paused: true});
    const ease = this.props.ease;
    const tweens = this.wheels.reduce((array, wheel, index) => {
      const delay = this.props.delay[index] || this.props.delay;
      const fadeDuration = this.props.fadeDuration || this.props.duration;
      const fadeDelay = delay + this.props.duration - fadeDuration;
      return array.concat([
        TweenLite.fromTo(wheel, this.props.duration, {y: this.idleY}, {y: this.activeY, ease, delay}),
        TweenLite.fromTo(this.idleChildren[index], fadeDuration, {autoAlpha: 1}, {autoAlpha: 0, ease, delay}),
        TweenLite.fromTo(this.activeChildren[index], fadeDuration, {autoAlpha: 0}, {autoAlpha: 1, ease, delay: fadeDelay})
      ]);
    }, []);
    this.timeline.add(tweens);
    if (this.props.fadeBack) {
      this.timeline.addPause('+=0', () => {
        this.didPause = true;
      });
      const duration = this.props.fadeBackDuration;
      const position = this.props.bottomToTop ? 'bottom' : 'top';
      const ease = this.props.fadebackEase;
      const tweens = this.wheels.reduce((array, wheel, index) => {
        let newArray = array.concat([
          TweenLite.to(this.idleChildren[index], 1 / 60, {position: 'absolute', [position]: 0}),
          TweenLite.to(this.idleChildren[index], duration, {ease, autoAlpha: 1}),
        ]);
        if (this.props.idleHasTransparency) {
          newArray.push(TweenLite.to(this.activeChildren[index], duration, {ease, autoAlpha: 0}));
        }
        return newArray;
      }, []);
      this.timeline.add(tweens);
      this.timeline.eventCallback('onStart', () => {
        this.didPause = false;
      });
      this.timeline.eventCallback('onComplete', () => {
        this.didPause = false;
      });
    }
    if (this.props.isActive) {
      this.animateActive();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isActive !== nextProps.isActive) {
      nextProps.isActive ? this.animateActive() : this.animateIdle();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.shouldComponentUpdate.call(this, nextProps, nextState);
  }

  animateActive() {
    this.timeline.restart();
  };

  animateIdle() {
    this.props.fadeBack && this.didPause ? this.timeline.resume() : this.timeline.reverse();
  };

  handleClick() {
    this.props.onClick();
  };

  handleMouseEnter() {
    if (this.props.activeOnHover) {
      this.animateActive();
    }
    this.props.onMouseEnter();
  };

  handleMouseLeave() {
    if (this.props.activeOnHover) {
      this.animateIdle();
    }
    this.props.onMouseLeave();
  };

  getChildren() {
    const wheelStyle = {
      height: '200%',
      display: 'inline-block',
    };
    const childStyle = {
      width: '100%',
      height: '50%',
    };

    let children;
    if (Array.isArray(this.props.children)) {
      children = this.props.children.reduce((array, child, index) => {
        if (child) {
          if (child.props['data-slot-duplicate']) {
            return array.concat([child, child]);
          }
          return array.concat([child]);
        }
        return array;
      }, []);
    } else {
      children = Array(2).fill(this.props.children);
    }
    let disabledCount = 0;
    const disabledStyle = {
      display: 'inline-block',
      height: '100%',
      verticalAlign: 'top'
    };
    children = children.reduce((array, value, index) => {
      if (value.props && value.props['data-slot-disable']) {
        disabledCount++;
        return array.concat(
          <span key={index} style={disabledStyle}><div className="part" style={{height: '100%'}}>{value}</div></span>
        );
      }
      if ((index - disabledCount) % 2) {
        const groupIndex = Math.floor(index / 2);
        array[groupIndex].push(value);
        return array;
      } else {
        return array.concat([[value]]);
      }
    }, []);

    return children.map((group, index) => {
      if (!Array.isArray(group)) {
        return group;
      }
      return (
        <span
          key={index}
          className={group[0].props && group[0].props.className ? 'wheel ' + group[0].props.className : 'wheel'}
          style={wheelStyle}
        >
          {
            group.map((child, index) => {
              const className = index % 2
                ? (this.props.bottomToTop ? 'active' : 'idle')
                : (this.props.bottomToTop ? 'idle' : 'active');
              return <div key={index} className={className + ' part'} style={childStyle}>{child}</div>;
            })
          }
        </span>
      );
    });
  };

  render() {
    const Element = this.props.element;
    const className = `${this.props.className}`;
    const style = Object.assign({
      overflow: 'hidden',
    }, this.props.style);

    return (
      <Element
        className={className}
        style={style}
        onClick={this.handleClick}
        ref={button => this.container = button}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...this.props.domAttributes}
      >
        {this.getChildren()}
      </Element>
    );
  }
}

SlotMachineButton.propTypes = {
  onClick: PropTypes.func,
  bottomToTop: PropTypes.bool,
  isActive: PropTypes.bool,
  duration: PropTypes.number,
  ease: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  activeOnHover: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.PropTypes.arrayOf(PropTypes.number)
  ]),
  element: PropTypes.string,
  domAttributes: PropTypes.object,
  fadeDuration: PropTypes.number,
  fadeBack: PropTypes.bool,
  fadeBackDuration: PropTypes.number,
  fadeBackEase: PropTypes.object,
  idleHasTransparency: PropTypes.bool,
  shouldComponentUpdate: PropTypes.func,
};

SlotMachineButton.defaultProps = {
  onClick: () => {},
  bottomToTop: false,
  duration: 0.5,
  ease: Expo.easeInOut,
  className: '',
  activeOnHover: false,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  delay: 0,
  element: 'button',
  fadeDuration: 0.4,
  fadeBack: false,
  fadeBackDuration: 0.6,
  fadeBackEase: Linear.easeNone,
  idleHasTransparency: false,
  shouldComponentUpdate: () => false,
};
