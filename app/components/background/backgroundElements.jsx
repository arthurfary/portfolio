import styles from "./background.module.css"
import bulb from "../../../public/light-bulb-idea-svgrepo-com.svg"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BackgroundElements() {
    function createAnimation(duration) {
        return {
          key: "test",
          initial: {opacity: 1, y: 50},
          whileInView: {opacity: 1, y: 0},
          transition: {ease: "easeOut", duration: duration},
          exit: {opacity: 1, x: -100},
        };
      }
      
    return (
    <>
    <div className={styles.background}>
        <div className={styles.bgHero}>
            <motion.span {...createAnimation(3)} initial={{opacity: 0, y: 200}} className={`${styles.heroSun} ${styles.gridObject}`}></motion.span> 
            <motion.span {...createAnimation(2.5)} className={`${styles.heroMountainOne} ${styles.gridObject}`}></motion.span>
            <motion.span {...createAnimation(2)} className={`${styles.heroMountainTwo} ${styles.gridObject}`}></motion.span>
            <motion.span {...createAnimation(1)} className={`${styles.heroMountainOverlap} ${styles.gridObject}`}></motion.span>
            <motion.span {...createAnimation(0.8)} className={`${styles.heroMountainOverlapTwo} ${styles.gridObject}`}></motion.span>
        </div>

        <div className={styles.bgAboutMe}>

            

        </div>

        <div className={styles.bgImagine}>
            {/* <span className={`${styles.imagineSun} ${styles.gridObject}`}></span>  */}
            <Image className={`${styles.bulb} ${styles.gridObject}`} src={bulb} />
        </div>
    </div>
    </>
    )
}
