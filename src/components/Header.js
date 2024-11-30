import { useEffect, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";

const Header = () => {

  let [isMissionOpen, setIsMissionOpen] = useState(false);
  let [isAboutOpen, setIsAboutOpen] = useState(false);
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMission() {
    setIsMissionOpen(true);
  }

  function closeMission() {
    setIsMissionOpen(false);
  }

  function openAbout() {
    setIsAboutOpen(true);
  }

  function closeAbout() {
    setIsAboutOpen(false);
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      <header className="site-header">
        <div className="container-wide px-8 mx-auto">
          <nav className="">
            <div className="flex flex-wrap items-center justify-between mx-auto">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="site-name text-wide ">boredable</span>
              </Link>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black bg-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className={`site-menu-wrapper ${isMenuOpen ? "open" : ""}`}
                id="navbar-default"
              >
                <ul className="site-menu">
                  <li>
                    <button
                      onClick={() => setIsMissionOpen(true)}
                      className="menu-item text-wide"
                      aria-current="page"
                    >
                      Mission
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsAboutOpen(true)}
                      className="menu-item text-wide"
                    >
                      About
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <Dialog
        open={isMissionOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeMission}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition className="dialog-panel">
              <button className="absolute top-4 right-4" onClick={closeMission}>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.343 5.657a1 1 0 011.414 0L12 10.586l4.243-4.243a1 1 0 111.414 1.414L13.414 12l4.243 4.243a1 1 0 01-1.414 1.414L12 13.414l-4.243 4.243a1 1 0 01-1.414-1.414L10.586 12 6.343 7.757a1 1 0 010-1.414z"
                  ></path>
                </svg>
              </button>
              <DialogTitle as="h3" className="dialog-title">
                Mission
              </DialogTitle>
              <p className="mt-2 text-lg text-black/90">
                Building a simple, stress-free social platform that fosters
                creativity, genuine connections, and reinvests in its community
                for a better digital experience.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={isAboutOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeAbout}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition className="dialog-panel">
              <button className="absolute top-4 right-4" onClick={closeAbout}>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.343 5.657a1 1 0 011.414 0L12 10.586l4.243-4.243a1 1 0 111.414 1.414L13.414 12l4.243 4.243a1 1 0 01-1.414 1.414L12 13.414l-4.243 4.243a1 1 0 01-1.414-1.414L10.586 12 6.343 7.757a1 1 0 010-1.414z"
                  ></path>
                </svg>
              </button>
              <DialogTitle as="h3" className="dialog-title">
                About Boredable
              </DialogTitle>
              <p className="mb-4">
                Boredable is a non-profit social media platform committed to
                building a simple, stress-free digital space that fosters
                creativity and genuine connections. Departing from the
                traditional VC-backed startup model, Boredable takes a
                user-first approach, prioritizing the well-being and authentic
                experiences of its community over profits. The platform offers
                tailored premium features designed for users seeking an
                enjoyable and passive online experience without the typical
                pressures of modern social media.
              </p>

              <p className="mb-4">
                Revenue generated from these premium features is directly
                reinvested into the platform, funding dedicated developers who
                continuously refine and enhance Boredable&apos;s offerings. This
                creates a sustainable cycle of growth and innovation, ensuring
                that users remain at the heart of every decision. By joining
                Boredable, you&apos;re embracing a movement that values
                simplicity, authenticity, and community-driven development for a
                better digital experience.
              </p>

              <p className="mb-4 font-bold">
                Boredable is currently in testing with plans to launch in Spring
                2025.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};


export default Header;