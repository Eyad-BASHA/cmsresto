"use client"; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserProfile, logout } from '../../../services/auth';
import { UserProfile } from '../../../types/types'; 

export default function Dashboard() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const router = useRouter();
    

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile(); 
                setUser(profile); 
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                router.push("/?login=true"); 
            }
        };

        fetchProfile();
    }, [router]);

    if (!user) {
        return <div>Loading...</div>; 
    }

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center">
            <h1>Dashboard</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Lastname: {user.last_name}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}