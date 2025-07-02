export default function UploadSection() {
    return (
      <div className="border-dashed border-2 border-gray-400 p-8 rounded-lg text-center mb-8">
        <p className="mb-2">📎 Drag & drop your PDF or note files here</p>
        <input type="file" className="block mx-auto" />
      </div>
    );
  }
  