import './App.css';
import SpNavLink from './components/SpNavLink';
import star from './assets/star.svg';
import Card from './components/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarBig from './components/NavBarBig'
import recipes from './data/recipes';


const App = () => {
  return (
    <Card recipeInfo={recipes[0]}/>
  );
}
export default App;
