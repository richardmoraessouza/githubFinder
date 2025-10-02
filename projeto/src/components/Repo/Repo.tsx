import type { RepoProps } from "../../types/repo"

import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import styles from "./Repo.module.css"

function Repo({name, html_url, language, stargazers_count, forks_count}: RepoProps) {
    return (
        <div className={`d-flex flex-column align-items-start  overflow-hidden ${styles.repo}`}>
            <h3>{name}</h3>
            <p className={`d-flex align-items-cente ${styles.language}`}>
                <BsCodeSlash/>
                <span>{language}</span>
            </p>
            <div className={styles.stats}>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank" className={styles.repo_btn}>
                <span>Ver código</span>
                <RiGitRepositoryLine />
            </a>
        </div>
    )
}
export default Repo