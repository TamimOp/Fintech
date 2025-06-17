import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 flex items-center justify-between px-8 py-4 rounded-2xl border border-white/30 backdrop-blur-md mt-8 z-100 w-[900px]">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2"
        />
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-7 flex-shrink-0">
        <li className="text-white flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Feature
        </li>
        <li className="text-white text-sm">Solution</li>
        <li className="text-white text-sm">Resources</li>
        <li className="text-white text-sm">Pricing</li>
        <li className="text-white text-sm">Login</li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="bg-white text-blue-900 rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap">
          Start free trial
        </button>
        <button className="border border-white text-white rounded-full px-6 py-2.5 font-medium text-sm whitespace-nowrap">
          Book a demo
        </button>
      </div>
    </nav>
  );
}
