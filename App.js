
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <> 
    
      <Navbar title="TextUtils"/>
      <div className="containerbox my-2 ">
      <Textbox heading="ENTER TEXT TO ANALYZE"/>
      </div>
    
      
    </>
    
  );
}

export default App;
