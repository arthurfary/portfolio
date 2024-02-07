import styles from "./footer.module.css"

import Image from "next/image"

import instagramSvg from "@/public/images/instagram.svg"
import githubSvg from "@/public/images/github.svg"
import discordSvg from "@/public/images/discord.svg"
import emailSvg from "@/public/images/email.svg"

const SmallImage = ({src, alt}) => {
    return(
        <Image src={src} alt={alt} width={32} height={32}/>
    )
}

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>————X————</p>

            <section>
            {/* socials */}
                <nav>
                    <a href=""><SmallImage src={instagramSvg} alt="Instagram"/></a>
                    <a href=""><SmallImage src={githubSvg} alt="Github"/></a>
                    <a href=""><SmallImage src={discordSvg} alt="Discord"/></a>
                    <a href=""><SmallImage src={emailSvg} alt="Email"/></a>                    
                </nav>

            {/* inspired by */}
                <p>Insipiração</p>

            </section>
            
        </footer>
    )
}

export default Footer