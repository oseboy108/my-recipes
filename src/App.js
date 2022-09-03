import './App.css';
import Pages from './pages/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories'
import Search from './components/Search'
import {BrowserRouter} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'



function App() {
  return (
    <div className="App">
    <div className="container">
    <h2 className="text-center">Ose's Food Recipes</h2>
  <BrowserRouter>
      <Nav>
      <GiKnifeFork />
        <Logo to={"/"}>delicious</Logo>
      </Nav>
      <Search />
      <Categories />
      <Pages />
      </BrowserRouter>
      </div>
    </div>
    
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size:2rem;
}
`
export default App;

