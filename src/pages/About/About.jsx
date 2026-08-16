import Navbar from "../../components/Navbar/Navbar";

import aboutBird from '../../assets/b.webp';

function About() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-[#082b50] px-6 py-14 text-center text-white shadow-xl shadow-blue-950/10 sm:px-12">
          <img src={aboutBird} alt="Perched bird" className="absolute inset-0 h-full w-full object-cover opacity-70"/>
          <div className="absolute inset-0 bg-[#082b50]/75" />
          <div className="relative">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-sky-200">About Eagle Eye</p>
          <h1 className="mb-4 text-4xl font-bold">
            About Bird Explorer 
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
            Bird Explorer is an interactive website built to make discovering
            and learning about bird species simple, enjoyable, and accessible.
          </p>
          </div>
        </section>

        {/* About the Project */}
        <section className="mb-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm shadow-blue-950/5">
          <h2 className="mb-4 text-2xl font-semibold text-[#0b1f3a]">
            Our Goal
          </h2>

          <p className="leading-7 text-gray-600">
            This project was created to give bird enthusiasts and curious
            learners an easy way to explore different bird species. You can
            search for birds, view information about them, and save your
            favorite species for easy access later.
          </p>
        </section>

        {/* Features */}
        <section className="mb-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm shadow-blue-950/5">
          <h2 className="mb-5 text-2xl font-semibold text-[#0b1f3a]">
            What You Can Do
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li> Search and explore different bird species.</li>
            <li> Learn interesting information about birds.</li>
            <li> Save your favorite birds.</li>
            <li>Discover species from around the world.</li>
          </ul>
        </section>

        {/* API Credit */}
        <section className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm shadow-blue-950/5">
          <h2 className="mb-4 text-2xl font-semibold text-[#0b1f3a]">
            Data & API
          </h2>

          <p className="mb-4 leading-7 text-gray-600">
            The bird information used by this project is provided through the{" "}
            <a
              href="https://github.com/tustoz/ornithophile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              Ornithophile API
            </a>
            .
          </p>

          <p className="leading-7 text-gray-600">
            Special thanks to{" "}
            <a
              href="https://github.com/tustoz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
               Maxi Aditya Kusuma Winarjo
            </a>{" "}
            for creating and making the API available to developers. This
            project would not have been possible without the bird data
            provided by the API.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}

export default About;
