import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage'
import AddPage from './containers/AddPage';
import MyRecipe from './containers/MyRecipes';
import RecipeList from './components/RecipeList'
import SingleRecipe from './containers/SingleRecipe';
import RemoveButton from './components/RemoveButton';
import { useDispatch } from "react-redux";
import Actions from './actions/recipe'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions['RECIPES/FETCH_LOAD_DATA']);
  }, []);
  return (
    <div className='color'>
    <div className='container'>
      <div className='header'>Мои рецепты</div>
      <div className='viewRecipes'>
      <div className='Menu'>
        <NavLink activeClassName='active' to="/" exact><button className="menuButton">Мои рецепты</button></NavLink>
        <NavLink activeClassName='active' to="/addNewRecipe"><button  className="menuButton">Добавить новый рецепт</button></NavLink>
        <NavLink activeClassName='active' to="/showAllRecipes"><button  className="menuButton">Сохраненные рецепты</button></NavLink>
        <RecipeList/>
        <RemoveButton/>
      </div>
      <div className='windowShow'>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/addNewRecipe">
            <AddPage />
          </Route>
          <Route path='/editRecipe/:recipeId' >
            <AddPage/>
          </Route>
          <Route path="/showAllRecipes" exact>
            <MyRecipe />
          </Route>
            <Route path='/showAllRecipes/:recipeId'  component={SingleRecipe}/>
        </Switch>
      </div>
      </div>
    </div>
</div>


  );
}

export default App;