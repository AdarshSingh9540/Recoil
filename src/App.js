import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atom/count';

function App() {
  return (
    <RecoilRoot>
      <>
        <CountRender />
        <Buttons />
      </>
    </RecoilRoot>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
