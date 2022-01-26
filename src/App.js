
import './App.css';
import Header from './Header/Header.js';
import Footer from './footer/footer.js';
import Main from './main/main.js';
import { animals } from './AnimalList.js';


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
