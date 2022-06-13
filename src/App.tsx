import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/navbar/Navbar';
import { Routing } from './routes';

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <NavBar />
        </div>
        <div className='Content'>
          <Routing />
        </div>
      </div>
    </Router>
  )
};

export default App;
