import { useContext } from "react";
import { Header, Footer } from "./FooterHeader.jsx";
import { Link } from "react-router";
import posters from "../assets/Posters.png";
import { DarkmodeContext } from "../context/DarkmodeContext.jsx";
import { motion } from "motion/react";

export default function App() {
  const { darkmode } = useContext(DarkmodeContext);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="transition-delay-100 flex h-screen max-w-screen flex-col gap-6 bg-stone-100 transition-all dark:bg-stone-900">
        <Header />
        <motion.main
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="transition-delay-100 flex flex-1 items-center justify-center bg-stone-100 transition-colors md:gap-50 dark:bg-stone-900"
        >
          <motion.div
            className="flex flex-col flex-wrap items-center justify-center gap-10 md:h-full md:w-120 md:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-6xl font-bold text-lime-600"
              variants={itemVariants}
            >
              Cinemovie
            </motion.h1>
            <motion.p
              className="font-inter text-center text-neutral-600 md:text-left md:text-xl dark:text-stone-100"
              variants={itemVariants}
            >
              At <span className="text-indigo-600">Cinemovie</span>, you'll find
              a wide selection of movies and series for every taste. Explore new
              releases, timeless classics, and personalized recommendations —
              all in one place.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/shop"
                className="inline-flex h-15 w-40 cursor-pointer items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-stone-100 transition-all delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 active:scale-95 dark:bg-indigo-600"
              >
                Start shopping
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex md:flex-row"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <img src={posters} alt="no hay img" className="h-100" />
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
