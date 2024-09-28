import React, { useEffect, useRef, useState } from 'react';
import "./Projects.css";
import { useScroll, useTransform, motion } from 'framer-motion';

const slider1 = [
    {
      src: "/assets/site1.jpeg"  
    },
    {
      src: "/assets/site2.png"  
    },
    {
      src: "/assets/site7.png"
    },
    {
      src: "/assets/site6.png"
    }
  ]
  
  const slider2 = [
    {
      src: "/assets/site7.png"  
    },
    {
      src: "/assets/site4.png"  
    },
    {
      src: "/assets/site3.png"
    },
    {
      src: "/assets/site44.png"
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
