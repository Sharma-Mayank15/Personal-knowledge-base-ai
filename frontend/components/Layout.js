export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4 text-xl font-bold border-b border-gray-300 dark:border-gray-700">
          🧠 My Second Brain
        </header>
        <main className="p-6">{children}</main>
      </div>
    );
  }
  