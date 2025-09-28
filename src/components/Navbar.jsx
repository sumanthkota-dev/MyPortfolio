import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
      <h1 className="font-bold text-lg">Portfolio</h1>
      <button
        className="px-3 py-1 rounded bg-[var(--primary)] text-white"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
