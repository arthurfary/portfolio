"use client"

import Image from 'next/image'
import styles from './page.module.css'
import PageLayout from './pageLayout'
import { motion } from "framer-motion"

export default function Home() {

  function createAnimation(duration, delay, direction = "x", startFrom = -100) {
    return {
      initial: {opacity: 0, [direction]: startFrom},
      whileInView: {opacity: 1, x: 0, y: 0},
      transition: {duration: duration, delay: delay},
    };
  }

  
  return (
    <PageLayout>
      <div className={styles.startHero}>
        <motion.div className={styles.titleHero}>
          <motion.h1 {...createAnimation(3, 0, "y")}>Oi, me chamo</motion.h1>
          <motion.h1 {...createAnimation(2, 0, "y")}>Arthur</motion.h1>

          <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration:2}} className={styles.buttonSpace}>
            <p>E seja bem vindo ao meu site</p>
          </motion.div>

          <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} transition={{duration:2}}>
            <a href="" className={styles.buttonHero}>
              Entrar em Contato
            </a>
          </motion.div>

        </motion.div>
      </div>
  
      <div className={styles.aboutMe}>
        <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
          <h1>Programador Full-Stack</h1>
        </motion.div>
  
        <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
          <h1>JavaScript</h1>
          <motion.p {...createAnimation(1, 0.2)}>NextJS React - NodeJS - Router - APIs - JSX</motion.p>
        </motion.div>
  
        <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
          <h1>Python</h1>
          <motion.p {...createAnimation(1, 0.2)}>Pandas - Selenium - Discord - SQLite3</motion.p>
        </motion.div>
  
        <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
          <motion.p {...createAnimation(1, 0.2)}>I also know a bit of</motion.p>
          <h2>C; C#; C++; PHP; LUA</h2>
        </motion.div>
  
        <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
          <motion.p {...createAnimation(1, 0.2)}>And I pride myself with</motion.p>
          <h2>Clean Code; OOP</h2>
        </motion.div>
      </div>
  
      <motion.div {...createAnimation(2, 0, "y", 50)} className={styles.imagine}>  
        <motion.h1 {...createAnimation(2, 0, "y", 100)} >Você imagina, Eu construo!</motion.h1>
  
        {/* BIG SUN WITH LAKE HERE, TALKING ABOUT HOW YOU DREAM AND I BUILD, MAYBE THE SCENE FROM KRO WERE THE METEOR LANDS */}
  
      </motion.div>
    </PageLayout>
  )
}
