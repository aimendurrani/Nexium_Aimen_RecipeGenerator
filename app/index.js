import { useState } from 'react'
import { generateRecipe } from '../utils/generateRecipe'

export default function Home() {
  const [ingredients, setIngredients] = useState('')
  const [recipe, setRecipe] = useState(null)

  const handleGenerate = async (e) => {
    e.preventDefault()
    const res = await generateRecipe(ingredients)
    setRecipe(res)
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">AI Recipe Generator</h1>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="e.g. eggs, tomatoes"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button className="bg-green-600 text-white px-4 py-2" type="submit">
          Generate Recipe
        </button>
      </form>
      {recipe && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your Recipe</h2>
          <pre className="bg-gray-100 p-4">{recipe}</pre>
        </div>
      )}
    </div>
  )
}
