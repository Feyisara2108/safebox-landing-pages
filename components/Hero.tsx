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
      <a href="#" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-green-700 transition"  >
        Join the Waitlist
      </a>

      {/* Placeholder for trust logos/faces */}
      {/* <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <img src="/digital access card.png" alt="digital access card" className="h-10" />
        <img src="/personal-ids.png" alt="personal-ids." className="h-10" />
        <img src="/dashboard-screenshot.png" alt="dashboard-screenshot" className="h-10" />
        <img src="/bank-accounts.png" alt="bank-accounts" className="h-10" />
        <img src="/household.png" alt="household" className="h-10" />
      </div> */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left cards */}
        <div className="flex flex-col gap-6">
           <img src="/digital access card.png"   alt="Digital Access"  className="w-[180px] bg-white shadow-md rounded-xl p-4 object-contain"/>
           <img src="/personal-ids.png" alt="Personal IDs" className="w-[180px] bg-white shadow-md rounded-xl p-4 object-contain" />
        </div>

        {/* Phone preview in the middle */}
        <div className="w-[200px] h-[400px] relative">
         <img src="/dashboard-screenshot.png" alt="Dashboard"  className="object-contain" />
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-6">
          {/* <img
              src="/dashboard-screenshot.png"
              alt="Dashboard"
              className="w-[180px] bg-white shadow-md rounded-xl p-4 object-contain"
          /> */}
          <img src="/bank-accounts.png" alt="Bank Accounts" className="w-[180px] bg-white shadow-md rounded-xl p-4 object-contain" />
          <img src="/household.png"  alt="Household"  className="w-[180px] bg-white shadow-md rounded-xl p-4 object-contain" />
        </div>
     </div>

    </section>
  );
}
