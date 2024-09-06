import React from "react";
import { useRouter } from "next/navigation";

export default function ChangePasswordButton() {
  const router = useRouter();

  const handleChangePassword = () => {
    router.push("/mot-de-passe-edit");
  };

  return (
    <button onClick={handleChangePassword} style={styles.button}>
      Changer le mot de passe
    </button>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
};
