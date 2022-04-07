// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

function useState(state: any) {
  let currentState = state
  const changeState = (newState: any) => {
    currentState = newState
  }
  // (newState: any) => void  函数类型
  const tuple: [any, (newState: any) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)

const [title, setTitle] = useState("abc")

export {}
