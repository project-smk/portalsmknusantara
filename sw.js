// Service worker minimal: hanya agar portal bisa dipasang. Tidak menyimpan cache, jadi aplikasi (ujian, presensi) selalu memuat versi terbaru.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
