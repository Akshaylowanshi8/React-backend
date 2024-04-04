import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Home from './Pages/Home';
import Insert from './Pages/Insert';
import Display from './Pages/Display';
import Update from './Pages/Update';
import Editdata from './Pages/Editdata';
import Search from './Pages/Search';

function App() {
  return (
  <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Layout/>}>
<Route index element={ <Home/> } />
<Route path='home' element={ <Home/> } />
<Route path='insert' element={<Insert/>}>  </Route>
<Route path='display' element={ <Display/> } />
<Route path='update' element={ <Update/> } />
<Route path='Search' element={ <Search/>} />
<Route path='Editdata/:id' element={ <Editdata/> } />






</Route>


</Routes>



</BrowserRouter>
  </>
  );
}

export default App;
