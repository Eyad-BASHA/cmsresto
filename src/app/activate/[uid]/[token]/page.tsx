"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Activate({
  params,
}: {
  params: { uid: string; token: string };
}) {
  const router = useRouter();
  const { uid, token } = params;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // console.log("$$$$$$$$$$$ : ", uid, " | ", token);

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/user/activate/${uid}/${token}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const data = await response.json();
        if (data.detail === "Your account has been activated successfully!") {
          router.push("/?login=true");
        } else {
          // console.log("DATA    : ", data);
          router.push("/activation-error");
        }
      } catch (error) {
        console.error("Erreur lors de l'activation :", error);
        router.push("/activation-error");
      }
    };

    if (uid && token) {
      activateAccount();
    }
  }, [uid, token, router, siteUrl]);

  return (
    <div>
      <h2>Activation en cours...</h2>
      {/* Affichez un message ou un spinner pendant l'activation */}
    </div>
  );
}
