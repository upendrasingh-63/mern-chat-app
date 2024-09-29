
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

export const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        try {
            setLoading(true)
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            })
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error)
            } else {
                toast.success("Login  Successfully!")
                setAuthUser(data)
                localStorage.setItem("chat-user", JSON.stringify(data))
            }

        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }

    }
    return { loading, login }


}