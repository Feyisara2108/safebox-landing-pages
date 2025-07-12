// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    // <header className="flex justify-between items-center px-6 sm:px-12 py-4">
    //   <div className="flex items-center gap-2">
    //     <img src="/safebox logo.svg" alt="Safebox Logo" width={120} height={120} />
    //     <span className="text-xl font-semibold text-gray-800"></span>
    //   </div>
    //   <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition" >
    //     Join the Waitlist
    //   </a>
    // </header>
    <header className="py-4 bg-white">
    <div className="container mx-auto flex justify-between items-center px-6 sm:px-12">
      <div className="flex items-center gap-2">
        <img src="/safebox logo.svg" alt="Safebox Logo" width={120} height={120} />
        <span className="text-xl font-semibold text-gray-800"></span>
      </div>
      <a
        href="#"
        className="bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
      >
        Join the Waitlist
      </a>
    </div>
  </header>

  );
}
