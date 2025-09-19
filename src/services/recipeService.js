import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://your-site-url.com',
    'X-Title': 'AI-CHEF',
  },

  dangerouslyAllowBrowser: true,
});

export default async function fetchSouthIndianRecipe(ingredients) {
  const prompt = `Give me a Authentic South Indian (Tamil Nadu) recipe suggestion based on these ingredients: ${ingredients.join(', ')}. Include the full recipe details.`;
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-small-3.1-24b-instruct:free', // Or any other suitable model
      messages: [
        { role: 'user', content: prompt },
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
}
