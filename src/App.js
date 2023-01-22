// // USEstate 👇
// import { useState } from 'react';
// import './App.css';
// import React from 'react';

// function App() {
//   const [count, setCount] = useState(4); //count will current state and setCount will be updated state
//   const [theme, setTheme] = useState('blue'); //count will current state and setCount will be updated state
//   // const [state, setState] = useState({ count: 4, theme: 'blue' }); //count will current state and setCount will be updated state
//   // const count = state.count;
//   // const theme = state.theme;

//   function decrementCount() {
//     setCount(count - 1);
//   }

//   function increamentCount() {
//     setCount(count + 1);
//   }

//   // function decrementCount() {
//   //   setState(prevState => {
//   //     return { ...prevState, count: prevState.count - 1 }
//   //   });
//   // }
//   // function increamentCount() {
//   //   setState(prevState => {
//   //     return { ...prevState, count: prevState.count + 1 }
//   //   });
//   // }

//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={increamentCount}>+</button>
//     </>
//   );
// }

// export default App;
// 👆

// UseEffect 👇
import React, { useEffect, useState } from 'react'

export default function App() {
  const [resourseType, setResourseType] = useState('posts');
  // const [items, setItems] = useState([]);
  // const [windowwidth, setWindowwidth] = useState(window.innerWidth);

  // const handleresize = () => {
  //   setWindowwidth(window.innerWidth)
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', handleresize);
  // }, [])
  // console.log('render');

  // useEffect(() => {
  //   console.log('onMount');
  // }, [resourseType])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourseType])

  useEffect(() => {
    console.log('resource changed')

    return () => {
      console.log('return from a resource changed')

    }
  }, [resourseType])
  return (
    // <div>
    //   {windowwidth}
    // </div>
    <>
      <div>
        <button onClick={() => setResourseType('posts')}>Posts</button>
        <button onClick={() => setResourseType('users')}>Users</button>
        <button onClick={() => setResourseType('comments')}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
      {/* {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
    </>
  )
}
// 👆

