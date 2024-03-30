import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atom/count';
import { networkAtom } from './atoms';

function App() {
  const networkNotiCount = useRecoilValue(networkAtom);
  return (
    <RecoilRoot>
      <>
        {/* <CountRender />
        <Buttons /> */}

        <button>Home</button>
        <button>My Network ({networkNotiCount >=100 ? "99+" :networkNotiCount})</button>
        <button>Jobs ()</button>
        <button>Messaging</button>
        <button>Notification</button>

        <button>Me</button>
      </>
    </RecoilRoot>
  );
}

// function CountRender() {
//   const count = useRecoilValue(countAtom);
//   return (
//     <div>
//       <b>{count}</b>
//     </div>
//   );
// }

// function Buttons() {
//   const [count, setCount] = useRecoilState(countAtom);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   );
// }

export default App;
