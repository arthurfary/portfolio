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
    </PageLayout>
  )
}
