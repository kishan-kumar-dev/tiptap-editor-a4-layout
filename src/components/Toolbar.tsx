import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  FilePlus,
} from "lucide-react";

interface ToolbarProps {
  editor: Editor | null;
}

const fontSizes = ["12px", "14px", "16px", "18px", "24px"];
const fontFamilies = [
  "Arial",
  "Georgia",
  "Courier New",
  "Times New Roman",
  "Verdana",
];

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) return null;

  const currentFontSize = editor.getAttributes("fontSize").size || "16px";
  const currentFontFamily = editor.getAttributes("fontFamily").font || "Arial";

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border-b mb-2 bg-gray-50">
      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`btn ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        aria-label="Bold"
        type="button"
      >
        <Bold size={16} />
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`btn ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
        aria-label="Italic"
        type="button"
      >
        <Italic size={16} />
      </button>

      {/* Underline */}
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`btn ${editor.isActive("underline") ? "bg-gray-300" : ""}`}
        aria-label="Underline"
        type="button"
      >
        <Underline size={16} />
      </button>

      {/* Font Size Dropdown */}
      <select
        value={currentFontSize}
        onChange={(e) =>
          editor.chain().focus().setFontSize(e.target.value).run()
        }
        className="border rounded px-2 py-1"
        aria-label="Font Size"
      >
        {fontSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      {/* Font Family Dropdown */}
      <select
        value={currentFontFamily}
        onChange={(e) =>
          editor.chain().focus().setFontFamily(e.target.value).run()
        }
        className="border rounded px-2 py-1"
        aria-label="Font Family"
      >
        {fontFamilies.map((family) => (
          <option key={family} value={family}>
            {family}
          </option>
        ))}
      </select>

      {/* Alignment Buttons */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`btn ${
          editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : ""
        }`}
        aria-label="Align Left"
        type="button"
      >
        <AlignLeft size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`btn ${
          editor.isActive({ textAlign: "center" }) ? "bg-gray-300" : ""
        }`}
        aria-label="Align Center"
        type="button"
      >
        <AlignCenter size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`btn ${
          editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : ""
        }`}
        aria-label="Align Right"
        type="button"
      >
        <AlignRight size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`btn ${
          editor.isActive({ textAlign: "justify" }) ? "bg-gray-300" : ""
        }`}
        aria-label="Justify"
        type="button"
      >
        <AlignJustify size={16} />
      </button>

      {/* Insert Page Break Button */}
      <button
        onClick={() => editor.chain().focus().insertPageBreak().run()}
        className="btn"
        aria-label="Insert Page Break"
        type="button"
      >
        <FilePlus size={16} />
      </button>
    </div>
  );
};

export default Toolbar;
