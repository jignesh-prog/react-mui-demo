import './App.css';
import {Routes,Route} from 'react-router-dom'
import MuiLogin  from './components/MuiLogin'
import MuiDrawer from './components/MuiDrawer'

function App() {
  return (
    <div className="App">
      {/*<MuiTypography />
       <MuiTextField />
  <MuiSelect  />*/}
  <MuiLogin />
  <>
    <Routes>
      <Route path='/MuiDrawer' element = {<MuiDrawer />}></Route>
      </Routes>
      </>
    
    </div>
  );
}

export default App;
