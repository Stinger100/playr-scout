export default function Footer() {
    return (
      <footer className="border-t border-gray-500">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Playr. All rights reserved.
        </div>
        </footer>
    )
}