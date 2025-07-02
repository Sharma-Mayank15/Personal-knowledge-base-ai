from fastapi import FastAPI, File, UploadFile, HTTPException
import boto3
import openai
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

app = FastAPI()

# AWS S3 Configuration
try:
    s3 = boto3.client(
        's3',
        aws_access_key_id='your-access-key',
        aws_secret_access_key='your-secret-key'
    )
    BUCKET_NAME = "your-bucket-name"
except (NoCredentialsError, PartialCredentialsError) as e:
    raise Exception(f"AWS Credentials Error: {e}")

# OpenAI API Key
openai.api_key = "your-openai-api-key"

@app.get("/")
def read_root():
    """
    Root route to display a welcome message and available API endpoints.
    """
    return {
        "message": "Welcome to the Personal Knowledge Base API!",
        "routes": {
            "POST /upload": "Upload files to AWS S3",
            "POST /ai-search": "Perform AI-powered search using OpenAI embeddings"
        }
    }

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """
    Upload a file to AWS S3.

    Args:
        file (UploadFile): File to upload.

    Returns:
        dict: Success or error message.
    """
    try:
        # Upload file to S3
        s3.upload_fileobj(file.file, BUCKET_NAME, file.filename)
        return {"success": True, "message": f"File '{file.filename}' uploaded successfully!"}
    except NoCredentialsError:
        raise HTTPException(status_code=500, detail="AWS credentials are not configured correctly.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload file: {e}")

@app.post("/ai-search")
async def ai_search(query: str):
    """
    Perform AI-powered search using OpenAI embeddings.

    Args:
        query (str): Search query.

    Returns:
        dict: Embedding for the query or error message.
    """
    try:
        response = openai.Embedding.create(input=query, model="text-embedding-ada-002")
        embedding = response['data'][0]['embedding']
        return {
            "success": True,
            "query": query,
            "embedding": embedding,
            "message": "AI search completed successfully!"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to perform AI search: {e}")