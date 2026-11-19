# Laporan Revisi 01 — Konten & Mobile

Tanggal: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome lokal.

## Yang diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Hero: eyebrow "Welcome To", `<h1>` "Garasi Aqiqah", tagline, 2 paragraf deskripsi baru, catatan identitas lama (sudah diganti pada Revisi 05), CTA lama dipertahankan. Visual hero: badge halal, poster asli, maskot `assets/img/maskot/orang&kambing.png`, QR katalog asli sebagai tautan `https://wa.me/c/6287896102009`. |
| `index.html` | `#mengapa`: 5 card diganti persis dengan teks pemesan (Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi). Ejaan asli seperti "menberikan", "berkotmitmen", "di kirim", "makanan basi" sengaja dipertahankan. |
| `index.html` | `#faq`: 2 pertanyaan baru ditambahkan; 5 pertanyaan lama tidak diubah. |
| `index.html` | `#kontak`: kartu "Area Pengiriman" dengan teks "Area pengiriman hanya melayani wilayah Tangerang dan Jakarta." |
| `css/style.css` | Tipografi hero baru; layout mobile `halal → poster → (maskot, QR)` memakai grid areas; QR tersembunyi di desktop; maskot responsif; `object-fit: contain` pada poster; `pointer-events: none` pada ring dekoratif agar QR tetap bisa diklik. |
| `docs/PRD.md`, `docs/QA-REPORT.md` | Disesuaikan dengan konten dan hasil QA revisi. |

Tidak ada file di `assets/` yang diubah, ditimpa, atau dihapus. Tidak ada dependency, framework, CDN, backend, atau font eksternal baru. `js/main.js` tidak diubah.

## Hasil QA revisi

- Overflow: tidak ada di 320, 360, 390, 768, 1024, 1440 px.
- Console error, page error, request gagal, broken image, anchor rusak: 0.
- Semua 19 tautan `wa.me` valid: 15 CTA nomor utama + 4 tautan katalog `/c/`.
- Hero, 5 alasan, 2 FAQ baru, dan area pengiriman cocok persis dengan teks yang diberikan.
- 7/7 FAQ dapat dibuka dan ditutup.
- Navigasi mobile, promo (`sessionStorage`, close, reload), dan Maps lazy embed lolos.
- QR mobile terlihat dan dapat diklik; `elementFromPoint` mengembalikan elemen di dalam `.hero-qr`.
- Maskot memakai rasio asli 1024×988; poster memakai `object-fit: contain`.
- OCR Windows pada screenshot mendeteksi teks kunci revisi di desktop dan mobile.

## Screenshot

13 file nyata dari browser di `screenshots/06-content-mobile-revision/`. Daftar lengkap dan ukuran ada di `docs/QA-REPORT.md`.

## Skipped / Risk

- Diabaikan: perubahan struktur section, harga, testimoni, klaim baru, dan file aset. Tidak diminta.
- Risiko: model tidak dapat melihat gambar langsung; validasi visual dibatasi pada OCR programatis + geometri Playwright. QR asli juga tetap tertanam di dalam poster yang tidak diubah.
