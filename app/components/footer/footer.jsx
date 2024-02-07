import styles from "./footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>————X————</p>

            <section>
            {/* socials */}
                <nav>
                    <a href="">insta</a>
                    <a href="">Github</a>
                    <a href="">Discord</a>
                    <a href="">Email</a>                    
                </nav>

            {/* inspired by */}
                <p>Insipiração</p>

            </section>
            
        </footer>
    )
}

export default Footer