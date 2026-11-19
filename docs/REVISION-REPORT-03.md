# Laporan Revisi 03 — Cleanup Hero Section

Tanggal: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome lokal.

## Elemen yang dihapus

| Elemen | Lokasi sebelumnya | Tindakan |
| --- | --- | --- |
| Logo halal terpisah | `.hero-visual > .halal-badge` (desktop kiri-bawah poster, mobile baris atas) | Dihapus dari HTML dan CSS. File `assets/img/halal/logo_halal.jpg` tidak disentuh. |
| QR katalog tambahan | `.hero-visual > .hero-qr` (mobile, kanan-bawah poster) | Dihapus dari HTML dan CSS. File `assets/img/product_and_service/katalog_garasi_aqiqah_wabusiness.jpg` tidak disentuh. |

CSS hero disederhanakan: `.hero-visual` hanya flex/center, grid areas `halal`/`qr` dan aturan `.halal-badge`/`.hero-qr` dihapus. Ring dekoratif `::before` tetap ada dengan `pointer-events: none`.

## Elemen yang dipertahankan

- Poster utama `assets/img/product_and_service/garasi_poster.jpg` (922×1152, `object-fit: contain`, hash SHA-256 sama dengan salinan di `garasi_aqiqah_and_catering.zip`: `ec65296e...`).
- QR yang menyatu dengan poster (tidak diubah karena file poster tidak diubah).
- Seluruh teks hero, tombol "Pesan Aqiqah", tombol "Lihat Paket".
- Tautan teks "Lihat Katalog WhatsApp Business" → `https://wa.me/c/6287896102009`, `target="_blank"`, `rel="noopener noreferrer"; styling tidak diubah.
- Maskot di FAQ, lima alasan, 7 FAQ, area pengiriman, Maps, promo, navigasi, dan JavaScript.

Tidak ada perubahan pada `js/main.js` atau file aset mana pun.

## Hasil QA

- Viewport: 320, 360, 390, 768, 1024, 1440 px.
- Horizontal overflow: 0; console/page error: 0; request gagal: 0; broken image: 0; anchor rusak: 0.
- `.halal-badge`, `.hero-qr`, `logo_halal.jpg` di hero, dan `katalog_garasi_aqiqah_wabusiness.jpg` di hero: tidak ada.
- `.hero-visual` hanya memiliki 1 anak (poster); poster terpusat dan tinggi visual ≈ tinggi poster → tidak ada ruang kosong bekas elemen.
- Tautan katalog teks tetap terlihat, dapat diklik, dan URL tidak berubah.
- CTA WhatsApp utama dan 18 tautan `wa.me` valid (15 CTA + 3 katalog).
- FAQ 7/7 berfungsi; maskot tetap di FAQ; promo, nav mobile, dan Maps lazy embed lolos.
- OCR screenshot desktop menemukan "Lihat Katalog WhatsApp Business" dan tidak menemukan caption "Scan katalog WA".

## Screenshot

3 file aktual dari browser di `screenshots/08-hero-cleanup/`:

1. `hero-desktop.png` — 1440×900
2. `hero-mobile.png` — 390×844
3. `hero-mobile-poster-qr.png` — 390×844

## Skipped / Risk

- Diabaikan: redesign, perubahan teks, aset, dan JavaScript. Tidak diminta.
- Risiko: model tidak dapat melihat gambar atau memindai QR secara visual; kepastian QR di poster berasal dari hash file poster yang identik dengan arsip asli, bukan dekode QR.
