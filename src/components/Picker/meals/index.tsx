import React from 'react';
import { Image, MealDescription, MealButtonGroup, RecipeButton } from './styles';




type MealType = {
  id: number,
  image: string,
  title: string,
  sourceUrl: string
}

interface MealProps {
  meal: MealType
}



const Meals: React.FC<MealProps> = ({ meal }): JSX.Element => {
  
  const formattedImageURL = `https://spoonacular.com/recipeImages/${meal.id}-312x231.jpg`;


  return (
    <>
      <Image src={`${formattedImageURL}`} alt='meal'/>
      <br />
      <MealDescription>
        {meal.title}
      </MealDescription>
      <MealButtonGroup>
        <RecipeButton as="a" href ={`${meal.sourceUrl}`}>
          Go To Recipe
        </RecipeButton>
      </MealButtonGroup>
    </>
  )

}

export default Meals;