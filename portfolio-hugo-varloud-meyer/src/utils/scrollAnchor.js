/** Marge supplémentaire sous le header fixe (lisible sur mobile). */
const getScrollAnchorExtra = () => {
  const styles = getComputedStyle(document.documentElement);
  const extra = parseFloat(styles.getPropertyValue("--scroll-anchor-extra"));
  return Number.isFinite(extra) ? extra : 20;
};

/** Hauteur du header fixe (barre + padding du conteneur). */
export const getHeaderHeight = () => {
  const header = document.querySelector(".site-header");
  const bar = document.querySelector(".header-bar");
  if (header && bar) {
    const headerRect = header.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    return Math.ceil(barRect.bottom - headerRect.top);
  }
  const styles = getComputedStyle(document.documentElement);
  return parseFloat(styles.getPropertyValue("--header-height")) || 88;
};

/** Hauteur réelle du header + marge pour le scroll des ancres. */
export const getScrollAnchorOffset = () => getHeaderHeight() + getScrollAnchorExtra();

/** Scroll vers une section en tenant compte du header. */
export const scrollToSection = (sectionId, { smooth = true } = {}) => {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const offset = getScrollAnchorOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: smooth ? "smooth" : "auto",
  });
};

/** Met à jour --header-height selon la barre (pas le menu plein écran). */
export const syncHeaderHeight = () => {
  const height = getHeaderHeight();
  document.documentElement.style.setProperty("--header-height", `${height}px`);
};
