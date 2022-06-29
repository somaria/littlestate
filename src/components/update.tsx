import { GlobalState, useStateMachine } from 'little-state-machine';
import React from 'react';

const Update = () => {
  const updateName = (globalState: GlobalState, payload: { name: string }) => ({
    ...globalState,
    yourDetails: {
      ...payload,
    },
  });
  const { actions } = useStateMachine({
    updateName,
  });

  return (
    <div>
      <button
        onClick={() => {
          actions.updateName({ name: 'Something' });
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Update;
