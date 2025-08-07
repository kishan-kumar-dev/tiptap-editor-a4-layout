import React, { useRef } from "react";

interface PageProps {
  pageNumber: number;
  content: string;
  onContentChange: (html: string) => void;
}

const Page: React.FC<PageProps> = ({
  pageNumber,
  content,
  onContentChange,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    if (contentRef.current) {
      onContentChange(contentRef.current.innerHTML);
    }
  };

  const insertPageBreak = () => {
    if (contentRef.current) {
      const breakElement = document.createElement("div");
      breakElement.className = "page-break";
      contentRef.current.appendChild(breakElement);
      handleInput();
    }
  };

  return (
    <div className="bg-white w-[210mm] h-[297mm] shadow mx-auto my-4 p-8 relative break-after-page">
      {/* Header */}
      <div className="absolute top-4 left-4 text-sm text-gray-500">
        Header - Page {pageNumber}
      </div>

      {/* Editable Content */}
      <div className="mt-12 mb-12 prose prose-sm max-w-none overflow-auto outline-none">
        <div
          ref={contentRef}
          contentEditable
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning
          className="editable min-h-[200mm] text-[12pt]"
        />

        {/* Manual Page Break Button */}
        <button
          onClick={insertPageBreak}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          ➖ Insert Page Break
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 right-4 text-sm text-gray-500">
        Page {pageNumber}
      </div>
    </div>
  );
};

export default Page;
