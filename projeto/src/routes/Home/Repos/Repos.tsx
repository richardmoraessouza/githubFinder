import BackBtn from "../../../components/BackBtn/BackBtn"
import type { RepoProps } from "../../../types/repo"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../../components/Loader/Loader"
import Repo from "../../../components/Repo/Repo"
import styles from "./Repos.module.css"

function Repos() {
    const { username } = useParams()

    const [repos, setRepos] = useState<RepoProps[] | [] | null >(null)

    const [isLoading, setIsloading] = useState<boolean>(false)

    useEffect(() => {
        
        const loadRespos = async function(username: string) {
            setIsloading(true)
            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            
            const data = await res.json()

            setIsloading(false)

            let orderedRespos = data.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count)
            
            orderedRespos = orderedRespos.slice(0, 5)

            setRepos(orderedRespos)
        }

        if (username) {
            loadRespos(username)
        }
    }, [])

    if(!repos && isLoading) return <Loader/>

    return (
        <div>
            <BackBtn/>
            <h2>Explore os repositórios do usuário: {username}</h2>
            {repos && repos.length === 0 && <p>Não há repositórios.</p>}
            {repos && repos.length > 0 && (
                <div className={styles.repos_container}>
                    {repos.map((repo: RepoProps) => (
                        <Repo key={repo.name} {...repo}/>
                    ))

                    }
                    
                </div>
            )}
        </div>
    )
}
export default Repos
