// upload.js placeholder
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/upload`, {
          method: 'POST',
          body: req.body,
        });
  
        const result = await response.json();
        res.status(200).json(result);
      } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ success: false, message: "Failed to upload file." });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }