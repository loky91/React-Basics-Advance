import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe'


const App=()=>{

  const APP_ID="fe28aeb0"
  const APP_KEY="e431b38d049aa8fedbcba7bb3e4ed35b"
 
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('chicken');
const updateSearch=(e)=>{
setSearch(e.target.value);
console.log(search);
}
useEffect(()=>{
  getRecipe();
},[query])

const getSearch=(e)=>{
e.preventDefault();
setQuery(search);
}
const getRecipe=async()=>{
const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ APP_ID }&app_key=${ APP_KEY }`)
const data=await response.json();
console.log(data.hits);
setRecipes(data.hits);
}
return(
<div>
<form onSubmit={getSearch}>
<input type="text" className="search-bar" value={search} onChange={updateSearch} />
<button className="search-button" type="submit">Search</button>
</form>
{recipes.map((recipy)=>(
 <Recipe title={recipy.recipe.label} calories={recipy.recipe.calories} image={recipy.recipe.image}/> 
))}
</div>

)
}

export default App;
