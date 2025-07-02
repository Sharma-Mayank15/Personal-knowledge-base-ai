# 🧠 Personal Knowledge Base with AI Search

> Your second brain in the cloud — upload notes or PDFs and instantly query them using AI-powered search.

![Tech Badge](https://img.shields.io/badge/Built%20with-Next.js%20%7C%20FastAPI%20%7C%20OpenAI-blue)
![License Badge](https://img.shields.io/badge/License-MIT-green)
![Status Badge](https://img.shields.io/badge/Status-Active--Development-orange)

---

### 📚 Problem

In the age of digital overload, we save everything — PDFs, notes, bookmarks — but finding useful info when we actually need it? Painful.

---

### 💡 Solution

This project acts as a **"second brain"** — allowing users to upload documents and later **ask natural language questions** about them. Under the hood, it uses **AI embeddings and vector search** to retrieve the most relevant content.

---

### 🚀 Tech Stack

| Layer         | Tech Used                          |
|---------------|------------------------------------|
| **Frontend**  | Next.js (App Router)               |
| **Backend**   | FastAPI / Node.js                  |
| **Database**  | MongoDB / Supabase                 |
| **AI Search** | OpenAI Embeddings + Pinecone / Weaviate |
| **Storage**   | AWS S3 / Cloudinary (file uploads) |

---

### 🔍 Features

- 📄 Upload personal notes or PDF files
- 💬 Ask questions in natural language
- ⚡ Get context-aware answers powered by AI
- ☁️ Stores files securely in S3 or Cloudinary
- 🧠 Uses OpenAI embeddings + vector DB for search
- 🔐 Extensible backend API (FastAPI/Node.js)

---

### 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/pkb-ai-search.git
cd pkb-ai-search

# Set up frontend
cd frontend
npm install
npm run dev

# Set up backend
cd ../backend
pip install -r requirements.txt
uvicorn app:app --reload
```

---

## 🖼️ Preview

Here's how the app looks:

![App Preview](./public/preview.png)

---

### 📁 Example `.env` for Backend

```env
S3_BUCKET_NAME=your-bucket-name
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=your-region

OPENAI_API_KEY=your-openai-key
VECTOR_DB_API_KEY=your-pinecone-or-weaviate-key
```

---

### 🧠 How AI Search Works

1. Texts from uploaded docs are chunked & embedded using **OpenAI**.
2. Embeddings are stored in **Pinecone** or **Weaviate**.
3. On user query → embed → similarity search → return top results.
4. Optional: Use **RAG** to generate direct answers from the content.

---

### 🧪 Future Enhancements

- 🔒 User auth with JWT & sessions
- 🗃️ Folders/tags for document organization
- 🤖 Chat interface powered by LLMs (like GPT-4 or Claude)
- 🌐 Multi-language support

---

### 👨‍💻 Author

Built by **Mayank Sharma**  
📬 [LinkedIn](https://www.linkedin.com/in/mayank-sharma15/) | 🧠 Always building real-world AI

---

### 📘 License

MIT License — use it, fork it, star it ⭐

---

### 🔥 Suggested GitHub Repo Names

| Repo Name | Why It's Good |
|-----------|---------------|
| `pkb-ai-search` | Short & sharp |
| `second-brain-ai` | Marketable & self-explanatory |
| `ai-personal-knowledge-base` | Great for SEO |
| `notewise-ai` | Unique, product-y feel |
| `mindstore-ai` | Memorable & future-proof |
