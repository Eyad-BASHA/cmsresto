"use client";

import { useEffect } from "react";

export default function RecaptchaLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
}
