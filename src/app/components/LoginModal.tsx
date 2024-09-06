"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { login } from "@/services/auth";
import styles from "./LoginModal.module.css";
import Image from "next/image";

function LoginModalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUser();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Effect to open the modal if 'login' parameter is present in the URL
  useEffect(() => {
    const loginParam = searchParams.get("login");
    if (loginParam === "true") {
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const handleLogin = async () => {
    try {
      const userProfile = await login(emailOrUsername, password);
      setUser(userProfile);
      setIsModalOpen(false);
      router.push("/menu");
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
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete("login");
    router.push(currentUrl.toString(), undefined);
  };


  const handleForgotPassword = () => {
    handleCloseModal();
    router.push("/mot-de-passe-oublie"); 
  };

  const linkClasses = (path: string) =>
    pathname === path
      ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
      : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";

  const mobileLinkClasses = (path: string) =>
    pathname === path
      ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
      : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300";

  return (
    <>
      <button onClick={handleOpenModal} className={linkClasses("/profile")}>
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
                <a href="#">Conditions d&apos;utilisation</a>
                et la <a href="#">Politique de confidentialité</a> mises à jour.
              </p>
              <div className={styles.socialLogin}>
              {/* bouton "Mot de passe oublié" */}
              <button
                onClick={handleForgotPassword}
                className={styles.forgotPasswordButton}>
                Mot de passe oublié ?
              </button>
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

export default function LoginModal() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <LoginModalContent />
    </Suspense>
  );
}
