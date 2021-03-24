import './App.css';
import SpNavLink from './components/SpNavLink';
import star from './assets/star.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBig from './components/NavBarBig'

const App = () => {
  return (
    <div >
      <SpNavLink title="Iconic Dishes" icon={star}/>
    </div>
  );
}
export default App;
