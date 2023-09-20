import './App.css';
import CopySection from './components/CopySection';
import Navbar from './components/Navbar';
import RetrieveSection from './components/RetrieveSection';

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>        
      </div>
      
      <div className='app'>
        <Navbar />
        <CopySection />
        <RetrieveSection />
      </div>
      
    </main>
  );
}

export default App;
