import React from 'react';
import { Container, Image, Description, MealButtonGroup, MealButton } from './styles';




type MealType = {
  id: number,
  image: string,
  title: string
}

interface MealProps {
  meal: MealType
}



const Meals: React.FC<MealProps> = ({ meal }): JSX.Element => {
  
  // development testing: formatting returned jpg size
  const formattedImageURL = `https://spoonacular.com/recipeImages/${meal.id}-312x150.jpg`;


  return (
    <Container>
      <Image src={`${meal.image}`} alt='meal'/>
      <br />
      <Description>
        {meal.title}
      </Description>
      <MealButtonGroup>
        <MealButton>
          Recipe
        </MealButton>
        <MealButton>
          Ingredients
        </MealButton>
      </MealButtonGroup>
    </Container>
  )

}

export default Meals;