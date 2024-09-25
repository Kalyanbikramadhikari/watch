
import { useEffect } from 'react';
import './App.css';
import AboutWatch from './components/AboutWatch';
import Navbar from './components/Navbar'
import ScreenOne from './components/ScreenOne';
import ViewWatch from './components/ViewWatch';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to('.watch', {

  //     top: '109%',
  //     left: '10%',
  //     scrollTrigger: {
  //       trigger: '.screentwo',
  //       scrub: true,
  //       markers: true,
  //       start: "top center",
  //       end: "bottom center",

  //     },
  //   });

  // }, []);
  return (
    <div className='' >
      <Navbar />
      <ScreenOne />
      <AboutWatch />
      <ViewWatch />

    </div>
  );
}

export default App;
