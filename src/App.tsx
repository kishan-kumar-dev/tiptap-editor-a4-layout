import React, { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import TiptapEditor from './components/TiptapEditor';

interface PageData {
  id: string;
  content: string;
}

const initialPage: PageData = {
  id: crypto.randomUUID(),
  content: '<p>Start writing on page 1...</p>',
};

const App: React.FC = () => {
  const [pages, setPages] = useState<PageData[]>([initialPage]);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const printRef = useRef<HTMLDivElement>(null); 

  const addPage = () => {
    const newPage: PageData = {
      id: crypto.randomUUID(),
      content: '<p>New page content...</p>',
    };
    setPages((prev) => [...prev, newPage]);
    setActivePageIndex(pages.length);
  };

  const updatePageContent = (index: number, html: string) => {
    setPages((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], content: html };
      return updated;
    });
  };

  const handlePrint = () => {
    window.print(); 
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        pages={pages.map((_, i) => i)}
        activePage={activePageIndex}
        onSelectPage={setActivePageIndex}
      />

      <main className="flex-1 p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Multi-Page A4 Editor</h1>
          <div className="flex gap-2">
            <button
              onClick={addPage}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              + Add Page
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Print / Export
            </button>
          </div>
        </div>

        {/* Active editable page */}
        <div className="a4-page shadow-md mx-auto flex flex-col justify-between">
          <header className="a4-page-header">
            Document Title — Page {activePageIndex + 1}
          </header>

          <TiptapEditor
            key={pages[activePageIndex]?.id}
            pageNumber={activePageIndex + 1}
            content={pages[activePageIndex]?.content}
            onContentChange={(html) =>
              updatePageContent(activePageIndex, html)
            }
          />

          <footer className="a4-page-footer">
            © 2025 Your Company — Page {activePageIndex + 1}
          </footer>
        </div>

        {/* Hidden printable version */}
        <div
          ref={printRef}
          className="absolute left-[-9999px] top-0 print-container"
        >
          {pages.map((page, index) => (
            <div
              key={page.id}
              className="a4-page flex flex-col justify-between"
            >
              <header className="a4-page-header">
                Document Title — Page {index + 1}
              </header>

              <div
                className="page-content flex-grow"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />

              <footer className="a4-page-footer">
                © 2025 Your Company — Page {index + 1}
              </footer>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
