import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: 'Invalid ingredients provided' });
  }

  const prompt = `Give me an authentic South Indian (Tamil Nadu) recipe using these ingredients: ${ingredients.join(", ")}. Include the full recipe details with ingredients list and step-by-step instructions.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-small-3.2-24b-instruct:free",
      messages: [{ role: "user", content: prompt }]
    });

    res.json({ recipe: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI API Error:", err);
    res.status(500).json({ error: "Failed to generate recipe. Please try again." });
  }
}
