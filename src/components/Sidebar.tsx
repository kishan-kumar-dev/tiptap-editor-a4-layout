import React from "react";

interface SidebarProps {
  pages: number[]; // Array of page indices
  activePage: number; // Currently active page index
  onSelectPage: (index: number) => void; // Callback to switch pages
}

const Sidebar: React.FC<SidebarProps> = ({
  pages,
  activePage,
  onSelectPage,
}) => {
  return (
    <div className="w-32 bg-gray-100 p-2 border-r border-gray-300 h-full">
      <div className="flex flex-col gap-2">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`w-full h-24 rounded-sm border cursor-pointer shadow-sm ${
              activePage === index
                ? "border-blue-500 ring-2 ring-blue-300"
                : "border-gray-300"
            }`}
            onClick={() => onSelectPage(index)}
          >
            <div className="text-center text-xs pt-1 select-none">
              Page {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
