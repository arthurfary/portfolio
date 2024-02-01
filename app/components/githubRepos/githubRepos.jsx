import { useState, useEffect } from 'react'
import { getRepos } from '@/app/functions/getRepos'

import styles from "./repos.module.css"

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
    <div className={styles.ghrepos}>
      {repos && repos?.length > 0 &&
        repos.map((repo, i) => (
          <div key={i}>
            <a href={repo.repo} target='_blank'>
              <h4>{repo.name}:</h4>
            </a> 
            <p>&nbsp;{repo.description.length ? repo.description : "Sem descrição."}</p>
          </div>
        ))
      }
    </div>
  )
}
