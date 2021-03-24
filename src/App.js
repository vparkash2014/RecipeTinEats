import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './containers/Nav';
import Banner from './components/Banner';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <>
      <Nav />
      <Banner title="quick dinner recipes" text="you can make tonight!" icon={faUtensils} />
    </>
  );
};

export default App;
