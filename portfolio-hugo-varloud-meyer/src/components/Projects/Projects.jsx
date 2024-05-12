import React, { useEffect, useRef, useState } from 'react';
import "./Projects.css";
import { useScroll, useTransform, motion } from 'framer-motion';

const slider1 = [
  {
      color: "#d7d4cf",
      src: "site5.jpeg"
  },
  {
      color: "#e5e0e1",
      src: "site5.jpeg"
  },
  {
      color: "#d7d4cf",
      src: "site5.jpeg"

  },
  {
      color: "#d6d7dc",
      src: "site5.jpeg"

  }
]

const slider2 = [
  {
      color: "#d6d7dc",
      src: "site5.jpeg"
  },
  {
      color: "#e5e0e1",
      src: "site5.jpeg"
  },
  {
      color: "#d7d4cf",
      src: "site5.jpeg"
  },
  {
      color: "#e1dad6",
      src: "site5.jpeg"
  }
]

const Section = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  return (
      <div ref={container} className="slidingImages">
        <motion.div style={{x: x1}} className="slider">
                {
                    slider1.map( (project, index) => {
                        return <div key={index} className="project" style={{backgroundColor: project.color}} >
                            <div className="imageContainer">
                                <img className='webSiteImage' src={`/src/assets/${project.src}`}/>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className="slider">
                {
                    slider2.map( (project, index) => {
                        return <div key={index} className="project" style={{backgroundColor: project.color}} >
                            <div key={index} className="imageContainer">
                                <img className='webSiteImage' src={`/src/assets/${project.src}`}/>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{height}} className="circleContainer">
                <div className="circle"></div>
            </motion.div>
        </div>
  );
};

export default Section;
