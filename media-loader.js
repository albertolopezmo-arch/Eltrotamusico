(() => {
  const config = window.TROTAMUSICO_SUPABASE || {};
  if (!config.url || !config.anonKey || config.url.startsWith('PON_')) return;
  const base = `${config.url.replace(/\/$/, '')}/storage/v1/object/public/media`;
  document.querySelectorAll('[data-media-slot]').forEach((image) => {
    const fallback = image.src;
    const slot = image.dataset.mediaSlot;
    image.onerror = () => {
      image.onerror = null;
      image.src = fallback;
    };
    image.src = `${base}/media-${slot}.jpg`;
  });
})();
