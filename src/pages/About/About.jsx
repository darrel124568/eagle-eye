import Navbar from "../../components/Navbar/Navbar";

import React from "react";

function About() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            About Bird Explorer 
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Bird Explorer is an interactive website built to make discovering
            and learning about bird species simple, enjoyable, and accessible.
          </p>
        </section>

        {/* About the Project */}
        <section className="mb-10 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
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
        <section className="mb-10 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold text-gray-800">
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
        <section className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
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

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Built with React and a love for birds 
        </p>

      </div>
    </div>
    </>
  );
}

export default About;

