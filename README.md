# A4 WYSIWYG Editor with Tiptap

This project is a Tiptap-based A4 WYSIWYG editor designed for editing multi-page documents with visual A4 boundaries, dynamic page numbers, per-page headers/footers, manual and automatic page breaks, and support for rich text formatting. It is styled with Tailwind CSS and optimized for printing and PDF export.

---

## ✨ Features

- 📄 Visual A4-sized editable pages
- 🧾 Per-page Header and Footer (with dynamic page numbers)
- 🔠 Rich text editing via Tiptap (Bold, Italic, Underline, Alignment, Font Size, Font Family, Text & Background Color)
- ➕ Manual Page Break insertion
- ✂️ Automatic Page Splitting (optional)
- 🖼️ Sidebar with page thumbnails
- 🖨️ Print and PDF export support with accurate formatting
- 🌈 Full Tailwind styling
- 🖼️ Image Uploads (optional extension)
- 💧 Watermark toggle (optional)
- 🔍 Zoom/Fit-to-Width (planned)
- 🧮 Word/Character Count (planned)
- 💾 Auto-save to localStorage (planned)
- 🌍 RTL Language Support (planned)

---

## 📁 File Structure

- `src/components/TiptapEditor.tsx`  
  The main Tiptap editor with rich text formatting and page break insertion.

- `src/components/Sidebar.tsx`  
  Thumbnail-based navigation for switching between pages.

- `src/styles/index.css`  
  Tailwind + custom CSS for layout, print rules, A4 pages, header/footer.

- `src/extensions/*`  
  Custom Tiptap extensions like `FontSize`, `FontFamily`, `PageBreak`, etc.

- `src/App.tsx`  
  Main app file managing page data, dynamic rendering, export, and navigation.

---

## 📦 Installation

```bash
npm install
npm start
