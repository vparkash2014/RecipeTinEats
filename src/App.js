import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Nav';
import HeartyFaves from './containers/HeartyFaves/HeartyFaves';
import recipes from './data/recipes.js';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <>
      <Nav />
      <HeartyFaves recipes={recipes}/>
    </>
  );
};

export default App;
