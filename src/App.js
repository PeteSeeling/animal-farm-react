
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import { animals } from './AnimalList';


function App() {
  return (
    <div className="App">
      <Header name= 'Pete Seeling' />
      <Main animals={animals} />
      <Footer year= '2022' />
    </div>
  );
}

export default App;
