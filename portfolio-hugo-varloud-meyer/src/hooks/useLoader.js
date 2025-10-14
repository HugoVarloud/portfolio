/**
 * Hook personnalisé pour la gestion du loader
 * @fileoverview Hook useLoader avec détection des ressources critiques et métriques
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { defaultConfig } from "../components/Loader/config.js";

/**
 * Hook pour gérer le chargement des ressources critiques
 * @param {Object} config - Configuration personnalisée (optionnelle)
 * @returns {Object} État et méthodes du loader
 */
export const useLoader = (config = {}) => {
  // Fusion de la config par défaut avec la config personnalisée
  const finalConfig = { ...defaultConfig, ...config };

  // États du loader
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentSubmessage, setCurrentSubmessage] = useState("");
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [loadingState, setLoadingState] = useState("initializing");

  // Refs pour les timers et métriques
  const startTimeRef = useRef(Date.now());
  const progressUpdateRef = useRef(null);
  const timeoutRef = useRef(null);
  const metricsRef = useRef({
    fontsLoaded: false,
    imagesLoaded: false,
    animationsReady: false,
    translationsLoaded: false,
    totalLoadTime: 0,
    slowResources: [],
  });

  // Détection du type de connexion
  const detectConnectionType = useCallback(() => {
    if ("connection" in navigator) {
      const connection = navigator.connection;
      const isSlow =
        finalConfig.networkConfig.slowConnectionTypes.includes(
          connection.effectiveType
        ) || connection.rtt > finalConfig.networkConfig.slowLatencyThreshold;
      setIsSlowConnection(isSlow);
      return isSlow;
    }
    return false;
  }, [finalConfig.networkConfig]);

  // Chargement des polices Akira
  const loadFonts = useCallback(async () => {
    setCurrentSubmessage(finalConfig.loaderMessages.en.loadingFonts);
    setLoadingState("loading-fonts");

    try {
      // Attendre que les polices soient prêtes
      await document.fonts.ready;

      // Charger spécifiquement les polices Akira
      const fontPromises = finalConfig.criticalAssets.fonts.map((font) => {
        return document.fonts.load(`${font.weight} 16px "${font.family}"`);
      });

      await Promise.all(fontPromises);

      // Vérifier que les polices sont bien chargées
      const fontCheckPromises = finalConfig.criticalAssets.fonts.map((font) => {
        return document.fonts.check(`16px "${font.family}"`);
      });

      const fontResults = await Promise.all(fontCheckPromises);
      const allFontsLoaded = fontResults.every((result) => result);

      if (allFontsLoaded) {
        metricsRef.current.fontsLoaded = true;
        if (finalConfig.metricsConfig.verboseLogging) {
          console.info("✅ Fonts loaded successfully");
        }
      }

      return allFontsLoaded;
    } catch (error) {
      console.warn("⚠️ Font loading failed:", error);
      return false;
    }
  }, [finalConfig]);

  // Chargement des images critiques
  const loadImages = useCallback(async () => {
    setCurrentSubmessage(finalConfig.loaderMessages.en.loadingImages);
    setLoadingState("loading-images");

    try {
      const imagePromises = finalConfig.criticalAssets.images.map(
        (imageConfig) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () =>
              reject(new Error(`Failed to load ${imageConfig.src}`));
            img.src = imageConfig.src;

            // Utiliser decode() si disponible pour un chargement plus efficace
            if (img.decode) {
              img
                .decode()
                .then(() => resolve(true))
                .catch(() =>
                  reject(new Error(`Failed to decode ${imageConfig.src}`))
                );
            }
          });
        }
      );

      await Promise.all(imagePromises);
      metricsRef.current.imagesLoaded = true;

      if (finalConfig.metricsConfig.verboseLogging) {
        console.info("✅ Images loaded successfully");
      }

      return true;
    } catch (error) {
      console.warn("⚠️ Image loading failed:", error);
      return false;
    }
  }, [finalConfig]);

  // Attendre que les animations CSS soient prêtes
  const waitForAnimations = useCallback(async () => {
    setCurrentSubmessage(finalConfig.loaderMessages.en.loadingAnimations);
    setLoadingState("loading-animations");

    return new Promise((resolve) => {
      // Attendre un délai raisonnable pour que les animations se déclenchent
      setTimeout(() => {
        metricsRef.current.animationsReady = true;
        if (finalConfig.metricsConfig.verboseLogging) {
          console.info("✅ Animations ready");
        }
        resolve(true);
      }, 2000); // 2 secondes pour laisser le temps aux animations
    });
  }, [finalConfig]);

  // Chargement des traductions i18next
  const loadTranslations = useCallback(async () => {
    setCurrentSubmessage(finalConfig.loaderMessages.en.loadingTranslations);
    setLoadingState("loading-translations");

    try {
      // Attendre que i18next soit initialisé
      if (window.i18next && window.i18next.isInitialized) {
        metricsRef.current.translationsLoaded = true;
        if (finalConfig.metricsConfig.verboseLogging) {
          console.info("✅ Translations loaded");
        }
        return true;
      }

      // Attendre un délai raisonnable pour l'initialisation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Marquer comme chargé même si i18next n'est pas encore prêt
      metricsRef.current.translationsLoaded = true;
      if (finalConfig.metricsConfig.verboseLogging) {
        console.info("✅ Translations loaded (timeout)");
      }
      return true;
    } catch (error) {
      console.warn("⚠️ Translation loading failed:", error);
      // Marquer comme chargé même en cas d'erreur pour ne pas bloquer
      metricsRef.current.translationsLoaded = true;
      return true;
    }
  }, [finalConfig]);

  // Mise à jour de la progression
  const updateProgress = useCallback(() => {
    const metrics = metricsRef.current;
    const totalTasks = 4; // fonts, images, animations, translations
    let completedTasks = 0;

    if (metrics.fontsLoaded) completedTasks++;
    if (metrics.imagesLoaded) completedTasks++;
    if (metrics.animationsReady) completedTasks++;
    if (metrics.translationsLoaded) completedTasks++;

    const newProgress = Math.round((completedTasks / totalTasks) * 100);
    setProgress(newProgress);

    if (finalConfig.metricsConfig.verboseLogging) {
      console.info(
        `📊 Progress: ${newProgress}% (${completedTasks}/${totalTasks})`
      );
    }

    return completedTasks === totalTasks;
  }, [finalConfig]);

  // Progression simulée pour réseau lent
  const simulateProgress = useCallback(() => {
    if (!finalConfig.networkConfig.simulatedProgress.enabled) return;

    const increment = finalConfig.networkConfig.simulatedProgress.maxIncrement;
    const currentProgress = progress;

    if (currentProgress < 95) {
      const newProgress = Math.min(currentProgress + increment, 95);
      setProgress(newProgress);
    }
  }, [progress, finalConfig]);

  // Fonction principale de chargement
  const loadCriticalResources = useCallback(async () => {
    setCurrentMessage(finalConfig.loaderMessages.en.loading);

    try {
      // Charger les ressources de manière séquentielle pour une progression plus visible
      setCurrentSubmessage(finalConfig.loaderMessages.en.loadingFonts);
      await Promise.race([
        loadFonts(),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Timeout de 3s
      ]);
      updateProgress();

      setCurrentSubmessage(finalConfig.loaderMessages.en.loadingImages);
      await Promise.race([
        loadImages(),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Timeout de 3s
      ]);
      updateProgress();

      setCurrentSubmessage(finalConfig.loaderMessages.en.loadingAnimations);
      await Promise.race([
        waitForAnimations(),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Timeout de 3s
      ]);
      updateProgress();

      setCurrentSubmessage(finalConfig.loaderMessages.en.loadingTranslations);
      await Promise.race([
        loadTranslations(),
        new Promise((resolve) => setTimeout(resolve, 2000)), // Timeout de 2s
      ]);
      updateProgress();

      // Calculer le temps total
      metricsRef.current.totalLoadTime = Date.now() - startTimeRef.current;

      return true;
    } catch (error) {
      console.error("❌ Critical resource loading failed:", error);
      // En cas d'erreur, marquer toutes les ressources comme chargées
      metricsRef.current.fontsLoaded = true;
      metricsRef.current.imagesLoaded = true;
      metricsRef.current.animationsReady = true;
      metricsRef.current.translationsLoaded = true;
      updateProgress();
      return true;
    }
  }, [
    loadFonts,
    loadImages,
    waitForAnimations,
    loadTranslations,
    updateProgress,
    finalConfig,
  ]);

  // Fonction pour masquer le loader
  const hideLoader = useCallback(() => {
    const minDisplayTime = Date.now() - startTimeRef.current;

    if (minDisplayTime >= finalConfig.timingConfig.minDisplayMs) {
      setIsLoading(false);

      // Exposer les métriques
      if (finalConfig.metricsConfig.exposeMetrics) {
        window.__loaderMetrics = metricsRef.current;
        if (finalConfig.metricsConfig.verboseLogging) {
          console.table(metricsRef.current);
        }
      }

      if (finalConfig.metricsConfig.verboseLogging) {
        console.info("🎉 Loader hidden successfully");
      }
    } else {
      // Attendre le temps minimum
      const remainingTime =
        finalConfig.timingConfig.minDisplayMs - minDisplayTime;
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    }
  }, [finalConfig]);

  // Fonction pour continuer malgré le timeout
  const continueLoading = useCallback(() => {
    setIsLoading(false);
    setShowContinueButton(false);
  }, []);

  // Effet principal
  useEffect(() => {
    // Démarrer le chargement
    loadCriticalResources();

    // Mise à jour périodique de la progression
    progressUpdateRef.current = setInterval(
      updateProgress,
      finalConfig.timingConfig.progressUpdateInterval
    );

    // Timeout de sécurité
    timeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setShowContinueButton(true);
        setCurrentMessage(finalConfig.loaderMessages.en.fallbackMessage);
        setCurrentSubmessage(finalConfig.loaderMessages.en.slowConnection);

        if (finalConfig.metricsConfig.verboseLogging) {
          console.warn("⏰ Loader timeout reached, showing continue button");
        }
      }
    }, finalConfig.timingConfig.maxWaitMs);

    return () => {
      if (progressUpdateRef.current) {
        clearInterval(progressUpdateRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [loadCriticalResources, updateProgress, isLoading, finalConfig]);

  // Effet pour masquer le loader quand tout est prêt
  useEffect(() => {
    const allReady =
      metricsRef.current.fontsLoaded &&
      metricsRef.current.imagesLoaded &&
      metricsRef.current.animationsReady &&
      metricsRef.current.translationsLoaded;

    if (allReady && isLoading) {
      hideLoader();
    }
  }, [hideLoader, isLoading]);

  return {
    isLoading,
    progress,
    currentMessage,
    currentSubmessage,
    showContinueButton,
    isSlowConnection,
    loadingState,
    continueLoading,
    metrics: metricsRef.current,
  };
};
