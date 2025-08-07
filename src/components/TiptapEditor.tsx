import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import { FontSize } from "../extensions/FontSize";
import { FontFamily } from "../extensions/FontFamily";
import { PageBreak } from "../extensions/PageBreak";
import Toolbar from "./Toolbar";

interface TiptapEditorProps {
  pageNumber: number;
  content: string;
  onContentChange: (html: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({
  pageNumber,
  content,
  onContentChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      FontFamily,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      PageBreak,
    ],
    content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose max-w-none min-h-[297mm] outline-none",
        spellCheck: "true",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [content, editor]);

  return (
    <div>
      <Toolbar editor={editor} />

      {editor && (
        <button
          type="button"
          className="btn my-2"
          onClick={() => editor.chain().focus().insertPageBreak().run()}
        >
          ➕ Insert Page Break
        </button>
      )}

      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
