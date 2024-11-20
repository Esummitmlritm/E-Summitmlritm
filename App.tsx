import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Speakers />
      <Events />
      <Sponsors />
      <Footer />
    </motion.div>
  );
}

export default App;