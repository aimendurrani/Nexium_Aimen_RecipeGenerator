import mongoose from 'mongoose'

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
})

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema)
