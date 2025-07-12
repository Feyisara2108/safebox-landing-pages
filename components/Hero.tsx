// components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center px-6 py-16 bg-white">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
        Your Family Deserves to Know
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Safebox is the legacy vault for important files, logins, and financial
        data. Give your loved ones peace of mind when it matters most.
      </p>
      <a
        href="#"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-green-700 transition"
      >
        Join the Waitlist
      </a>

      {/* Placeholder for trust logos/faces */}
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <img src="/trust1.png" alt="Trust partner 1" className="h-10" />
        <img src="/trust2.png" alt="Trust partner 2" className="h-10" />
        <img src="/trust3.png" alt="Trust partner 3" className="h-10" />
        <img src="/trust4.png" alt="Trust partner 4" className="h-10" />
      </div>
    </section>
  );
}
