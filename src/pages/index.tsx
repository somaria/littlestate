/* eslint-disable simple-import-sort/imports */
import * as React from 'react';
import { StateMachineProvider, createStore } from 'little-state-machine';
import Name from '../components/name';
import Update from '@/components/update';
import Change from '@/components/change';

declare module 'little-state-machine' {
  interface GlobalState {
    yourDetails: {
      name: string;
    };
  }
}

createStore({
  yourDetails: { name: 'John' },
});

export default function HomePage() {
  return (
    <div>
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <StateMachineProvider>
              <Name />
              <Update />
              <Change />
            </StateMachineProvider>
          </div>
        </section>
      </main>
    </div>
  );
}
