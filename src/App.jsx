import styles from "./App.module.css";
import { About } from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Educations/Education";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      
      <Experience />
      <Projects />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;