"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordResetRequest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${siteUrl}/user/password-reset/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage(
          "Un email de réinitialisation du mot de passe a été envoyé.",
        );
      } else {
        const data = await res.json();
        setMessage(data.detail || "Erreur lors de l'envoi de l'email.");
      }
    } catch (error) {
      setMessage("Erreur lors de la réinitialisation du mot de passe.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Réinitialiser le mot de passe</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Envoyer
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensures the container takes up at least the full height of the viewport
    backgroundColor: "#f9f9f9",
  },
  container: {
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#e74c3c",
  },
};