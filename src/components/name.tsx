import { useStateMachine } from 'little-state-machine';
import React from 'react';

const Name = () => {
  const { state } = useStateMachine({});

  console.log(state);
  return <div>{state.yourDetails.name}</div>;
};

export default Name;
