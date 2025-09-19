export default async function fetchSouthIndianRecipe(ingredients) {
  try {
    const response = await fetch('/api/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}
