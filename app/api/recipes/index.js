import connectDB from '../../../lib/db'
import Recipe from '../../../models/Recipe'

export default async function handler(req, res) {
  await connectDB()

  if (req.method === 'POST') {
    const { title, ingredients, instructions } = req.body
    const recipe = new Recipe({ title, ingredients, instructions })
    await recipe.save()
    return res.status(201).json(recipe)
  }

  if (req.method === 'GET') {
    const recipes = await Recipe.find()
    return res.status(200).json(recipes)
  }
}
