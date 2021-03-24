import './App.css';
import SpNavLink from './components/SpNavLink';
import star from './assets/star.svg';


const App = () => {
  return (
    <div >
      <SpNavLink title="Iconic Dishes" icon={star}/>
    </div>
  );
}
export default App;
