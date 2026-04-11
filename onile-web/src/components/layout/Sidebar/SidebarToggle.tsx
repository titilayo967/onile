"use client";

type SidebarToggleProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="button-secondary hidden w-full lg:flex"
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {collapsed ? "Expand" : "Collapse"}
    </button>
  );
}
