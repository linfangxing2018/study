// hook: useState
// const [counter, setCounter] = {counter: , setCounter:}

// <T> 泛型，可以根据传入的类型来决定
function useState<T>(state: T) {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  const info: [string, number] = ["abc", 18]
  const tuple: [T, (newState: T) => void] = [currentState, changeState]
  return tuple
}

const [counter, setCounter] = useState(10);
setCounter(1000)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)


// type MyFunction = () => void
// const foo: MyFunction = () => {}

