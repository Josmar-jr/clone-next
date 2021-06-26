import { motion } from 'framer-motion';

const Layout: React.FC = ({ children }) => {
  return <div className="max-w-5xl mx-auto px-4">{children}</div>;
};

export default function Home() {
  return (
    <Layout>
      <motion.header
        className="flex justify-between items-center h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 4,
        }}
      >
        <motion.img
          className="h-8"
          src="logo.svg"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 10,
            duration: 5,
            delay: 4,
          }}
        />

        <nav className="flex items-center space-x-4">
          <a className="text-gray-700 hover:text-black" href="#">
            Josmar
          </a>
          <a className="text-gray-700 hover:text-black" href="#">
            Soares
          </a>
          <a className="text-gray-700 hover:text-black" href="#">
            Trigueiro
          </a>
          <a className="text-gray-700 hover:text-black" href="#">
            Junior
          </a>
        </nav>

        <button className="bg-blue-600 text-white py-1 px-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 border border-blue-600">
          Learn
        </button>
      </motion.header>
      <motion.h1
        className="font-extrabold .tracking-tighter text-8xl text-center max-w-3xl mx-auto mt-16"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        The React Framework
      </motion.h1>
      <motion.h3
        className="text-xl mt-8 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 2,
        }}
      >
        Next.js gives you the best developer experience with all the features
        you need for production: hybrid static & server rendering, TypeScript
        support, smart bundling, route pre-fetching, and more. No config needed.
      </motion.h3>

      <motion.div
        className="flex justify-center align-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 4,
        }}
      >
        <button className="bg-blue-600 text-white py-1 px-4 rounded-lg h-8 font-medium m-2">
          Start Learning
        </button>
        <button className="bg-white text-white-600 py-1 px-4 rounded-lg h-8 font-medium shadow-xl m-2">
          Want to present
        </button>
      </motion.div>
    </Layout>
  );
}
