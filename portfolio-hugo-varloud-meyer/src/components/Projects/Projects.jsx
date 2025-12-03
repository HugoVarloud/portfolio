import { useRef } from "react";
import "./Projects.css";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    src: "/assets/site1.jpeg",
    url: "#", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site2.png",
    url: "https://www.sfr.fr/", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site7.png",
    url: "https://www.atixis.com/", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site6.png",
    url: "https://www.instagram.com/lesfrancaises_restaurant/", // Remplacez par l'URL réelle du projet
  },
];

const slider2 = [
  {
    src: "/assets/site7.png",
    url: "https://notvenomous.com/?srsltid=AfmBOorV3Ipk7d_9pgoLe9vy43XKichkJIoU9p-6pqdVa60nTVFhMob5", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site4.png",
    url: "https://notvenomous.com/?srsltid=AfmBOorV3Ipk7d_9pgoLe9vy43XKichkJIoU9p-6pqdVa60nTVFhMob5", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site3.png",
    url: "https://www.engie-homeservices.fr/", // Remplacez par l'URL réelle du projet
  },
  {
    src: "/assets/site44.png",
    url: "https://code-by-hugo.netlify.app/", // Remplacez par l'URL réelle du projet
  },
];

const Section = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div ref={container} className="slidingImages">
      <motion.div style={{ x: x1 }} className="slider">
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="project"
              style={{ backgroundColor: project.color }}
            >
              <div className="imageContainer">
                <img
                  className="webSiteImage"
                  src={project.src}
                  alt={`Project ${index + 1}`}
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewProjectButton"
                  onClick={(e) => {
                    if (project.url === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className="slider">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="project"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="imageContainer">
                <img
                  className="webSiteImage"
                  src={project.src}
                  alt={`Project ${index + 1}`}
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewProjectButton"
                  onClick={(e) => {
                    if (project.url === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </div>
  );
};

export default Section;
