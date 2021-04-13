import './App.css';
// import { useSelector, useDispatch } from 'react-redux'
// import { logIn } from './actions/index'

//Components
import NavBar from './components/NavBar'

//Containers
import Main from './containers/Main'

function App() {

  // const isLogged = useSelector(state => state.loggedIn);
  // const dispacth = useDispatch();

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
