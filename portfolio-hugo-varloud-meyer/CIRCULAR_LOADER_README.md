# Loader Circulaire Moderne - Portfolio Hugo Varloud Meyer

## 🎯 Vue d'ensemble

Système de loader circulaire moderne et épuré, conçu selon les spécifications strictes avec une progression garantie à 0% et un design mobile-first lean.

## ✨ Fonctionnalités Principales

### 🚀 **Progression Garantie à 0%**

- ✅ **Départ strict à 0%** - Aucun flash à 50%
- ✅ **Progression monotone** croissante uniquement
- ✅ **Animation fluide** avec `requestAnimationFrame`
- ✅ **Easing léger** pour les transitions de seuils

### 🎨 **Design Lean & Mobile-First**

- ✅ **Thèmes automatiques** (clair/sombre via `prefers-color-scheme`)
- ✅ **Safe areas** iOS/Android (`env(safe-area-inset-*)`)
- ✅ **Responsive** avec `clamp()` pour les tailles
- ✅ **Contrastes AA** garantis

### ♿ **Accessibilité Complète**

- ✅ **ARIA** : `role="status"`, `aria-live="polite"`, `aria-busy="true"`
- ✅ **Navigation clavier** (Escape pour passer)
- ✅ **Touch targets** minimum 44px
- ✅ **Support `prefers-reduced-motion`**

### 🔧 **Implémentation Technique**

- ✅ **SVG** pour le cercle (track + progress)
- ✅ **Calcul précis** : `stroke-dashoffset = circumference * (1 - progress)`
- ✅ **Rotation -90deg** pour départ à 12h
- ✅ **Font-variant-numeric: tabular-nums** pour le pourcentage

## 🏗️ Architecture

```
src/components/Loader/
├── CircularLoader.jsx          # Composant jauge circulaire
├── CircularLoader.css          # Styles avec thèmes clair/sombre
├── AppLoadingOverlay.jsx       # Overlay plein écran avec gestion d'état
├── testCircularLoader.js       # Tests automatiques
└── ...
```

## 🎨 **Palette de Couleurs**

### Thème Clair

```css
--loader-bg-light: rgba(11, 12, 14, 0.06)
--loader-text-light: #0B0C0E
--loader-track-light: #E6E8EB
--loader-accent-light: #5B8CFF
```

### Thème Sombre

```css
--loader-bg-dark: #0B0C0E
--loader-text-dark: #F2F4F8
--loader-track-dark: #2A2D33
--loader-accent-dark: #7BA2FF
```

## 🚀 **Utilisation**

### Composant CircularLoader

```jsx
<CircularLoader
  progress={0.75} // 0-1, default: 0
  status="Chargement des médias..." // Message optionnel
  reducedMotion={false} // Désactiver animations
  onFinish={() => console.log("Terminé")}
/>
```

### Overlay Complet

```jsx
<AppLoadingOverlay
  brandName="Code by Hugo"
  config={{
    minDisplayTime: 600,
    maxWaitTime: 5000,
    simulationDuration: 2500,
  }}
/>
```

## 📊 **Progression Intelligente**

### Chargement Réel

1. **0-25%** : Chargement des polices (`document.fonts.ready`)
2. **25-50%** : Chargement de l'image hero (`montain.jpg`)
3. **50-75%** : Préparation des animations CSS
4. **75-100%** : Finalisation et optimisations

### Simulation Fallback

- Progression non-linéaire (easing cubic)
- Blocage à 95% jusqu'au "ready" réel
- Timeout de sécurité à 5 secondes

## 🧪 **Tests Automatiques**

### Tests Disponibles

```javascript
// Tests individuels
window.testCircularLoader.testProgressStartsAtZero();
window.testCircularLoader.testAccessibility();
window.testCircularLoader.testSVGCircle();
window.testCircularLoader.testThemes();
window.testCircularLoader.testScrollLock();
window.testCircularLoader.testMonotonicProgress();

// Test complet
window.testCircularLoader.runAllTests();
```

### Critères de Test

- ✅ **0% au premier paint** (T=0ms)
- ✅ **Progression monotone** croissante uniquement
- ✅ **Cercle part du haut** (12h, rotation -90deg)
- ✅ **ARIA correct** (role, aria-live, aria-busy)
- ✅ **Thèmes fonctionnels** (clair/sombre)
- ✅ **Scroll verrouillé** pendant le chargement

## 🎯 **Critères d'Acceptation**

### ✅ **Progression**

- À T0, le texte central affiche **0%** et le cercle est vide
- Aucune apparition à 50% à aucun moment
- Progression monotone croissante uniquement

### ✅ **Design**

- Texte toujours lisible (contrastes AA)
- Responsive mobile-first
- Safe areas iOS/Android respectées
- Thèmes clair/sombre automatiques

### ✅ **Performance**

- Aucun CLS mesurable (>0.01)
- Animations fluides avec `requestAnimationFrame`
- Fade-out propre à 100%
- Scroll rétabli après disparition

### ✅ **Accessibilité**

- Navigation clavier complète
- ARIA labels appropriés
- Support `prefers-reduced-motion`
- Touch targets minimum 44px

## 🔧 **Configuration**

### Timeouts

```javascript
const config = {
  minDisplayTime: 600, // Durée minimum d'affichage
  maxWaitTime: 5000, // Timeout maximum
  simulationDuration: 2500, // Durée simulation fallback
};
```

### Messages d'État

- **0-30%** : "Préparation de l'expérience..."
- **30-70%** : "Chargement des médias..."
- **70-100%** : "Optimisation..."

## 🚨 **Dépannage**

### Loader ne démarre pas à 0%

1. Vérifiez l'initialisation : `useState(0)`
2. Vérifiez les props : `progress = 0`
3. Vérifiez les styles CSS par défaut

### Progression non monotone

1. Vérifiez les animations avec `requestAnimationFrame`
2. Vérifiez les timeouts et promesses
3. Testez avec `testMonotonicProgress()`

### Thèmes ne fonctionnent pas

1. Vérifiez `prefers-color-scheme` support
2. Vérifiez les variables CSS dans `:root`
3. Testez avec `testThemes()`

## 📚 **Ressources**

- [SVG Circle Progress](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Safe Area Insets](https://developer.mozilla.org/en-US/docs/Web/CSS/env)

---

**Développé avec ❤️ pour le Portfolio Hugo Varloud Meyer - Loader Circulaire Moderne**
