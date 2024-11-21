import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
