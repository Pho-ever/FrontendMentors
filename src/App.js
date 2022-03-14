
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* completed the Navbar */}
      <div className="content">
        <Home />
        {/* The content of the webpage */}
      </div>
    </div>
  );
}

export default App;