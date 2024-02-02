import React from "react";
import{ Counters } from './components/Counters';
import Funcomponents from "./components/Funcomponents";
import { Counter } from "./components/Counter";
import Comp from './components/Comp';

export const App = () => {
  return (
    <>
     <Counters />
      <Funcomponents />
      <Comp />
      <Counter />
      
    </>
  );
};
