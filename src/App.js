import './App.css';
import Pages from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <div className="container">
      <h2 className="text-center">Food Recipes</h2>
      <BrowserRouter>
      <Categories />
      <Pages />
      </BrowserRouter>
      
    </div>
    </div>
  );
}

export default App;

