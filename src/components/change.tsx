import { useStateMachine } from 'little-state-machine';
import React from 'react';

const Change = () => {
  const { state } = useStateMachine({});
  return <div>change: {state.yourDetails.name}</div>;
};

export default Change;
