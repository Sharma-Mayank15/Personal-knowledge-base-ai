module.exports = {
    // Enables React's Strict Mode for catching potential issues in development
    reactStrictMode: true,
  
    // Environment variables used across the application
    env: {
      // OpenAI API Key for generating embeddings and AI responses
      OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'your-api-key',
  
      // S3 Bucket Name for storing uploaded files
      S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || 'your-bucket-name',
  
      // Cloudinary URL for storing and retrieving uploaded files
      CLOUDINARY_URL: process.env.CLOUDINARY_URL || 'your-cloudinary-url',
  
      // Pinecone API Key for vector search
      PINECONE_API_KEY: process.env.PINECONE_API_KEY || 'your-pinecone-api-key',
  
      // Pinecone Environment (e.g., 'us-west1-gcp')
      PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT || 'your-pinecone-environment',
  
      // MongoDB URI for database connection
      MONGO_URI: process.env.MONGO_URI || 'your-mongo-uri',
    },
  };