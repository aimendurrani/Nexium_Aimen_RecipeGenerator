export const generateRecipe = async (ingredients) => {
  const response = await fetch('https://your-n8n-domain/webhook/generate-recipe'
, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients })
  })

  const data = await response.json()
  return data.recipe || "Failed to generate"
}
