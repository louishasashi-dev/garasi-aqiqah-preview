# Laporan Revisi 07 — Garasi Aqiqah & Catering

Tanggal: 19 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan Perubahan

- `#menu` disusun ulang: 3 card dalam satu baris 3 kolom desktop, di bawahnya 2 poster berdampingan; mobile 1 kolom.
- `#paket` kini berisi 6 card; `.package-extra` dihapus dan poster Pilihan Aqiqah Terbaik menjadi card ke-6.
- Ditambahkan lightbox vanilla untuk poster Pilihan Aqiqah Terbaik.
- CTA card baru memakai nomor WhatsApp `6287896102009`.
- Section lain, aset, dan perilaku promo tidak diubah.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Card Paket ke-6, penghapusan `.package-extra`, tombol pemicu lightbox, markup dialog lightbox. |
| `css/style.css` | Layout Menu vertikal 3 card + 2 poster, grid Paket 6 card, reset tombol poster, gaya lightbox, breakpoint 600/601–900/901–1100. |
| `js/main.js` | Logika lightbox vanilla: buka, tutup, fokus, Escape, Tab, dan kompatibilitas dengan promo. |
| `docs/PRD.md` | Struktur Menu/Paket, alasan layout, lightbox, responsive, QA, dan acceptance criteria revisi 07. |
| `docs/QA-REPORT.md` | Status QA, hasil otomatis, bug, dan daftar screenshot terbaru. |
| `docs/REVISION-REPORT-07.md` | Laporan ini. |
| `screenshots/14-menu-package-revision/` | 8 screenshot desktop, tablet, dan mobile. |

Tidak ada file di `assets/` yang diubah, ditimpa, atau dihapus.

## 3. Detail Perubahan per Section

### #menu — Olahan kambing pilihan

- Markup 3 `.menu-card` dan 2 figure poster dipertahankan.
- `.menu-layout` diubah dari grid dua kolom menjadi blok vertikal.
- `.menu-grid` memakai 3 kolom sama lebar pada desktop.
- `.menu-visual-stack` memakai 2 kolom dengan `justify-items: center`; tiap `.menu-visual` maksimal 420 px.
- Tablet 601–900 px: 3 card 1 kolom, 2 poster tetap berdampingan.
- Mobile ≤600 px: card dan poster 1 kolom, poster maksimal 460 px.
- Figcaption, alt, `width`/`height`, `loading="lazy"`, dan `object-fit: contain` tetap ada.
- Gaya `.menu-card` (border, radius, ikon, tipografi) dipertahankan; penyesuaian ringkas hanya pada 901–1100 px agar 3 kolom tidak overflow.

### #paket — Paket Aqiqah Garasi

- `<figure class="package-extra">` dan CSS `.package-extra` dihapus.
- Poster `paket_aqiqah_pilihan_terbaik.jpeg` dipindahkan ke card ke-6 dengan struktur class yang sama seperti card lain.
- Isi card baru:
  - tag: `Pilihan Terbaik`
  - judul: `Pilihan Aqiqah Terbaik`
  - tagline: `Ringkasan 3 paket favorit`
  - meta: `Heboh mulai Rp 1,7 jt · Hemat mulai Rp 1,8 jt · Spesial Kambing Jantan mulai Rp 2,4 jt, plus souvenir lengkap (sesuai poster)`
  - CTA: `Tanya Pilihan Terbaik` → `https://wa.me/6287896102009?text=Halo%20Garasi%20Aqiqah%2C%20saya%20ingin%20bertanya%20tentang%20Pilihan%20Aqiqah%20Terbaik.`
- Grid: 3×2 desktop, 2×3 tablet, 1 kolom mobile.
- `<p class="fine-print center-text">` tetap di bawah grid.
- Gambar card tetap `object-fit: contain`, rasio asli, dan `loading="lazy"`.

### Lightbox

- Gambar card ke-6 dibungkus `<button class="poster-zoom" type="button" data-lightbox-trigger>`.
- Dialog memakai `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, dan `aria-describedby`.
- Gambar besar memakai `max-height: 90vh` dan `object-fit: contain`.
- Tutup via tombol close 44×44 px, backdrop, atau Escape.
- Fokus pindah ke tombol close saat dibuka dan kembali ke pemicu saat ditutup.
- Escape pada lightbox tidak menutup promo; promo tetap merespons Escape berikutnya.
- Tab difokuskan ke tombol close agar tidak keluar dari dialog.
- `prefers-reduced-motion` sudah dihormati oleh aturan global CSS.

## 4. QA

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless.

| Pemeriksaan | Hasil |
| --- | --- |
| Viewport 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow |
| Gambar | 27/27 dimuat; 0 broken; 0 request gagal |
| Console / page error | 0 |
| Anchor internal | 0 rusak |
| Tautan `wa.me` | 20 valid: 16 CTA + 4 katalog |
| Menu | Desktop 3 card 1 baris + 2 poster 1 baris; tablet 3/2; mobile 1/2 |
| Paket | 6 card; 3×2 desktop, 2×3 tablet, 1 kolom mobile; `.package-extra` 0 |
| Card baru | Teks, atribut gambar, CTA, dan `object-fit: contain` sesuai |
| Lightbox | Mouse, touch, Enter, Space, Escape, backdrop, fokus, dan Tab lolos |
| Promo vs lightbox | Escape pertama menutup lightbox; Escape kedua menutup promo |
| Navbar mobile | Buka/tutup dan `aria-expanded` benar |

## 5. Screenshot

Folder: `screenshots/14-menu-package-revision/`

- `desktop-menu.png`, `desktop-package.png`, `desktop-package-lightbox.png`
- `tablet-menu.png`, `tablet-package.png`
- `mobile-menu.png`, `mobile-package.png`, `mobile-package-lightbox.png`

Semua file diverifikasi ada, ukuran > 0, dan berasal dari browser yang dijalankan. Total screenshot proyek: 72.

## 6. Catatan dan Limitasi

- Screenshot tidak dinilai secara visual oleh model; validasi memakai OCR Windows, geometri Playwright, dan ukuran file.
- Lightbox diuji dengan event mouse/touch/keyboard Playwright, bukan pembaca layar sungguhan.
- Semua teks dan harga pada card baru bersumber dari instruksi pemesan dan poster asli; tidak ada tabel harga tebakan baru.
- Perubahan belum dipublikasikan dan tidak di-push.

## 7. Status Akhir

Revisi 07 selesai secara implementasi, QA, screenshot, dan dokumentasi. Website tetap statis, tanpa library/CDN/framework baru, dan promo modal tetap berfungsi normal.

## 8. Risiko

- Card ke-6 memakai poster sangat tinggi; pada layar kecil teks di dalam poster tetap kecil, sehingga lightbox disediakan.
- Jika poster Pilihan Aqiqah Terbaik diganti di masa depan, atribut `width`/`height` dan alt card serta lightbox perlu disesuaikan.
