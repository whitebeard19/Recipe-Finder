import React from 'react'
import IngredientsList from './IngredientsList'
import Recipe from './Recipe'
import fetchSouthIndianRecipe  from '../services/recipeService';

export default function Form() {
    
    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)

    const [recipe, setRecipe] = React.useState("")
    
    async function toggleRecipeShown() {
        if(!recipeShown){
            const result = await fetchSouthIndianRecipe(ingredients)
            setRecipe(result)
            
        }
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData){
        const newingredient = formData.get("ingredient")
        setIngredients(previngredient => [...previngredient, newingredient])
    }



    return (
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input 
                    type="text" 
                    placeholder='e.g. prawns'
                    aria-label='Add ingredient'
                    name='ingredient'
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients = {ingredients} 
                    toggleRecipeShown={toggleRecipeShown}    
            />}

            {recipeShown && <Recipe recipe={recipe} />}

        </main>
    )
}
