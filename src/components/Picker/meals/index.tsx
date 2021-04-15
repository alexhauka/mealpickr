import React from 'react';
import { Container, Image, Description } from './styles';




type MealType = {
  image: string,
  title: string
}

interface MealProps {
  meal: MealType
}


const Meals: React.FC<MealProps> = ({ meal }): JSX.Element => {



  return (
    <Container>
      <Image src={`${meal.image}`} alt='meal'/>
      <br />
      <Description>
        {meal.title}
      </Description>
    </Container>
  )

}

export default Meals;