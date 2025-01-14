import React, { useEffect } from "react";

export default function LanguageTranslator() {
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage") || "en|en";

    // Initialize GTranslate settings
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      wrapper_selector: ".gtranslate_wrapper",
      detect_browser_language: false, 
    };

    const scriptId = "gtranslate-script";

    const triggerTranslation = () => {
      const dropdown = document.querySelector(".gtranslate_wrapper select");
      if (dropdown) {
        dropdown.value = storedLanguage;
        dropdown.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };

    const handleChange = (event) => {
      const newLanguage = event.target.value;
      localStorage.setItem("selectedLanguage", newLanguage);
    };

    const setupEventListener = () => {
      const dropdown = document.querySelector(".gtranslate_wrapper select");
      if (dropdown) {
        dropdown.removeEventListener("change", handleChange);
        dropdown.addEventListener("change", handleChange);
      }
    };

    // Load GTranslate script if not already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
      script.defer = true;

      script.onload = () => {
        // Trigger translation and set up event listener as soon as script loads
        triggerTranslation();
        setupEventListener();
      };

      document.body.appendChild(script);
    } else {
      // If the script is already loaded, apply settings immediately
      triggerTranslation();
      setupEventListener();
    }

    // Cleanup on unmount
    return () => {
      const dropdown = document.querySelector(".gtranslate_wrapper select");
      if (dropdown) {
        dropdown.removeEventListener("change", handleChange);
      }
    };
  }, []);

  return (
    <div className="gtranslate">
      <div className="gtranslate_wrapper"></div>
    </div>
  );
};