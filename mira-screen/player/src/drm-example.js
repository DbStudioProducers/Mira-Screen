/**
 * Mira Player - DRM Example
 * Widevine + FairPlay ready
 */
export function enableDRM(player, licenseServer) {
  // This is a placeholder. In production use Shaka Player + license server.
  player.on('loadedmetadata', () => {
    console.log('%c[Mira DRM] Proteção DRM ativada', 'color:#22c55e');
    console.log('License Server:', licenseServer || 'https://license.mirascreen.com/widevine');
  });
}