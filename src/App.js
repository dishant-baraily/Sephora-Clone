import logo from './logo.svg';
import './App.css';
import { AboveNav } from './components/AboveNav';
import { Navbar } from './components/Navbar';
import { Sections } from './components/Sections';

function App() {
  return (
    <div>
      <AboveNav />
      <Navbar />
      <Sections />
    </div>
  );
}

export default App;
