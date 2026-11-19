# Laporan Revisi 02 — Pemindahan Maskot ke FAQ

Tanggal: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome lokal.

## Yang diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Menghapus `<img class="hero-mascot">` dari `.hero-visual`. Menambahkan `<img class="faq-mascot">` di dalam `.faq-intro`, setelah tombol "Tanya Langsung". |
| `css/style.css` | Menghapus aturan `.hero-mascot` (desktop & mobile). Grid hero mobile diubah dari `"mascot qr"` menjadi `". qr"` agar QR tetap di kanan-bawah. Menambahkan `.faq-mascot` dengan `width: min(100%, 220px)` di desktop dan `width: min(58%, 180px)` dan `margin-inline: auto` di ≤900 px. |
| `docs/PRD.md`, `docs/QA-REPORT.md` | Inventaris aset, struktur section, responsive, kriteria penerimaan, dan hasil QA disesuaikan. |

File aset `assets/img/maskot/orang&kambing.png` tidak diubah, diganti, atau diedit. `js/main.js` tidak disentuh. Tidak ada perubahan teks hero, lima alasan, FAQ, area pengiriman, CTA, Maps, promo, atau navigasi.

## Posisi maskot

- Desktop (`≥1024 px`): maskot berada di kolom kiri FAQ (`.faq-intro`), terukur `220×212 px` pada 1440 px; daftar FAQ di kolom kanan (`x=668`, maskot berhenti di `x=348`) → tidak ada overlap.
- Mobile/tablet (`≤900 px`): `.faq-grid` satu kolom; maskot tampil di atas daftar FAQ, terukur `180×174 px` pada 390 px dan `165×159 px` pada 320 px. Tidak menutupi `<summary>`/accordion.
- Rasio asli dipertahankan (1024×988 ≈ 1.036); `object-fit: contain`; tidak ada cropping.
- Hero tidak lagi memiliki elemen atau `<img>` maskot.

## Hasil QA

- Viewport diuji: 320, 360, 390, 768, 1024, 1440 px.
- Horizontal overflow: 0; console error/page error: 0; request gagal: 0; broken image: 0; anchor rusak: 0.
- Maskot: tidak ada di `#beranda`, ada di `#faq`, tidak overlap dengan `.faq-list` pada desktop maupun mobile.
- QR katalog: tetap tersembunyi di desktop, tampil di mobile pada posisi kanan-bawah (390 px: `x=271, y=630, 101×123`), `elementFromPoint` masih mengembalikan elemen di dalam `.hero-qr`.
- Hero tetap memiliki logo halal, poster asli, QR, seluruh teks, dan CTA WhatsApp.
- FAQ 7/7 dapat dibuka dan ditutup; 19 tautan WhatsApp valid (15 CTA + 4 katalog).
- Promo (`sessionStorage`), navigasi mobile, dan Google Maps lazy embed masih lolos.
- OCR Windows pada screenshot mendeteksi teks hero dan FAQ kunci.

## Screenshot

5 file aktual dari browser di `screenshots/07-mascot-faq-revision/`:

1. `hero-desktop.png` — 1440×900
2. `hero-mobile.png` — 390×844
3. `faq-desktop.png` — 1440×900
4. `faq-mobile.png` — 390×844
5. `faq-mascot-position.png` — 390×844

Folder `06-content-mobile-revision/` tetap dipertahankan sebagai bukti historis kondisi sebelum maskot dipindahkan.

## Skipped / Risk

- Diabaikan: redesign, perubahan teks, aset, dan JavaScript. Tidak diminta.
- Risiko: model tidak dapat melihat gambar langsung; validasi memakai OCR + geometri Playwright, bukan inspeksi visual manual.
