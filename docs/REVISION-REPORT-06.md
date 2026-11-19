# Laporan Revisi 06 — Garasi Aqiqah & Catering

Tanggal: 19 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan Perubahan

- Menambahkan konten Tentang Kami lengkap sesuai teks revisi 06.
- Menambahkan tiga logo sertifikasi: Halal + QR, Juleha, dan BNSP.
- Menambahkan Banner 01 tepat setelah Hero dan Banner 02 tepat sebelum FAQ.
- Menambahkan gambar produk baru di Menu dan Paket.
- Mengembalikan QR katalog di hero sebagai container terpisah di bawah CTA.
- Mempertahankan seluruh section, CTA, FAQ, promo, Maps, navbar, favicon, poster, gambar lama, dan perilaku JavaScript.
- Tidak mengubah file di `assets/` dan tidak mengubah `js/main.js`.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Tentang Kami baru, tiga logo sertifikasi, dua banner, gambar menu/paket baru, QR hero terpisah. |
| `css/style.css` | Style Tentang Kami, logo sertifikasi, banner, QR hero, gambar produk, dan responsif mobile. |
| `docs/PRD.md` | Struktur, aset, kebutuhan responsif, QA, dan acceptance criteria revisi 06. |
| `docs/QA-REPORT.md` | Status QA, hasil otomatis, bug, screenshot, dan catatan konfirmasi terbaru. |
| `docs/REVISION-REPORT-06.md` | Laporan ini. |
| `screenshots/13-client-revisions/` | 14 screenshot baru desktop dan mobile. |

Tidak ada perubahan pada `js/main.js`, `assets/`, atau dependensi runtime.

## 3. Detail Perubahan per Section

### Hero

- QR katalog ditempatkan di `.hero-qr`, terpisah dari poster, di bawah CTA.
- QR memakai `assets/img/product_and_service/katalog_garasi_aqiqah_wabusiness.jpg` dan tautan `https://wa.me/c/6287896102009`.
- Tautan teks "Lihat Katalog WhatsApp Business" tetap ada.
- Copy hero, banner hadits, poster asli, dan CTA Revisi 05 tidak berubah.

### Banner

- `#banner-01` berada tepat setelah `#beranda`; memakai `banner_01.jpeg`.
- `#banner-02` berada tepat sebelum `#faq`; memakai `banner_02.jpeg`.
- Keduanya memakai container full width dan `object-fit: contain`, tanpa crop atau stretching.

### Tentang Kami

- Judul "Tentang Kami" dan nama usaha "Garasi Aqiqah & Catering".
- Subbagian A Tentang Kami, B Logo Sertifikasi, C Mengapa Memilih Garasi Aqiqah & Catering?, D Layanan & Pilihan Paket Kami.
- Tiga logo berada di container terpisah dengan `object-fit: contain`.
- Foto sertifikat halal lama tetap dipertahankan.
- Logo halal landscape lama tidak lagi dirender.
- Di mobile, copy tampil lebih dulu, lalu sertifikat dan tiga logo bertumpuk.

### Menu dan Paket

- Menu menampilkan poster olahan kambing lama dan `menu_garasi.jpeg`.
- Paket menampilkan lima poster lama dan `paket_aqiqah_pilihan_terbaik.jpeg`.
- Semua poster tetap memakai rasio asli.

### Section Lain

- Keunggulan, harga, mengapa memilih, galeri, FAQ, konsultasi, kontak, footer, dan promo modal tidak diubah strukturnya.
- FAQ tetap 7 pertanyaan, maskot tetap di FAQ, dan Maps tetap lazy-loaded.

## 4. Aset Baru yang Digunakan

| Aset | Dimensi | Section |
| --- | --- | --- |
| `assets/img/banner/banner_01.jpeg` | 1600×533 | Banner setelah Hero |
| `assets/img/banner/banner_02.jpeg` | 2560×1283 | Banner sebelum FAQ |
| `assets/img/logo/logoaboutme/logo_halal_and_QRCODE_halal.png` | 850×293 | Logo Sertifikasi |
| `assets/img/logo/logoaboutme/logo_juleha.png` | 420×594 | Logo Sertifikasi |
| `assets/img/logo/logoaboutme/logo_BNSP.png` | 500×500 | Logo Sertifikasi |
| `assets/img/product_and_service/menu_garasi.jpeg` | 1080×1350 | Menu |
| `assets/img/product_and_service/paket_aqiqah_pilihan_terbaik.jpeg` | 768×1376 | Paket |

Semua aset memakai path lokal dan tidak diubah, dipotong, atau dikompres ulang.

## 5. Hasil QA

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless.

| Pemeriksaan | Hasil |
| --- | --- |
| Viewport 320, 360, 390, 768, 1024, 1440 px | Tidak ada horizontal overflow |
| Gambar | 26/26 dimuat; 0 broken; 0 request gagal |
| Console error | 0 |
| Anchor internal | 0 rusak |
| Tautan `wa.me` | 19 valid: 15 CTA + 4 katalog |
| Section utama | 13, termasuk 2 banner |
| Tentang Kami | Semua teks, format, 3 logo, sertifikat, dan penghapusan logo lama lolos |
| Banner | Posisi dan rasio benar; tidak crop/stretch |
| Produk | Gambar baru tampil; gambar lama tetap ada |
| QR katalog | Decode zxing-cpp: `https://wa.me/c/6287896102009` |
| FAQ | 7/7 dapat dibuka dan ditutup |
| Navigasi mobile | Buka/tutup dan `aria-expanded` benar |
| Promo modal | Jeda, close, Escape, dan `sessionStorage` benar |
| Maps | Lazy load 301 → 200; koordinat dan short link benar |

## 6. Screenshot

Folder: `screenshots/13-client-revisions/`

- Desktop 1440×1000: `desktop-about.png`, `desktop-certification.png`, `desktop-banner-01.png`, `desktop-banner-02.png`, `desktop-products.png`, `desktop-hero-qr.png`.
- Desktop fullpage: `desktop-fullpage.png` 1440×15242.
- Mobile 390×844: `mobile-about.png`, `mobile-certification.png`, `mobile-banner-01.png`, `mobile-banner-02.png`, `mobile-products.png`, `mobile-hero-qr.png`.
- Mobile fullpage: `mobile-fullpage.png` 390×24744.

Semua file ada, ukuran > 0, dan dihasilkan dari browser yang benar-benar dijalankan. Total screenshot proyek: 64.

## 7. Catatan dan Limitasi

- QR diverifikasi dengan decode gambar asli dan screenshot, bukan pemindaian kamera fisik.
- Pemeriksaan screenshot dilakukan lewat OCR, ukuran file, dan geometri elemen; belum ada review visual manusia.
- Maps tetap bergantung pada koneksi internet dan lazy loading saat section kontak terlihat.
- Konten Tentang Kami mengikuti teks revisi 06; teks lama WordPress tidak dapat dipulihkan.
- Harga dan isi paket tetap tidak direproduksi sebagai tabel tebakan.

## 8. Status Akhir

Revisi 06 selesai secara implementasi, QA, screenshot, dan dokumentasi. Website belum dipublikasikan dan tidak ada perubahan yang di-push ke GitHub.
