import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Nav';
import Banner from './components/Banner';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import HeartyFaves from './containers/HeartyFaves/HeartyFaves';
import recipes from './data/recipes.js';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <>
      <Nav />
      <HeartyFaves recipes={recipes}/>
      <Banner title="quick dinner recipes" text="you can make tonight!" icon={faUtensils} />
    </>
  );
};

export default App;
