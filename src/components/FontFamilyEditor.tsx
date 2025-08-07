import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const A4Page = React.forwardRef<HTMLDivElement, { fontSize: string }>(
  ({ fontSize }, ref) => (
    <div
      ref={ref}
      className="w-[210mm] h-[297mm] mx-auto my-4 p-8 bg-white shadow-md border flex flex-col justify-between"
      style={{ fontSize }}
    >
      <header className="text-center border-b pb-2 mb-4">
        <h1 className="text-2xl font-bold">Document Title</h1>
      </header>

      <main className="flex-1 text-justify font-sans">
        <p>
          This is an example of an A4 printable document using React and
          Tailwind CSS. You can dynamically change the font size using the
          dropdown above.
        </p>
        <p className="mt-4" style={{ fontFamily: "Georgia" }}>
          Custom font sample: Georgia, size {fontSize}.
        </p>
      </main>

      <footer className="text-center border-t pt-2 mt-4 text-sm">Page 1</footer>
    </div>
  )
);

const FontFamilyEditor = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState("16px");

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "EditorExport",
    removeAfterPrint: true,
  } as any);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">WYSIWYG A4 Editor</h2>
        <div className="flex gap-4 items-center">
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="px-2 py-1 border rounded text-sm"
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="24px">24px</option>
          </select>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Print / Export to PDF
          </button>
        </div>
      </div>

      <div ref={printRef}>
        <A4Page fontSize={fontSize} />
      </div>
    </div>
  );
};

export default FontFamilyEditor;
