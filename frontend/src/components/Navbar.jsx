import React from 'react'
import { User, Code, LogOut } from "lucide-react"
import { useAuthStore } from '../store/useAuthStore'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { authUser } = useAuthStore();


    return (
        <nav></nav>
    )
}