# AI Chef 🍛

An AI-powered recipe generator that creates authentic South Indian (Tamil Nadu) recipes based on ingredients you have on hand.

## Features

- **Smart Ingredient Input**: Add ingredients one by one
- **AI Recipe Generation**: Get authentic South Indian recipes using Mistral AI
- **Clean UI**: Simple, responsive design
- **Markdown Rendering**: Beautifully formatted recipe output

## Tech Stack

- **Frontend**: React 19 + Vite
- **Backend**: Vercel Serverless Functions
- **AI**: OpenRouter API with Mistral models
- **Styling**: Custom CSS with Inter font

## Development

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Add your OpenRouter API key to .env
   ```

3. **Run development servers:**
   ```bash
   npm run dev:full
   ```

4. **Open http://localhost:5174**

## Deployment

This app is configured for Vercel deployment:

1. Push to GitHub
2. Import to Vercel
3. Add `VITE_OPENROUTER_API_KEY` environment variable
4. Deploy!

## Environment Variables

- `VITE_OPENROUTER_API_KEY`: Your OpenRouter API key for AI recipe generation
