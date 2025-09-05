import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
        <Image
          src="/brand/playr-logo.png"
          alt="Playr"
          width={86}
          height={56}
          priority
          className="w-auto h-auto rounded-full"
      />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#features" className="hover:text-gray-900">Features</Link>
          <Link href="#about" className="hover:text-gray-900">About</Link>
          <Link href="#contact" className="hover:text-gray-900">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
