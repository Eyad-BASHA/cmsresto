"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { login, getUserProfile } from "@/services/auth";
import styles from "./LoginModal.module.css";
import Image from "next/image";

export default function LoginModale() {
  const router = useRouter();
  const { setUser } = useUser();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const userProfile = await login(emailOrUsername, password);
      setUser(userProfile);
      setIsModalOpen(false); // Close modal after successful login
      router.push("/auth/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error("Login failed or failed to fetch profile:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal} className={styles.loginButton}>
        Login
      </button>

      {isModalOpen && (
        <div className={styles.loginModal}>
          <div className={styles.loginContainer}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <div className={styles.loginImage}>
              <Image
                src="/loginImages/heroLogin2.jpg"
                alt="Login Image"
                height={500}
                width={500}
                className={styles.image}
              />
            </div>
            <div className={`flex flex-col items-center ${styles.loginForm}`}>
              <h2>Connexion</h2>
              <p>Entrez votre email pour vous connecter.</p>

              <input
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                placeholder="Email or Username"
                className={styles.inputEmail}
                onKeyDown={handleKeyDown}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={styles.inputEmail}
                onKeyDown={handleKeyDown}
              />
              <button className={styles.loginBtn} onClick={handleLogin}>
                Login
              </button>
              <div className={styles.separator}>
                <span>OU</span>
              </div>
              <p className={styles.loginTerms}>
                En continuant, vous acceptez les{" "}
                <a href="#">Conditions de vente</a>, les{" "}
                <a href="#">Conditions d'utilisation</a>
                et la <a href="#">Politique de confidentialité</a> mises à jour.
              </p>
              <div className={styles.socialLogin}>
                <button className={styles.googleBtn}>
                  Continuer avec Google
                </button>
                <button className={styles.facebookBtn}>
                  Continuer avec Facebook
                </button>
                <button className={styles.appleBtn}>
                  Continuer avec Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}