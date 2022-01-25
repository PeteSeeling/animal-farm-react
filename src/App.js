
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
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
