import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { data } from 'autoprefixer';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {

        try {
            setLoading(true)
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.error) {
                throw new Error(data.error)
            } else {
                toast.success("Logout successfully!")
                localStorage.removeItem("chat-user")
                setAuthUser(null)
            }

        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }
    return { logout, loading }
}

export default useLogout