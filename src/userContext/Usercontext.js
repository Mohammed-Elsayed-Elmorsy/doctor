'use client'
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const Router = useRouter()
    const [user, setUser] = useState(null)
    const [image, setImage] = useState(null)
    const [emailFromContext, setEmailContext] = useState(null)
    const [loadingfromContext, setLoading] = useState(true)
    async function verify() {
        const res = await fetch('api/verify')
        const result = await res.json()
        setLoading(false)
        setUser(await result?.data?.firstName)
        setEmailContext(await result?.data?.email)
        setImage(await result?.data?.image)
    }
    console.log(image);
    const logout = async () => {
        try {
            await fetch('/api/logout', { method: 'POST' })
            setUser(null)
            Router.push('/login')
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }
    useEffect(() => {
        verify()
    }, [])
    return <UserContext.Provider value={{ user, setUser, image, setImage, emailFromContext, logout, loadingfromContext, setEmailContext }} >
        {children}
    </UserContext.Provider>
}