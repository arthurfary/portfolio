import Image from 'next/image'
import styles from './page.module.css'
import PageLayout from './pageLayout'

export default function Home() {
  return (
    <PageLayout>
      <div className={styles.startHero}>
        <div className={styles.titleHero}>
            <h1>Oi, me chamo</h1>
            <h1>Arthur</h1>
          <p>E seja bem vindo ao meu site</p>

          <a href="" className={styles.buttonHero}>
            Entrar em Contato
          </a>
        </div>
      </div>

      <div className={styles.aboutMe}>
          <div className={styles.textCard}>
            <h1>Programador Full-Stack</h1>
          </div>
          <div className={styles.textCard}>
            <h1>JavaScript</h1>
            <p>NextJS - React - NodeJS - Router - APIs - JSX</p>
          </div>
          <div className={styles.textCard}>
            <h1>Python</h1>
            <p>Pandas - Selenium - Discord - SQLite3</p>
          </div>
          <div className={styles.textCard}>
            <p>I also know a bit of</p>
            <h2>C; C#; C++; PHP; LUA</h2>
          </div>
          <div className={styles.textCard}>
            <p>And I pride myself with</p>
            <h2>Clean Code; OOP</h2>
          </div>
      </div>

      <div className={styles.imagine}>  
        <h1>Você imagina, Eu construo!</h1>

        {/* BIG SUN WITH LAKE HERE, TALKING ABOUT HOW YOU DREAM AND I BUILD, MAYBE THE SCENE FROM KRO WERE THE METEOR LANDS */}

      </div>
    </PageLayout>
  )
}
