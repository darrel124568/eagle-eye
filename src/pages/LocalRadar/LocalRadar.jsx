import Navbar from '../../components/Navbar/Navbar';


export default function LocalRadar() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-blue-600">Local Radar</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0b1f3a]">Birds in Your Area</h1>
        </div>
        <p className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-slate-600">
          This feature is currently under development. Please check back later for updates.
        </p>
      </main>
    </>
  );
}