
import './App.css';
import TaskList from './components/TaskList/TaskList';
import NavBar from './components/NavBar/NavBar';
import SlideBar from './components/SlideBar/SlideBar';
function App() {
  return (
    <div className='main'>
    <div className='nav'>
      <div className='container'> 
        <NavBar />
      </div>
    </div>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
          <SlideBar/>
          </div>
          <div className='col-10'>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

