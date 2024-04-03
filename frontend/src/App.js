import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Home from './Pages/Home';
import Insert from './Pages/Insert';

function App() {
  return (
  <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Layout/>}>
<Route index element={ <Home/> } />
<Route path='home' element={ <Home/> } />


<Route path='insert' element={<Insert/>}>  </Route>

</Route>


</Routes>



</BrowserRouter>
  </>
  );
}

export default App;
