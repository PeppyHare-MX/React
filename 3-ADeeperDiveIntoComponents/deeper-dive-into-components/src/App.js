import React from 'react';
import UltimateMachine from './UltimateMachine';
import UltimateHolidayList from './UltimateHolidayList';
import ArrayFilter from './ArrayFilter';
import ObjectToView from './ObjectToView';
import HandlingBasicSideEffect from './HandlingBasicSideEffect';
import './UltimateMachine.css'

const App = () => (
  <main>
    <UltimateMachine />
    <UltimateHolidayList />
    <ArrayFilter />    
    <ObjectToView />
    <HandlingBasicSideEffect />
    
  </main>
);

export default App;
