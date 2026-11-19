# Laporan Revisi 08 — Garasi Aqiqah & Catering

Tanggal: 20 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan

Revisi ini hanya mengaudit dan mengeraskan lightbox poster Pilihan Aqiqah Terbaik dari Revisi 07. Tidak ada perubahan desain, layout, konten, aset, atau section lain. Dua masalah nyata ditemukan dan diperbaiki; delapan pemeriksaan lainnya sudah benar sehingga tidak diubah.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Atribut `loading` pada gambar di dalam lightbox diubah dari `lazy` menjadi `eager`. |
| `js/main.js` | Scroll background dikunci saat lightbox terbuka dan dikembalikan saat ditutup. |
| `docs/PRD.md` | Status revisi 08, pengecualian `eager`, Tab/Shift+Tab, scroll lock, dan kriteria penerimaan. |
| `docs/QA-REPORT.md` | Audit 10 poin, 2 bug dan perbaikannya, hasil QA ulang, serta daftar 8 screenshot baru. |
| `docs/REVISION-REPORT-08.md` | Laporan ini. |
| `screenshots/15-lightbox-hardening/` | 8 screenshot desktop, tablet, dan mobile dari website yang dijalankan. |

Tidak ada file di `assets/` yang diubah, ditimpa, atau dihapus.

## 3. Audit Awal

Audit dijalankan lebih dulu dengan Playwright + Chrome headless terhadap versi Revisi 07 sebelum kode disentuh.

| Pemeriksaan | Hasil awal | Tindakan |
| --- | --- | --- |
| Lightbox tetap init walaupun promo tidak muncul | Lolos | Tidak diubah |
| Prioritas overlay: lightbox 150 > promo 100 > header 60 | Lolos | Tidak diubah |
| ARIA dialog, label, dan deskripsi | Lolos | Tidak diubah |
| Tombol close 44×44 px | Lolos | Tidak diubah |
| Tab dan Shift+Tab tetap di tombol close | Lolos | Tidak diubah |
| Fokus kembali ke pemicu setelah ditutup | Lolos | Tidak diubah |
| Scroll background terkunci | Gagal: `scrollY` 8352 → 8952 | Diperbaiki |
| Gambar langsung tampil saat dibuka | Gagal pada audit kedua: `complete=false`, `naturalWidth=0` | Diperbaiki |
| `prefers-reduced-motion: reduce` dihormati | Lolos | Tidak diubah |
| Escape pertama menutup lightbox, Escape kedua menutup promo | Lolos | Tidak diubah |

## 4. Perbaikan

### `js/main.js`

- Menambahkan variabel `previousOverflow` di dalam blok lightbox.
- Saat lightbox dibuka, `overflow` inline `body` disimpan lalu diatur ke `hidden`.
- Saat lightbox ditutup lewat tombol, backdrop, atau Escape, `overflow` inline dikembalikan ke nilai awal.
- Logika penutupan dan fokus yang sudah benar tidak diubah.

### `index.html`

- Hanya gambar lightbox yang memakai `loading="eager"`.
- Gambar card dan gambar lain tetap `loading="lazy"`.
- `src`, `width`, `height`, `decoding="async"`, dan `alt` tidak diubah.

## 5. QA Ulang

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless.

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow |
| Gambar | 27/27 dimuat; 0 broken; 0 request gagal; 0 response ≥400 |
| Console / page error | 0 |
| Anchor internal | 0 rusak |
| Tautan `wa.me` | 20 valid: 16 CTA + 4 katalog |
| Lightbox | Mouse, touch, Enter, Space, Escape, backdrop, fokus, Tab, dan Shift+Tab lolos |
| Scroll lock | `body.style.overflow = hidden` saat terbuka, `scrollY` tidak berubah, pulih saat ditutup |
| Gambar lightbox | `complete = true`, `naturalWidth = 768`, `loading = eager` saat dibuka |
| Promo | Muncul setelah jeda, tombol/Escape menutup, sessionStorage bertahan setelah reload, muat di layar 390 px |
| Promo vs lightbox | Escape pertama menutup lightbox; Escape kedua menutup promo |
| Navbar mobile | Buka/tutup dan `aria-expanded` benar |
| FAQ | Accordion pertama dapat dibuka |
| Google Maps | 0 request sebelum `#kontak` terlihat; 13 request setelah terlihat |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |
| Test/build lain | Tidak ada `package.json`, Makefile, atau skrip build/test lain di root proyek |

## 6. Screenshot

Folder: `screenshots/15-lightbox-hardening/`

- `01-desktop-top.png`, `02-desktop-package.png`, `03-desktop-lightbox.png`
- `04-tablet-package.png`
- `05-mobile-top.png`, `06-mobile-package.png`, `07-mobile-lightbox.png`, `08-mobile-promo.png`

Semua file diverifikasi ada dan ukurannya > 0. Total screenshot proyek: 80.

## 7. Status Akhir

Revisi 08 selesai secara implementasi, QA, screenshot, dan dokumentasi. Website tetap statis, tanpa library/CDN/framework baru, dan promo modal tetap berfungsi normal. Perubahan belum di-commit, di-push, atau dipublikasikan.

## 8. Risiko

- `overflow: hidden` pada `body` mengunci scroll di Chrome/Chromium yang diuji; Safari iOS lama mungkin memerlukan pendekatan `position: fixed` jika ternyata masih memungkinkan scroll sentuh.
- Gambar lightbox sekarang dimuat sejak awal halaman. Karena URL-nya sama dengan poster di card, biayanya tetap satu aset lokal dan tidak menambah permintaan eksternal.
- `garasi_aqiqah_and_catering.zip` tidak tersedia di workspace saat ini dan sengaja tidak dikembalikan dalam revisi ini.
