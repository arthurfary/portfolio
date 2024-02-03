import { useState, useEffect } from 'react'
import { getRepos } from '@/app/functions/getRepos'

import { motion } from "framer-motion"

import styles from "./repos.module.css"

function createAnimation(duration, delay, direction = "x", startFrom = -100) {
  return {
    initial: {opacity: 0, [direction]: startFrom},
    whileInView: {opacity: 1, x: 0, y: 0},
    transition: {duration: duration, delay: delay},
  };
}


export default function GithubRepos() {
  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const data = await getRepos();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
      finally{
        setIsLoading(false)
      }
    };
  
    fetchRepos();
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.ghreposcontainer}>
      <div className={styles.ghrepos}>
        <img src="https://github.com/arthurfary.png" alt="myimage" />
        <div className={styles.repoDiv}>

          {repos && repos?.length > 0 &&
            repos.map((repo, i) => (

              <motion.div key={i} {...createAnimation(1, i/10, "y", -20)}>
                <a href={repo.link} target='_blank'>
                  <h4>{repo.name}:</h4> 
                  <p>&nbsp;{repo.description.length ? repo.description : "Sem descrição."}</p>
                </a> 
              </motion.div>
              
            ))
          }

        </div>
      </div>
    </div>
  )
}
