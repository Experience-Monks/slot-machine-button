import React from 'react';
import SlotMachineButton from '../index';

export default function Demo() {
  return (
    <main>
      <section>
        <h2>From bottom to top</h2>
        <SlotMachineButton
          activeOnHover={true}
          bottomToTop={true}
          element="div"
          className="slot-machine-button"
        >
          <span>Slot</span>
          <span>Slot</span>
          <span>Machine</span>
          <span>Machine</span>
          <span>Button</span>
          <span>Button</span>
        </SlotMachineButton>
      </section>
      <section>
        <h2>Delayed</h2>
        <SlotMachineButton
          activeOnHover={true}
          element="div"
          className="slot-machine-button"
          delay={[0, 0.1, 0.2]}
        >
          <span data-slot-duplicate>Slot</span>
          <span data-slot-duplicate>Machine</span>
          <span data-slot-duplicate>Button</span>
        </SlotMachineButton>
      </section>
      <section>
        <h2>Disable one of the children</h2>
        <SlotMachineButton
          activeOnHover={true}
          element="div"
          className="slot-machine-button"
        >
          <span data-slot-disable>Slot</span>
          <span data-slot-duplicate>Machine</span>
          <span data-slot-duplicate>Button</span>
        </SlotMachineButton>
      </section>
      <section>
        <h2>Fade Back</h2>
        <SlotMachineButton
          activeOnHover={true}
          element="div"
          className="slot-machine-button"
          fadeBack={true}
        >
          <span data-slot-duplicate>Slot</span>
          <span data-slot-duplicate>Machine</span>
          <span data-slot-duplicate>Button</span>
        </SlotMachineButton>
      </section>
    </main>
  );
}
