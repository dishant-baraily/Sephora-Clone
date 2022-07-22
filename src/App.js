import { AboveNav } from './components/AboveNav';
import { Navbar } from './components/Navbar';
import { Sections } from './components/Sections';
import { Body } from './components/Body';

function App() {
  return (
    <div className="App">
      <AboveNav />
      <Navbar />
      <Sections />
      <Body />
    </div>
  );
}

export default App;
