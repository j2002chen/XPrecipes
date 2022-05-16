import './App.css';
import Items from './ingredients.js';
import AppTitle from './apptitle.js';
import List from './recipeslist.js';
import Saved from './savedrecipes.js';




const App = () =>  {
  return (
      <div className="App">
        <AppTitle/>
        <Items/>
        <List/>
        <Saved/>
      </div>
  );
}

export default App;
