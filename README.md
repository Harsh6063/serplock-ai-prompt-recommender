# 🚀 AI Prompt Recommendation Engine

> Prototype built for the **Serplock Founding Team Internship Assignment**

An AI-powered recommendation engine that analyzes any website, understands its business using LLMs, and recommends the highest-value AI Search prompts that brands should track across ChatGPT, Gemini, Claude, and Perplexity.

---

## 🌐 Live Demo

🔗 **Vercel:** https://your-vercel-link.vercel.app

## 💻 GitHub Repository

🔗 https://github.com/Harsh6063/serplock-ai-prompt-recommender

---

# 📖 Problem Statement

As AI Search becomes the primary way users discover products and services, businesses need to understand **which prompts customers are asking AI assistants** and track their visibility across LLMs.

This prototype helps businesses by:

- Understanding their business automatically
- Generating AI Search prompts relevant to their product
- Ranking those prompts using a scoring framework
- Recommending the highest-value prompts to track

Although demonstrated using **Serplock.com**, the architecture is generic and works for any website.

---

# ✨ Features

- 🌐 Website Analysis
- 🧠 AI-powered Business Understanding
- 📝 AI Search Prompt Generation
- 📊 Intelligent Prompt Scoring
- 🏆 Top Prompt Recommendations
- 📱 Fully Responsive UI
- ⚡ Modern Dashboard Interface
- 🎯 Generic architecture for any website

---

# 🏗️ Architecture

```
Website URL
      │
      ▼
Website Crawler
(Firecrawl)
      │
      ▼
LLM Business Analyzer
(Groq Llama 3)
      │
      ▼
Business Profile

• Company
• Industry
• Product
• Features
• Use Cases
• Competitors
• Keywords
• Target Audience

      │
      ▼
Prompt Generator

Generates candidate prompts
across multiple categories

      │
      ▼
Scoring Engine

Scores prompts using:

✓ Business Relevance
✓ Commercial Intent
✓ Search Intent
✓ Entity Coverage
✓ Prompt Quality
✓ Uniqueness

      │
      ▼
Top Recommendations
```

---

# 🧠 Prompt Scoring Framework

Each prompt is ranked using multiple weighted factors.

| Factor | Description |
|---------|-------------|
| Business Relevance | How closely the prompt matches the business |
| Commercial Intent | Buying intent of the query |
| Search Intent | Awareness, Consideration, or Decision stage |
| Entity Coverage | Coverage of important entities/features |
| Prompt Quality | Readability and usefulness |
| Uniqueness | Removes repetitive recommendations |

The highest scoring prompts are recommended to the user.

---

# 📂 Project Structure

```
app/
│
├── api/
│   └── analyze/
│
├── results/
│
└── page.tsx

components/
│
├── home/
│
│   ├── Hero.tsx
│   ├── DashboardPreview.tsx
│   ├── UrlInput.tsx
│   └── HeroStats.tsx
│
└── ui/

lib/
│
├── analyzer.ts
├── scoring.ts
├── firecrawl.ts
└── groq.ts

prompts/
│
├── analyzeWebsite.ts
└── generatePrompts.ts

types/
│
├── api.ts
├── business.ts
└── prompt.ts
```

---

# 🛠️ Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS

### AI

- Groq API (Llama 3)
- Prompt Engineering

### Website Crawling

- Firecrawl API

### Deployment

- Vercel

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Harsh6063/serplock-ai-prompt-recommender.git
```

Go to the project

```bash
cd serplock-ai-prompt-recommender
```

Install dependencies

```bash
npm install
```

Create an environment file

```env

GROQ_API_KEY=your_key
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🧪 Example Workflow

1. Enter a website URL
2. Website content is crawled using Firecrawl
3. Groq LLM understands the business
4. Business profile is generated
5. AI generates candidate prompts
6. Prompts are scored and ranked
7. Top recommendations are displayed

---

# 🎯 Assignment Deliverables

✅ Prompt Scoring Framework

✅ Top Prompt Recommendations

✅ Interactive Prototype

✅ AI-based Business Understanding

---

# 🔮 Future Improvements

- Generate 100+ candidate prompts before ranking
- Semantic deduplication using embeddings
- Multi-LLM prompt validation (ChatGPT, Gemini, Claude, Perplexity)
- Historical prompt performance tracking
- Export recommendations to CSV
- Real-time AI Search monitoring
- User feedback loop to improve ranking over time

---

# 👨‍💻 Author

**Harsh Arora**

- GitHub: https://github.com/Harsh6063
- LinkedIn: https://www.linkedin.com/in/harsh-arora-3557062b7/

---

# 🙏 Acknowledgements

This project was built as part of the **Serplock Founding Team Internship Assignment** to explore AI Search, LLM-based business understanding, and prompt recommendation systems.