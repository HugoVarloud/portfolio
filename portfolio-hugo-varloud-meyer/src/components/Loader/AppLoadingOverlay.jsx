/**
 * Composant AppLoadingOverlay - Overlay plein écran avec gestion d'état
 * @fileoverview Overlay qui gère l'état, monte à 0, écoute la progression, et fait le fade-out à 100%
 */

import React, { useEffect, useState, useRef } from "react";
import CircularLoader from "./CircularLoader.jsx";
import "./CircularLoader.css";

// Import du script de test en mode développement
if (process.env.NODE_ENV === "development") {
  import("./testCircularLoader.js");
}

/**
 * Hook pour détecter les préférences de mouvement réduit
 * @returns {boolean} true si prefers-reduced-motion est activé
 */
const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
};

/**
 * Hook pour gérer la progression du chargement
 * @param {Object} config - Configuration du chargement
 * @returns {Object} État et méthodes du chargement
 */
const useLoadingProgress = (config = {}) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const startTimeRef = useRef(Date.now());
  const timeoutRef = useRef(null);

  // Configuration par défaut
  const defaultConfig = {
    minDisplayTime: 600,
    maxWaitTime: 5000,
    simulationDuration: 2500,
    ...config,
  };

  // Simulation de progression avec blocage à 95%
  const simulateProgress = () => {
    const startTime = Date.now();
    const duration = defaultConfig.simulationDuration;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Progression non-linéaire pour un effet plus naturel
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3);
      const simulatedProgress = Math.min(easedProgress * 0.95, 0.95); // Blocage à 95%

      setProgress(simulatedProgress);

      // Messages d'état par paliers
      if (simulatedProgress < 0.2) {
        setStatus("Préparation de l'expérience...");
      } else if (simulatedProgress < 0.4) {
        setStatus("Chargement des polices...");
      } else if (simulatedProgress < 0.6) {
        setStatus("Chargement des médias...");
      } else if (simulatedProgress < 0.8) {
        setStatus("Optimisation des animations...");
      } else {
        setStatus("Finalisation...");
      }

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Chargement réel des ressources critiques
  const loadCriticalResources = async () => {
    try {
      // Chargement des polices
      setStatus("Chargement des polices...");
      await document.fonts.ready;
      setProgress(0.2);

      // Chargement de l'image hero
      setStatus("Préparation de l'image...");
      const img = new Image();
      img.src = "/assets/montain.jpg";
      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
        setTimeout(resolve, 1000); // Timeout de sécurité
      });
      setProgress(0.4);

      // Préparation des animations
      setStatus("Optimisation des animations...");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(0.6);

      // Chargement des traductions
      setStatus("Chargement des traductions...");
      await new Promise((resolve) => setTimeout(resolve, 600));
      setProgress(0.8);

      // Finalisation
      setStatus("Finalisation...");
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProgress(1);
    } catch (error) {
      console.warn("Erreur lors du chargement des ressources:", error);
      // En cas d'erreur, utiliser la simulation
      simulateProgress();
    }
  };

  // Fonction pour terminer le chargement
  const finishLoading = () => {
    const minDisplayTime = Date.now() - startTimeRef.current;

    if (minDisplayTime >= defaultConfig.minDisplayTime) {
      // S'assurer que la progression est bien à 100%
      setProgress(1);

      // Attendre que l'animation de progression soit terminée avant de fermer
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowOverlay(false), 300); // Fade-out
      }, 500); // Délai plus long pour laisser l'animation se terminer
    } else {
      const remainingTime = defaultConfig.minDisplayTime - minDisplayTime;
      setTimeout(finishLoading, remainingTime);
    }
  };

  // Effet principal
  useEffect(() => {
    // Démarrer le chargement des ressources
    loadCriticalResources();

    // Timeout de sécurité
    timeoutRef.current = setTimeout(() => {
      if (progress < 0.95) {
        simulateProgress();
      }
      // S'assurer que la progression atteint 100% avant de fermer
      setTimeout(() => {
        setProgress(1);
        setTimeout(finishLoading, 500);
      }, 1000);
    }, defaultConfig.maxWaitTime);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Effet pour terminer quand progress === 1
  useEffect(() => {
    if (progress >= 1) {
      // Attendre un peu pour s'assurer que l'animation de progression est terminée
      setTimeout(() => {
        finishLoading();
      }, 300);
    }
  }, [progress]);

  return {
    progress,
    status,
    isLoading,
    showOverlay,
    finishLoading: () => {
      setProgress(1);
      finishLoading();
    },
  };
};

/**
 * Composant AppLoadingOverlay
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.config - Configuration du chargement
 * @param {string} props.brandName - Nom de la marque à afficher
 * @returns {JSX.Element} Overlay de chargement
 */
const AppLoadingOverlay = ({ config = {}, brandName = "Code by Hugo" }) => {
  const reducedMotion = useReducedMotion();
  const { progress, status, isLoading, showOverlay, finishLoading } =
    useLoadingProgress(config);
  const overlayRef = useRef(null);

  // Gestion du scroll
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }

    return () => {
      document.body.classList.remove("is-loading");
    };
  }, [showOverlay]);

  // Gestion du fade-out
  useEffect(() => {
    if (!isLoading && overlayRef.current) {
      overlayRef.current.style.pointerEvents = "none";
    }
  }, [isLoading]);

  // Gestion des touches clavier
  const handleKeyDown = (event) => {
    if (event.key === "Escape" && progress < 1) {
      finishLoading();
    }
  };

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={`app-loading-overlay ${!isLoading ? "fade-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
      aria-label="Chargement du site"
      data-testid="app-loading-overlay"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="app-loading-overlay__content">
        {/* Loader circulaire central */}
        <CircularLoader
          progress={progress}
          status={status}
          reducedMotion={reducedMotion}
          onFinish={finishLoading}
          className="app-loading-overlay__loader"
        />

        {/* Branding discret en bas */}
        <div className="app-loading-overlay__branding" aria-hidden="true">
          {brandName}
        </div>
      </div>

      {/* Bouton de secours (accessibilité) */}
      {progress < 1 && (
        <button
          className="app-loading-overlay__skip"
          onClick={finishLoading}
          aria-label="Passer le chargement"
          data-testid="skip-loading"
        >
          Passer
        </button>
      )}
    </div>
  );
};

export default AppLoadingOverlay;
