import styles from "./footer.module.css"

import Image from "next/image"

import instagramSvg from "@/public/images/instagram.svg"
import githubSvg from "@/public/images/github.svg"
import discordSvg from "@/public/images/discord.svg"
import emailSvg from "@/public/images/email.svg"

import { motion } from "framer-motion"

const SmallImage = ({src, alt, href}) => {
    return(
        <a href={href} target="_blank" style={{textDecoration: "underline"}}>
            <Image src={src} alt={alt} width={32} height={32}/>
        </a>
    )
}

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>————X————</p>

            <section>
            {/* socials */}
                <nav>
                    {/* <SmallImage src={instagramSvg} href="https://www.instagram.com/arthurfary/" alt="Instagram"/>
                    <SmallImage src={githubSvg} alt="Github"/>
                    <SmallImage src={discordSvg} alt="Discord"/>
                    <SmallImage src={emailSvg} alt="Email"/>   
                                      */}
                     <a style={{textDecoration: "underline"}} href="https://www.instagram.com/arthurfary/">Instagram</a>
                     <a style={{textDecoration: "underline"}} href="https://www.instagram.com/arthurfary/">Github</a>
                     <a style={{textDecoration: "underline"}} href="https://www.instagram.com/arthurfary/">Discord</a>
                     <a style={{textDecoration: "underline"}} href="https://www.instagram.com/arthurfary/">Email</a>
                </nav>

            {/* inspired by */}
                <p style={{fontSize: "0.5em"}}>Inspirado por <a style={{textDecoration: "underline", fontSize: "0.5rem"}} href="http://kentuckyroutezero.com/">Kentucky Route Zero</a></p>
                <br />
            </section>
            
        </footer>
    )
}

export default Footer