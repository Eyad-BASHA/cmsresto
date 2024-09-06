"use client";

import React from "react";
import Link from "next/link";

export default function ActivationError() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Erreur lors de l&apos;activation</h2>
      <p style={styles.message}>
        Il y a eu un problème lors de l&apos;activation de votre compte.
        Veuillez réessayer ou contacter le support si le problème persiste.
      </p>
      <Link href="/">
        <a style={styles.button}>Retourner à la page d&apos;accueil</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column", // Type assertion for TypeScript
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    textAlign: "center" as "center", // Type assertion for TypeScript
  },
  heading: {
    fontSize: "24px",
    color: "#dc3545",
    marginBottom: "16px",
  },
  message: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "24px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
