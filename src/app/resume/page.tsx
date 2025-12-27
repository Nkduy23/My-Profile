export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold">My Resume</h1>
            <p className="text-sm text-gray-500 mt-4">View or download my CV</p>
          </div>

          <a
            href="/cv.pdf"
            download
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe src="/cv.pdf" className="w-full h-[calc(100vh-50px)]" title="Resume PDF" />
        </div>

        {/* Fallback message */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          If the PDF does&apos;t display, you can{" "}
          <a href="/cv.pdf" download className="text-blue-500 hover:underline">
            download it here
          </a>
        </p>
      </div>
    </div>
  );
}
