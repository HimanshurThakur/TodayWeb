"use client"
import { useEffect } from "react";

const GoogleTranslate = ({ children }) => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false,
                includedLanguages: "en,hi,mr,sa,ur,ta,bh,bn,gu,te,pa,ks", 
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        return () => {
            document.body.removeChild(addScript);
        };
    }, []);



    return (
        <div className="app" id="google_translate_element">
            {children}
        </div>
    );
};

export default GoogleTranslate;
