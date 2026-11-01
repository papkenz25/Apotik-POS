<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kasir Apotek POS Modern</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">

    <header class="bg-emerald-600 text-white shadow-md py-4 px-6 flex justify-between items-center">
        <div class="flex items-center space-x-3">
            <div class="bg-white text-emerald-600 p-2 rounded-lg font-bold text-xl">
                <i class="fa-solid fa-pills"></i>
            </div>
            <div>
                <h1 class="text-xl font-bold tracking-wide">Klinik Utama BTIIG (Apotek POS)</h1>
                <p class="text-xs text-emerald-100">Sistem Kasir & Validasi Stok Real-Time</p>
            </div>
        </div>
        <div>
            <button onclick="bukaPengaturan()" class="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-2 rounded-lg text-sm transition flex items-center space-x-2">
                <i class="fa-solid fa-gear"></i>
                <span class="hidden sm:inline">Webhook n8n</span>
            </button>
        </div>
    </header>

    <main class="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <section class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex flex-col">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-3">
                <h2 class="text-lg font-bold text-slate-700"><i class="fa-solid fa-box-open mr-2 text-emerald-600"></i>Pilih Obat & Stok</h2>
                <div class="flex w-full sm:w-auto gap-2">
                    <div class="relative flex-1 sm:w-64">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="text" id="inputCari" oninput="filterObat()" placeholder="Cari nama obat..."
                               class="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm">
                    </div>
                    <button id="btnMuatUlang" onclick="muatStok()" title="Muat ulang stok"
                            class="px-3 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm hover:bg-slate-50 transition">
                        <i class="fa-solid fa-rotate"></i>
                    </button>
                </div>
            </div>
            <p id="statusStok" class="text-xs text-slate-400 mb-3"></p>

            <div id="daftarObat" class="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px] pr-1">
                <p class="text-slate-400 text-center col-span-2 py-8 text-sm">Memuat data dari database...</p>
            </div>
        </section>

        <section class="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between">
            <div>
                <h2 class="text-lg font-bold text-slate-700 mb-4"><i class="fa-solid fa-receipt mr-2 text-emerald-600"></i>Nota Transaksi</h2>
                <div id="itemKeranjang" class="divide-y divide-slate-100 max-h-[220px] overflow-y-auto mb-4 pr-1">
                    <p class="text-slate-400 text-center py-6 text-sm">Belum ada obat dipilih.</p>
                </div>
            </div>

            <div class="border-t border-slate-100 pt-4 space-y-3">
                <div class="flex justify-between text-sm">
                    <span class="text-slate-500">Total Harga:</span>
                    <span id="labelTotal" class="font-bold text-lg text-emerald-600">Rp 0</span>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-500 mb-1">Uang Tunai Pembeli (Rp)</label>
                    <input type="number" inputmode="numeric" id="inputBayar" oninput="hitungKembalian()" placeholder="0"
                           class="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                </div>

                <div class="flex justify-between text-sm bg-slate-50 p-2.5 rounded-xl">
                    <span class="text-slate-500 font-medium">Kembalian:</span>
                    <span id="labelKembalian" class="font-bold text-slate-700">Rp 0</span>
                </div>

                <button id="btnProses" onclick="prosesTransaksi()" disabled
                        class="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition shadow-sm text-sm flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>Proses Transaksi</span>
                </button>
            </div>
        </section>
    </main>

    <div id="modalPengaturan" class="fixed inset-0 bg-slate-900/50 hidden flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <h3 class="text-lg font-bold text-slate-700 mb-2"><i class="fa-solid fa-link mr-2 text-emerald-600"></i>URL Webhook n8n (POST/Kirim)</h3>
            <p class="text-xs text-slate-500 mb-4">Masukkan URL Webhook aktif untuk MENGIRIM data transaksi.</p>
            <input type="text" id="inputWebhookUrl" placeholder="https://..."
                   class="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <div class="flex justify-end space-x-2">
                <button onclick="tutupPengaturan()" class="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm hover:bg-slate-50 transition">Batal</button>
                <button onclick="simpanWebhook()" class="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm hover:bg-emerald-700 transition">Simpan</button>
            </div>
        </div>
    </div>

    <script>
        // ================= PENGATURAN =================
        const GET_STOK_URL = "https://papkenz.app.n8n.cloud/webhook/get-stok";
        const TIMEOUT_GET_MS = 15000;
        const TIMEOUT_POST_MS = 20000;
        const HARI_PERINGATAN_EXPIRED = 30; // peringatan jika sisa <= 30 hari
        const STOK_KRITIS = 10;

        // Alias nama kolom (huruf besar/kecil diabaikan)
        const ALIAS = {
            id: ["id_barang", "id", "kode", "kode_barang", "sku"],
            nama: ["nama_obat", "nama", "nama_barang", "nama_produk", "produk"],
            kategori: ["kategori", "category", "golongan"],
            harga: ["harga_jual", "harga", "price"],
            stok: ["stok_tersisa", "sisa_stok", "stok", "sisa", "qty"],
            expired: ["tgl_expired", "expired", "tgl_kadaluarsa", "kadaluarsa", "exp"]
        };

        // ================= STATE =================
        let katalogObat = [];
        let keranjang = [];
        let sedangMemproses = false;
        let webhookUrl = '';
        try { webhookUrl = localStorage.getItem('n8n_webhook_url') || ''; } catch (e) { /* abaikan */ }

        window.onload = function () {
            // Klik tombol di katalog & keranjang (aman, tanpa onclick inline)
            document.getElementById('daftarObat').addEventListener('click', function (e) {
                const tombol = e.target.closest('button[data-aksi]');
                if (tombol && !tombol.disabled) tambahKeKeranjang(tombol.dataset.id);
            });
            document.getElementById('itemKeranjang').addEventListener('click', function (e) {
                const tombol = e.target.closest('button[data-aksi]');
                if (!tombol) return;
                ubahJumlah(tombol.dataset.id, tombol.dataset.aksi === 'tambah' ? 1 : -1);
            });
            muatStok();
        };

        // ================= UTILITAS =================
        function aman(teks) {
            return String(teks).replace(/[&<>"']/g, function (c) {
                return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
            });
        }

        function rupiah(n) {
            return "Rp " + Number(n).toLocaleString('id-ID');
        }

        function normKey(k) {
            return String(k).toLowerCase().replace(/[\s\-]+/g, "_").trim();
        }

        function ambilNilai(baris, daftarAlias) {
            const peta = {};
            Object.keys(baris).forEach(function (k) { peta[normKey(k)] = baris[k]; });
            for (const a of daftarAlias) {
                if (peta[a] !== undefined && peta[a] !== null) return peta[a];
            }
            return undefined;
        }

        function keAngka(v) {
            if (typeof v === "number") return Number.isFinite(v) ? v : 0;
            const n = parseInt(String(v == null ? "" : v).replace(/[^\d-]/g, ""), 10);
            return Number.isNaN(n) ? 0 : n;
        }

        function keTanggal(v) {
            if (!v) return null;
            const teks = String(v).trim();
            let d = null;
            let m = teks.match(/^(\d{4})-(\d{2})-(\d{2})/);
            if (m) d = new Date(+m[1], +m[2] - 1, +m[3]);
            m = teks.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
            if (m) d = new Date(+m[3], +m[2] - 1, +m[1]);
            return d && !Number.isNaN(d.getTime()) ? d : null;
        }

        function hariSampai(tgl) {
            if (!tgl) return null;
            const hariIni = new Date();
            hariIni.setHours(0, 0, 0, 0);
            return Math.round((tgl - hariIni) / 86400000);
        }

        // Waktu lokal perangkat (WIB), format: 2026-11-02 01:30:00
        function waktuLokal() {
            const d = new Date();
            const p = function (n) { return String(n).padStart(2, '0'); };
            return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' +
                   p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds());
        }

        function setStatus(pesan, error) {
            const el = document.getElementById('statusStok');
            el.textContent = pesan;
            el.className = error ? 'text-xs text-red-500 mb-3' : 'text-xs text-slate-400 mb-3';
        }

        // ================= AMBIL & RAPIKAN DATA STOK =================
        function ratakanRespons(data) {
            if (Array.isArray(data)) {
                return data.flatMap(function (item) {
                    if (item && item.json && typeof item.json === "object") return [item.json];
                    return ratakanRespons(item);
                });
            }
            if (data && typeof data === "object") {
                for (const kunci of ["data", "items", "produk", "rows", "result"]) {
                    if (Array.isArray(data[kunci])) return ratakanRespons(data[kunci]);
                }
                return [data];
            }
            return [];
        }

        function rapikanProduk(baris, index) {
            const nama = ambilNilai(baris, ALIAS.nama);
            if (nama === undefined || String(nama).trim() === "") return null;
            const tgl = keTanggal(ambilNilai(baris, ALIAS.expired));
            const sisaHari = hariSampai(tgl);
            const id = ambilNilai(baris, ALIAS.id);
            return {
                id: String(id == null ? "row-" + index : id).trim(),
                nama: String(nama).trim(),
                kategori: String(ambilNilai(baris, ALIAS.kategori) || "").trim(),
                harga: keAngka(ambilNilai(baris, ALIAS.harga)),
                stok: keAngka(ambilNilai(baris, ALIAS.stok)),
                sisaHari: sisaHari,
                sudahExpired: sisaHari !== null && sisaHari < 0
            };
        }

        async function ambilStok() {
            const kontrol = new AbortController();
            const timer = setTimeout(function () { kontrol.abort(); }, TIMEOUT_GET_MS);
            try {
                const res = await fetch(GET_STOK_URL + "?t=" + Date.now(), { method: "GET", signal: kontrol.signal });
                if (!res.ok) throw new Error("Status " + res.status);
                const data = await res.json();
                return ratakanRespons(data).map(rapikanProduk).filter(Boolean);
            } finally {
                clearTimeout(timer);
            }
        }

        async function muatStok() {
            const btn = document.getElementById('btnMuatUlang');
            btn.disabled = true;
            setStatus("Memuat data stok...", false);
            try {
                katalogObat = await ambilStok();
                sinkronKeranjang();
                filterObat();
                renderKeranjang();
                setStatus(katalogObat.length + " obat dimuat • diperbarui " + new Date().toLocaleTimeString('id-ID'), false);
            } catch (error) {
                console.error("Gagal mengambil data:", error);
                setStatus("Gagal memuat stok. Periksa internet lalu ketuk tombol muat ulang.", true);
                if (katalogObat.length === 0) {
                    document.getElementById('daftarObat').innerHTML =
                        '<p class="text-red-500 text-center col-span-2 py-8 text-sm">Gagal terhubung ke database. Cek koneksi atau URL Webhook GET.</p>';
                }
            } finally {
                btn.disabled = false;
            }
        }

        // Samakan isi keranjang dengan stok & harga terbaru
        function sinkronKeranjang() {
            keranjang = keranjang.filter(function (item) {
                const terbaru = katalogObat.find(function (o) { return o.id === item.id; });
                if (!terbaru || terbaru.sudahExpired || terbaru.stok <= 0) return false;
                item.nama = terbaru.nama;
                item.harga = terbaru.harga;
                item.stok = terbaru.stok;
                if (item.jumlah > terbaru.stok) item.jumlah = terbaru.stok;
                return true;
            });
        }

        // ================= KATALOG =================
        function tampilkanKatalog(data) {
            const container = document.getElementById('daftarObat');

            if (data.length === 0) {
                container.innerHTML = '<p class="text-slate-400 text-center col-span-2 py-8 text-sm">Obat tidak ditemukan.</p>';
                return;
            }

            container.innerHTML = data.map(function (item) {
                const habis = item.stok <= 0;
                const nonaktif = habis || item.sudahExpired;

                let statusStok;
                if (habis) {
                    statusStok = '<span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">Stok Habis</span>';
                } else if (item.stok < STOK_KRITIS) {
                    statusStok = '<span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">Stok Kritis: ' + item.stok + '</span>';
                } else {
                    statusStok = '<span class="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">Stok: ' + item.stok + '</span>';
                }

                const badgeResep = item.kategori.toLowerCase() === 'resep'
                    ? '<span class="inline-block text-[10px] bg-purple-100 text-purple-700 rounded px-1.5 py-0.5 mb-1">Resep</span>'
                    : '';

                let infoExp = '';
                if (item.sudahExpired) {
                    infoExp = '<p class="text-xs font-semibold text-red-600 mb-2">KEDALUWARSA - tidak dapat dijual</p>';
                } else if (item.sisaHari !== null && item.sisaHari <= HARI_PERINGATAN_EXPIRED) {
                    infoExp = '<p class="text-xs font-semibold text-amber-600 mb-2">Exp ' + item.sisaHari + ' hari lagi</p>';
                }

                const kelasTombol = nonaktif
                    ? 'bg-slate-300 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-emerald-600';

                return '' +
                    '<div class="border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-emerald-200 transition p-4 rounded-xl flex flex-col justify-between ' + (nonaktif ? 'opacity-70' : '') + '">' +
                        '<div>' +
                            badgeResep +
                            '<div class="flex justify-between items-start mb-1 gap-2">' +
                                '<h3 class="font-bold text-slate-700 text-sm">' + aman(item.nama) + '</h3>' +
                                statusStok +
                            '</div>' +
                            '<p class="text-emerald-600 font-semibold text-sm mb-2">' + rupiah(item.harga) + '</p>' +
                            infoExp +
                        '</div>' +
                        '<button data-aksi="tambah" data-id="' + aman(item.id) + '" ' + (nonaktif ? 'disabled' : '') +
                            ' class="w-full ' + kelasTombol + ' text-white py-2 rounded-lg text-xs font-medium transition flex items-center justify-center space-x-1">' +
                            '<i class="fa-solid fa-cart-plus"></i><span>Pilih Obat</span>' +
                        '</button>' +
                    '</div>';
            }).join('');
        }

        function filterObat() {
            const kata = document.getElementById('inputCari').value.toLowerCase().trim();
            const hasil = kata
                ? katalogObat.filter(function (o) {
                    return o.nama.toLowerCase().includes(kata) ||
                           o.id.toLowerCase().includes(kata) ||
                           o.kategori.toLowerCase().includes(kata);
                  })
                : katalogObat;
            tampilkanKatalog(hasil);
        }

        // ================= KERANJANG =================
        function tambahKeKeranjang(id) {
            const obat = katalogObat.find(function (o) { return o.id === id; });
            if (!obat) return;

            if (obat.sudahExpired) {
                alert("Obat ini sudah kedaluwarsa dan tidak dapat dijual!");
                return;
            }
            if (obat.stok <= 0) {
                alert("Stok obat ini kosong!");
                return;
            }

            const itemDiKeranjang = keranjang.find(function (i) { return i.id === id; });
            if (itemDiKeranjang) {
                if (itemDiKeranjang.jumlah < obat.stok) {
                    itemDiKeranjang.jumlah++;
                } else {
                    alert("Jumlah melebihi sisa stok fisik!");
                }
            } else {
                keranjang.push({ id: obat.id, nama: obat.nama, harga: obat.harga, stok: obat.stok, jumlah: 1 });
            }
            renderKeranjang();
        }

        function ubahJumlah(id, delta) {
            const item = keranjang.find(function (i) { return i.id === id; });
            const obat = katalogObat.find(function (o) { return o.id === id; });

            if (item && obat) {
                item.jumlah += delta;
                if (item.jumlah > obat.stok) {
                    alert("Jumlah melebihi sisa stok fisik!");
                    item.jumlah = obat.stok;
                }
                if (item.jumlah <= 0) {
                    keranjang = keranjang.filter(function (i) { return i.id !== id; });
                }
            }
            renderKeranjang();
        }

        function hitungTotal() {
            return keranjang.reduce(function (sum, item) { return sum + (item.harga * item.jumlah); }, 0);
        }

        function renderKeranjang() {
            const container = document.getElementById('itemKeranjang');

            if (keranjang.length === 0) {
                container.innerHTML = '<p class="text-slate-400 text-center py-6 text-sm">Belum ada obat dipilih.</p>';
                document.getElementById('labelTotal').innerText = 'Rp 0';
                document.getElementById('btnProses').disabled = true;
                hitungKembalian();
                return;
            }

            container.innerHTML = keranjang.map(function (item) {
                return '' +
                    '<div class="py-3 flex justify-between items-center text-sm border-b border-slate-100">' +
                        '<div>' +
                            '<p class="font-bold text-slate-700">' + aman(item.nama) + '</p>' +
                            '<p class="text-xs text-slate-400">' + rupiah(item.harga) + ' x ' + item.jumlah + '</p>' +
                        '</div>' +
                        '<div class="flex items-center space-x-2">' +
                            '<button data-aksi="kurang" data-id="' + aman(item.id) + '" class="w-7 h-7 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-600 font-bold">-</button>' +
                            '<span class="text-sm font-bold w-5 text-center">' + item.jumlah + '</span>' +
                            '<button data-aksi="tambah" data-id="' + aman(item.id) + '" class="w-7 h-7 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-600 font-bold">+</button>' +
                        '</div>' +
                    '</div>';
            }).join('');

            document.getElementById('labelTotal').innerText = rupiah(hitungTotal());
            document.getElementById('btnProses').disabled = sedangMemproses;
            hitungKembalian();
        }

        function hitungKembalian() {
            const total = hitungTotal();
            const bayar = parseFloat(document.getElementById('inputBayar').value) || 0;
            const kembalian = bayar - total;
            const label = document.getElementById('labelKembalian');

            if (kembalian >= 0) {
                label.innerText = rupiah(kembalian);
                label.className = "font-bold text-emerald-600";
            } else {
                label.innerText = "Kurang " + rupiah(Math.abs(kembalian));
                label.className = "font-bold text-red-500";
            }
        }

        // ================= PENGATURAN WEBHOOK POST =================
        function bukaPengaturan() {
            document.getElementById('inputWebhookUrl').value = webhookUrl;
            document.getElementById('modalPengaturan').classList.remove('hidden');
        }

        function tutupPengaturan() {
            document.getElementById('modalPengaturan').classList.add('hidden');
        }

        function simpanWebhook() {
            const nilai = document.getElementById('inputWebhookUrl').value.trim();
            if (!nilai.startsWith('https://')) {
                alert("URL harus diawali https://");
                return;
            }
            webhookUrl = nilai;
            try { localStorage.setItem('n8n_webhook_url', webhookUrl); } catch (e) { /* abaikan */ }
            tutupPengaturan();
            alert("URL Webhook n8n berhasil disimpan!");
        }

        // ================= PROSES TRANSAKSI =================
        async function prosesTransaksi() {
            if (sedangMemproses) return;

            if (!webhookUrl) {
                alert("Harap masukkan URL Webhook POST terlebih dahulu di menu Pengaturan!");
                bukaPengaturan();
                return;
            }
            if (keranjang.length === 0) return;

            let bayar = parseFloat(document.getElementById('inputBayar').value) || 0;
            if (bayar < hitungTotal()) {
                alert("Uang tunai pembeli masih kurang!");
                return;
            }

            sedangMemproses = true;
            const btnProses = document.getElementById('btnProses');
            const teksAsliBtn = btnProses.innerHTML;
            btnProses.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Memproses...</span>';
            btnProses.disabled = true;

            try {
                // 1. Periksa ulang stok terbaru sebelum mengirim
                try {
                    katalogObat = await ambilStok();
                } catch (err) {
                    alert("Tidak bisa memeriksa stok terbaru. Periksa internet lalu coba lagi.");
                    return;
                }

                const masalah = [];
                keranjang.forEach(function (item) {
                    const terbaru = katalogObat.find(function (o) { return o.id === item.id; });
                    if (!terbaru) masalah.push(item.nama + ": tidak ditemukan di database");
                    else if (terbaru.sudahExpired) masalah.push(item.nama + ": sudah kedaluwarsa");
                    else if (item.jumlah > terbaru.stok) masalah.push(item.nama + ": sisa stok " + terbaru.stok);
                });

                if (masalah.length > 0) {
                    sinkronKeranjang();
                    filterObat();
                    renderKeranjang();
                    alert("Transaksi dibatalkan karena stok berubah:\n- " + masalah.join("\n- ") + "\n\nKeranjang sudah disesuaikan. Silakan periksa lalu proses ulang.");
                    return;
                }

                // 2. Samakan harga terbaru, lalu hitung ulang total
                sinkronKeranjang();
                const total = hitungTotal();
                bayar = parseFloat(document.getElementById('inputBayar').value) || 0;
                if (bayar < total) {
                    renderKeranjang();
                    alert("Total berubah menjadi " + rupiah(total) + ". Uang tunai pembeli masih kurang!");
                    return;
                }

                // 3. Kirim ke n8n (format data sama seperti sebelumnya)
                const dataTransaksi = {
                    tanggal: waktuLokal(),
                    items: keranjang.map(function (i) {
                        return { id: i.id, nama: i.nama, harga: i.harga, stok: i.stok, jumlah: i.jumlah };
                    }),
                    totalBelanja: total,
                    uangBayar: bayar,
                    uangKembalian: bayar - total
                };

                const kontrol = new AbortController();
                const timer = setTimeout(function () { kontrol.abort(); }, TIMEOUT_POST_MS);
                let response;
                try {
                    response = await fetch(webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(dataTransaksi),
                        signal: kontrol.signal
                    });
                } finally {
                    clearTimeout(timer);
                }

                if (response.ok) {
                    alert("Transaksi Berhasil Diproses!");
                    keranjang = [];
                    document.getElementById('inputBayar').value = '';
                    renderKeranjang();
                    muatStok(); // sinkron stok terbaru dari Google Sheets
                } else {
                    alert("Gagal mengirim data ke n8n (status " + response.status + "). Transaksi belum tercatat.");
                }
            } catch (error) {
                console.error(error);
                alert(error.name === 'AbortError'
                    ? "Koneksi ke n8n terlalu lama. Cek di Google Sheets apakah transaksi sudah tercatat sebelum mengulang."
                    : "Terjadi kesalahan jaringan saat menghubungi n8n.");
            } finally {
                sedangMemproses = false;
                btnProses.innerHTML = teksAsliBtn;
                btnProses.disabled = keranjang.length === 0;
            }
        }
    </script>
</body>
</html>
