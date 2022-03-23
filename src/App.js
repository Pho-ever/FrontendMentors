
import Navbar from './Navbar';
import Home from './Home';
import Comment from './Comment';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* completed the Navbar */}
      <div className="content">
        <Home />
        <Comment />
        {/* The content of the webpage */}
      </div>
    </div>
  );
}

export default App;