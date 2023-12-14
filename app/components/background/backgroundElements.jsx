import styles from "./background.module.css"

export default function BackgroundElements() {
    return (
    <>
    <div className={styles.background}>
        <div className={styles.bgHero}>
            <span className={`${styles.heroSun} ${styles.gridObject}`}></span> 

            <span className={`${styles.heroMountainOne} ${styles.gridObject}`}></span>
            <span className={`${styles.heroMountainTwo} ${styles.gridObject}`}></span>
            
            <span className={`${styles.heroMountainOverlap} ${styles.gridObject}`}></span>
            <span className={`${styles.heroMountainOverlapTwo} ${styles.gridObject}`}></span>
        </div>
    </div>
    </>
    )
}
