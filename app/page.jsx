"use client"

import Image from 'next/image'
import styles from './page.module.css'
import PageLayout from './pageLayout'
import { motion } from "framer-motion"

import apaWebsite from "@/public/images/apawebsite.png"
import sapo from "@/public/images/sapo.png"

import GithubRepos from './components/githubRepos/githubRepos'

export default function Home() {

  function createAnimation(duration, delay, direction = "x", startFrom = -100) {
    return {
      initial: {opacity: 0, [direction]: startFrom},
      whileInView: {opacity: 1, x: 0, y: 0},
      transition: {duration: duration, delay: delay},
    };
  }

  function TextCard({title, children}) {
    return (
      <motion.div {...createAnimation(1, 0)} className={styles.textCard}>
        <h1>{title}</h1>
        {children}
      </motion.div>
    );
  }

  function ImageLink({src, title, description, startx = -200}) {
    return (
      <>
        <motion.div {...createAnimation(2, 0, "x", startx)} whileHover={{scale: 1.02}} className={styles.linkImage}>
          <a href="">
            <Image src={src} style={{objectFit: "cover", width: '100%', height: "100%", borderRadius: "20px"}}/>
          </a>
        </motion.div>
  
        <motion.div {...createAnimation(2, 0, "x", startx)} className={styles.linkText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.div>
      </>
    );
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
        <TextCard title="Programador Full-Stack" />

        <TextCard title="JavaScript">
          <motion.p {...createAnimation(1, 0.2)}>NextJS React - NodeJS - Router - APIs - JSX</motion.p>
        </TextCard>
          
        <TextCard title="Python">
          <motion.p {...createAnimation(1, 0.2)}>Pandas - Selenium - Discord - SQLite3</motion.p>
        </TextCard>
  
        <TextCard>
          <motion.p {...createAnimation(1, 0.2)}>I also know a bit of</motion.p>
          <h2>C; C#; C++; PHP; LUA</h2>
        </TextCard>
  
        <TextCard>
          <motion.p {...createAnimation(1, 0.2)}>And I pride myself with</motion.p>
          <h2>Clean Code; OOP</h2>
        </TextCard>

      </div>
  
      <motion.div {...createAnimation(2, 0, "y", 50)} className={styles.imagine}>  
        <motion.h1 {...createAnimation(2, 0, "y", 100)} >Você imagina, Eu construo!</motion.h1>
  
        <ImageLink 
          src={apaWebsite} 
          title="Website Associação Protetora dos Animas - São Bento do Sul" 
          description="Website Associação Protetora dos Animas - São Bento do Sul" 
        />

        <ImageLink 
          src={sapo} 
          title="Sistema Planilhas para Prefeitura de Sorocaba" 
          description="O sapo não lava o pé" 
          startx={200}
        />

      </motion.div>

      <motion.div>
        <motion.h1 {...createAnimation(2, 0, "y", -10)} >Vamos fazer acontecer?</motion.h1>
      </motion.div>

      <GithubRepos/>

    </PageLayout>
  )
}
