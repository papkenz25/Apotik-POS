// Papkenz Kasir - service worker.
// Tujuan: aplikasi terbuka lebih cepat dan bisa dipasang. Data penjualan/stok TIDAK pernah disimpan di sini.
// Naikkan angka VERSI setiap kali Anda mengganti file ini atau daftar INTI.
const VERSI = 'pk-v2';
const INTI = ['./', './index.html', './manifest.webmanifest', './icon-192.png'];
const CDN = ['cdn.tailwindcss.com', 'cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSI).then(function (c) {
    return Promise.all(INTI.map(function (u) { return c.add(u).catch(function () { /* abaikan satu berkas gagal */ }); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (nama) {
    return Promise.all(nama.filter(function (n) { return n !== VERSI; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return; // semua panggilan ke server (POST) lewat jaringan biasa
  const url = new URL(req.url);
  if (url.hostname.indexOf('google.com') !== -1 || url.hostname.indexOf('googleusercontent.com') !== -1) return;

  // Halaman utama: selalu coba versi terbaru dulu; bila tidak ada internet, pakai salinan terakhir
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (res) {
      const salinan = res.clone();
      caches.open(VERSI).then(function (c) { c.put('./index.html', salinan); });
      return res;
    }).catch(function () {
      return caches.match('./index.html').then(function (r) { return r || caches.match('./'); });
    }));
    return;
  }

  // Berkas statis milik sendiri dan pustaka CDN: tampilkan salinan dulu, perbarui di belakang layar
  if (url.origin === self.location.origin || CDN.indexOf(url.hostname) !== -1) {
    e.respondWith(caches.open(VERSI).then(function (c) {
      return c.match(req).then(function (ada) {
        const ambil = fetch(req).then(function (res) {
          if (res && (res.status === 200 || res.type === 'opaque')) c.put(req, res.clone());
          return res;
        }).catch(function () { return ada; });
        return ada || ambil;
      });
    }));
  }
});
