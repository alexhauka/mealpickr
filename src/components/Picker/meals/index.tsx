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

  
  const mobileImageURL = `https://spoonacular.com/recipeImages/${meal.id}-312x231.jpg`
  const tabletImageURL = `https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`
  const desktopImageURL = `https://spoonacular.com/recipeImages/${meal.id}-636x393.jpg`
  


  return (
    <>
      <Image
        src={mobileImageURL}
        srcSet={`${tabletImageURL} 768w, ${desktopImageURL} 992w`}
        alt={meal.title}
      />
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