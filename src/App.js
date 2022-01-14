import {useSelector, useDispatch} from 'react-redux'


function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  console.log(store)
  return (
    <div className="App">
      redux-saga
      <button
        onClick={() => dispatch({type: 'CLICK'})}
      >
        Click
      </button>
    </div>
  );
}

export default App;
