import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './UseState/ClassCounter';
import HookCounter from './UseState/HookCounter';
import HookCounterTwo from './UseState/HookCounterTwo';
import HooksCounterthree from './UseState/HooksCounterthree';
import HookCounterFour from './UseState/HookCounterFour';
import ClassCounterOne from './useEffect/ClassCounterOne';
import HookCounterOne from './useEffect/HookCounterOne';
import HookMouse from './RunRffect/HookMouse';
import MouseContainer from './useEffect-cleanup/MouseContainer';
import IntervalClassCounter from './useEffect-dependency/IntervalClassCounter';
import IntervalHookCounter from './useEffect-dependency/IntervalHookCounter';
import DataFetching from './UseEffect-FetchingData/DataFetching';
import ComponentC from './useContext/ComponentC';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function App() {
  
  return (
    <div className="App">
      {/** useState<ClassCounter/>
      <HookCounter/>
      <br/>
      <HookCounterTwo/>
      <br/>
      <HooksCounterthree/>
      <br/>
      <HookCounterFour/>**/}
{/**useEffect
<ClassCounterOne/>

<br/>
<HookCounterOne/>
**/}
{/**runEffect
<HookMouse/>
**/}
{/**
<MouseContainer/>
**/}
{/** 
  useEffect Dependency
<IntervalClassCounter/>
<IntervalHookCounter/>
**/} 
{/** 
  useEffect-FetchingData
<DataFetching/>
**/} 
<UserContext.Provider value='vishwas'>
<ChannelContext.Provider value='CodeEvolution'>
<ComponentC/>
</ChannelContext.Provider>
</UserContext.Provider>
</div>
  );
}

export default App;
