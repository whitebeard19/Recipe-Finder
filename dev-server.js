import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

app.post("/api/recipe", async (req, res) => {
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
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Development API server running at http://localhost:${PORT}`);
});