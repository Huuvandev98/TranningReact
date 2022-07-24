
import './App.css';
import Tasklist from './components/TaskList/taskList';
import NavBar from './components/NavBar/navBar';
import SlideBar from './components/SlideBar/slideBar';
function App() {
  return (
    <div class=" main">
    <div className='nav'>
      <div className='container'> 
        <NavBar />
      </div>
    </div>
      <div class="container">
        <div className='row'>
          <div className='col-2'>
          <SlideBar/>
          </div>
          <div className='col-10'>
            <Tasklist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

