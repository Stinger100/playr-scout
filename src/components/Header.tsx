import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-secondary border-b border-gray-500">
      <div className="px-4 py-3 flex items-center justify-between">
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

        <nav className="hidden md:flex items-center gap-6 text-sm text-tertiary">
          <Link href="#features" >Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
        </nav>

        <div className="flex items-center gap-3">
             <button
            className="
              mt-2 inline-flex w-fit cursor-pointer items-center justify-center
              rounded-lg px-5 py-3 text-sm font-bold tracking-[0.015em]
              bg-primary text-secondary hover:opacity-90 transition-opacity
            "
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
