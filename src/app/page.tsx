"use client";
import { useEffect } from "react";
import Script from "next/script";
import Main from "../../Components/Shared/Main/page";

export default function Home() {
  useEffect(() => {
    // Function to be called when the Google Translate script is loaded
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    // Load Google Translate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div id="google_translate_element">Translate</div>
      <Main />
    </>
  );
}
