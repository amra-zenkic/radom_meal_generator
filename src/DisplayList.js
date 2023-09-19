const DisplayList = ({ meal }) => {
    const ingredientsList = [];
  
    // Use a for loop to iterate through ingredient properties
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
  
      // Check if either the ingredient or measure is not null or an empty string
      if (ingredient !== null && ingredient !== "" && measure !== null && measure !== "") {
        ingredientsList.push(
          <li key={i}>
            {measure} - {ingredient}
          </li>
        );
      }
    }
  
    return (
      <div className="list">
        <ul>
          {ingredientsList}
        </ul>
      </div>
    );
  };
  
  export default DisplayList;
  