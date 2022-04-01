
import Navbar from './Navbar';
import Home from './Home';
import Comment from './Comment';
import Reply from './Reply';





function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* completed the Navbar */}
      <div className="content">
        <Home />
        <Comment />
        <Reply />
      </div>
    </div>
  );
}

export default App;