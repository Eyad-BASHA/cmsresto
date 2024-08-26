// src/app/profile/page.tsx
"use client"; 

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { getUserProfile, logout } from '../../services/auth';
import { UserProfile } from '../../types/types'; 
import styles from './Profile.module.css';

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUser(profile);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
                router.push('/auth/login'); 
            }
        };

        fetchProfile();
    }, [router]);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <h1>Mon Profil</h1>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileSection}>
                    <h2>Informations personnelles</h2>
                    <p><strong>Prénom:</strong> {user.first_name}</p>
                    <p><strong>Nom de famille:</strong> {user.last_name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Nom d'utilisateur:</strong> {user.username}</p>
                    <p><strong>Téléphone:</strong> {user.profile.phone_number}</p>
                </div>
                
                <div className={styles.profileSection}>
                    <h2>Adresse</h2>
                    <div className="avatar">
                        <img src={user.profile.profile_image} alt="profile avatar" />
                    </div>
                    <p><strong>Rue:</strong> {user.profile?.addresses[0]?.street ?? 'Non spécifié'}</p>
                    <p><strong>Ville:</strong> {user.profile?.addresses[0]?.city ?? 'Non spécifié'}</p>
                    <p><strong>Code postal:</strong> {user.profile?.addresses[0]?.zip_code ?? 'Non spécifié'}</p>
                    <p><strong>Pays:</strong> {user.profile?.addresses[0]?.country ?? 'Non spécifié'}</p>
                </div>

                <div className={styles.profileSection}>
                    <h2>Bio</h2>
                    <p>{user.profile.bio}</p>
                </div>

                <button className={styles.logoutBtn} onClick={handleLogout}>Se déconnecter</button>
            </div>
        </div>
    );
}

export default ProfilePage;
