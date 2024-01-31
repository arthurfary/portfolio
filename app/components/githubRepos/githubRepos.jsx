import { useState, useEffect } from 'react'
import { getRepos } from '@/app/functions/getRepos'

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
    <>
      {repos && repos?.length > 0 &&
        repos.map((repo, i) => (
          <div key={i}>
            <p>{repo.name}</p>
            <a href={repo.html_url}>{repo.html_url}</a> 
          </div>
        ))
      }
    </>
  )
}
