import './App.css';
import Button from './components/Button';
import Job from './components/Job';






function App() {
  return (
    <div className="App">
      <div className='header' style={{background:'#5964E0',height:'100px',}}>
       
      <h2 >devjobs</h2>
      </div>
     
   <Job/>
   <Button/>
  

    </div>
  );
}

export default App;
