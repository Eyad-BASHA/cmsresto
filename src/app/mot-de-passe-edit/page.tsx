"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    const token = localStorage.getItem("token"); 
    console.log('Token retrieved from localStorage:', token);

    if (!token) {
      throw new Error("No token found");
    }

    try {
      const res = await fetch(`${siteUrl}/user/change-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        }),
      });

      if (res.ok) {
        setMessage("Password updated successfully.");
        router.push("/profile");
      } else {
        const data = await res.json();
        setMessage(data.detail || "Error updating the password.");
      }
    } catch (error) {
      setMessage("Error updating the password.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Modifier le mot de passe</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Ancien mot de passe"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nouveau mot de passe"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmer le nouveau mot de passe"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Mettre à jour le mot de passe
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
