// src/app/profile/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserProfile, logout } from "../../services/auth";
import { UserProfile } from "../../types/types";
import styles from "./Profile.module.css";
import Image from "next/image";
import ChangePasswordButton from "@/components/ChangePasswordButton";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        router.push("/?login=true");
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) return <div className={styles.loading}>Loading...</div>;

  const address = user.profile?.addresses?.[0] || {
    street: "Non spécifié",
    city: "Non spécifié",
    zip_code: "Non spécifié",
    country: "Non spécifié",
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>Mon Profil</h1>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.infoSection}>
          <div className={styles.profileSection}>
            <h2>Informations personnelles</h2>
            <p>
              <strong>Prénom:</strong> {user.first_name}
            </p>
            <p>
              <strong>Nom de famille:</strong> {user.last_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Nom d&apos;utilisateur:</strong> {user.username}
            </p>
            <p>
              <strong>Bio:</strong> {user.profile.bio}
            </p>
            <div className={styles.avatarContainer}>
              <Image
                src={user.profile.profile_image}
                alt="User Profile Image"
                width={150}
                height={150}
                unoptimized={true}
                className={styles.avatar}
              />
            </div>
          </div>

          <div className={styles.profileSection}>
            <h2>Adresse</h2>
            <p>
              <strong>Rue:</strong> {address.street}
            </p>
            <p>
              <strong>Ville:</strong> {address.city}
            </p>
            <p>
              <strong>Code postal:</strong> {address.zip_code}
            </p>
            <p>
              <strong>Pays:</strong> {address.country}
            </p>
          </div>

          <div className={styles.profileSection}>
            <ChangePasswordButton />
          </div>
        </div>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
