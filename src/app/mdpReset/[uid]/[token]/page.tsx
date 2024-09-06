"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function PasswordResetConfirm({params}: {params: any}) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uid, setUid] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;


    useEffect(() => {
    //   console.log("useEffect called"); 
        // console.log("UID:", params.uid);
        // console.log("Token:", params.token);
        setUid(params.uid);
        setToken(params.token)
    }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await fetch(`${siteUrl}/user/password-reset-confirm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, token, new_password: newPassword }),
      });

      if (res.ok) {
        setMessage("Votre mot de passe a été réinitialisé avec succès.");
        router.push("/?login=true");
      } else {
        const data = await res.json();
        setMessage(
          data.detail || "Erreur lors de la réinitialisation du mot de passe.",
        );
      }
    } catch (error) {
      setMessage("Erreur lors de la réinitialisation du mot de passe.");
    }
  };
return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Définir un nouveau mot de passe</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Entrez votre nouveau mot de passe"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmez votre nouveau mot de passe"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Réinitialiser le mot de passe
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  container: {
    maxWidth: "400px",
    width: "100%",
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  message: {
    color: "green",
    fontSize: "14px",
    marginTop: "10px",
  },
};
