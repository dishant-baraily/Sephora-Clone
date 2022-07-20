import logo from './logo.svg';
import { Navbar } from './components/Navbar';
import { AboveNav } from './components/AboveNav';
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
