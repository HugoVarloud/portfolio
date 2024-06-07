import React, { useEffect, useRef, useState } from 'react';
import "./Projects.css";
import { useScroll, useTransform, motion } from 'framer-motion';

const slider1 = [
    {
      src: "https://picsum.photos/id/15/300/200"  
    },
    {
      src: "https://picsum.photos/id/119/300/200"  
    },
    {
      src: "https://picsum.photos/id/29/300/200"
    },
    {
      src: "https://picsum.photos/id/48/300/200"
    }
]

const slider2 = [
  {
    src: "https://picsum.photos/id/0/300/200"
  },
  {
    src: "https://picsum.photos/id/154/300/200"
  },
  {
    src: "https://picsum.photos/id/372/300/200"
  },
  {
    src: "https://picsum.photos/id/11/300/200"
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
                              <img className='webSiteImage' src={project.src}/>
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
                              <img className='webSiteImage' src={project.src}/>
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
