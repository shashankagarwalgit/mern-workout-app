import {BrowserRouter,Route,Routes} from 'react-router-dom';

//imports from pages
import Home from './pages/Home';

//imports from components
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
      <Routes>
        <Route 
        path='/'
        element={<Home />}
        />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
