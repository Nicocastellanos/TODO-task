import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Todos from './pages/Todos';
import Contact from './pages/Contact';

function App() {

  return (
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Todos/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
