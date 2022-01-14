import {useSelector} from 'react-redux'


function App() {
  const store = useSelector(store => store)
  console.log(store)
  return (
    <div className="App">
      redux-saga
    </div>
  );
}

export default App;
