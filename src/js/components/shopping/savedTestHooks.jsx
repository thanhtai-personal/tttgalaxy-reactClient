import React, { PureComponent, useState, useEffect, useMemo, useLayoutEffect } from "react";
// import _ from 'lodash'
import List from '../common/list'
import Loading from './../common/loadingPage'

import './shopping.scss'

const Component1 = (props) => {
  console.log('render component 1', props)
  useEffect(() => {
    console.log('component 1 useEffect')
  })
  useLayoutEffect(() => {
    console.log('component 1 useLayoutEffect')
  })
  return (props && props.state ? <p> i'm the first component </p> : <p> i'm not the first component </p>)
}

const Component2 = (props) => {
  console.log('render component 2', props)
  useEffect(() => {
    console.log('component 2 useEffect')
  })
  return (props && props.state ? <p> i'm the second component </p> : <p> i'm not the second component </p>)
}

const Component3 = React.memo((props) => {
  console.log('render component 3', props)
  useEffect(() => {
    console.log('component 3 useEffect')
  })
  return (props && props.state ? <p> i'm the second component </p> : <p> i'm not the second component </p>)
})



const HomeShop = (props) => {
  const [loading, setLoading] = useState(false)
  //...
  // So more useState - Do we have a better solution??

  // test use object + React.memo = success
  const [state, setState] = useState({
    state1: true, state2: true,
    state3: { state3a: true, state3b: true }
  }) 

  
  const useEventListener = (event) => {
    switch (event.keyCode) {
      case 49: //1
        console.log(' press 1!!!')
        setState({ ...state, state1: !state.state1 })
        break;
      case 50: //2
        console.log(' press 2!!!')
        setState((devProps) => ({ ...devProps, state2: !devProps.state2 }))
        break;
      case 51: //3
        setState({ ...state, state3: { ...state.state3, state3a: !state.state3.state3a } })
        console.log(' press 3!!!')
        break;
      case 52: //4
        console.log(' press 4!!!')
        setState({ ...state, state3: { ...state.state3, state3b: !state.state3.state3b } })
        break;
    }
  }

  useEffect(() => {
    console.log('home useEffect')
    window.addEventListener('keypress', useEventListener)
    return () => {
      window.removeEventListener('keypress', useEventListener)
    }
  })

  useLayoutEffect(() => {
    console.log('home useLayoutEffect')
  })


  // test use memo
  // State for our counter
  const [count, setCount] = useState(0);
  // State to keep track of current word in array we want to show
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['hey', 'this', 'is', 'cool'];
  const word = words[wordIndex];
  const computeLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  console.log('render home')
  return loading ? <Loading width='100vw' height='100vh' /> :
    (
      <React.Fragment>
        <Component1 state={state.state1} />
        <Component2 state={state.state2} />
        <Component3 state={state.state2} />
        <p>{state.state3 && state.state3.state3a ? `I'm 3a` : `I'm not 3a`}</p>
        <p>{state.state3 && state.state3.state3b ? `I'm 3b` : `I'm not 3b`}</p>
        <div style={{ padding: '15px' }}>
          <h2>Compute number of letters (slow 🐌)</h2>
          <p>"{word}" has {letterCount} letters</p>
          <button
            onClick={() => {
              const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
              setWordIndex(next);
            }}
          >
            Next word
      </button>

          <h2>Increment a counter (fast ⚡️)</h2>
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </React.Fragment>
    )
}

export default HomeShop