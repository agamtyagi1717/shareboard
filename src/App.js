import './App.css';
import CopySection from './components/CopySection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RetrieveSection from './components/RetrieveSection';

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>        
      </div>
      
        <Navbar />
      <div className='app'>
        <Hero />
        <CopySection />
        <RetrieveSection />
      </div>
      
    </main>
  );
}

export default App;
