import useFetch from "./useFetch";
import loadingPic from './img/loading.svg'
import DisplayList from "./DisplayList";
import { Link } from "react-router-dom";

const Meal = () => {
    const { error, isPending, data: meals} = useFetch('https://www.themealdb.com/api/json/v1/1/random.php')
    var meal = {};
    if(meals != null) {
        meal = meals.meals[0];
    }
    
    return (  
        <div className="mealContent">
            {isPending && <img className="loadingPic" src={loadingPic}></img>}
            {!isPending && 
            <div className="mealContainer">
                <h2>The meal you should cook is <i>{meal.strMeal}</i></h2>
                <p>Category: {meal.strCategory}</p>
                <div className="textSpace">
                <img src={meal.strMealThumb} alt="" srcset="" />
                
                    <h4>Ingredients:</h4>
                    <DisplayList meal={meal} />
                    <h4>Instructions:</h4>
                    <p>{meal.strInstructions}</p>
                    <div className="buttonDiv">
                        <Link to={'/'}><button>Go back to<br />Home Page</button></Link> 
                    </div>
                    
                    <p className="instructions"></p>
                </div>
                
            </div>
            }
        </div>
    );
}
 
export default Meal;
