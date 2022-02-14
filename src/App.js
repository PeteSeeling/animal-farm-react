
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { animals } from './AnimalList.js';


function App() {
  return (
    <div className="App">
      <Header name= 'Pete Seeling' />
      <Main animals={animals} />
      <Footer email= 'peteseeling@gmail.com' />
    </div>
  );
}

export default App;
