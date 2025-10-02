import Search from '../../components/Search/Search'
import type { UserProps } from '../../types/user'
import { useState } from 'react'
import User from "../../components/User/User"
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'


function Home() {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsloading] = useState<boolean>(false)

    const loadUser = async (username: string) => {
        setIsloading(true)
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()

        setIsloading(false)

        if(res.status === 404) {
            setError(true)
            return
        }

        const {avatar_url, login, location, followers, following} = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        setUser(userData)
    }
    return (
        <div>
            <Search loadUser={loadUser} />
            {isLoading && <Loader/>}
            {user && <User {...user} />}
            {error && <Error/>}
        </div>
    )
}

export default Home