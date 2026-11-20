# Laporan Revisi 11 — Price List & Gambar Paket Hemat

Tanggal: 20 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan

Revisi ini menambahkan tiga poster price list paket ke section `#harga` di samping price list kambing yang sudah ada, lalu mengganti gambar card Paket Hemat di `#paket` dengan aset `garasi_paket_hemat.jpg`. Semua gambar memakai file asli yang sudah ada di `assets/img/product_and_service/`; tidak ada aset yang diubah, diganti nama, atau ditambah dari luar.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | `#harga` disusun ulang menjadi satu grid berisi 4 poster asli dengan caption; `src`/alt card Paket Hemat diganti. |
| `css/style.css` | Gaya `.price-gallery`, `.price-poster`, caption, override layout `#harga`, dan breakpoint 1 kolom ≤640 px. |
| `docs/PRD.md` | Status revisi 11, asset usage, struktur `#harga`/`#paket`, functional/responsive/testing/acceptance; ukuran slide Revisi 10 yang tertinggal ikut dikoreksi. |
| `docs/QA-REPORT.md` | Hasil QA revisi 11, regresi, koreksi dokumen, daftar 9 screenshot, total 110 screenshot. |
| `docs/REVISION-REPORT-09.md`, `docs/REVISION-REPORT-10.md` | Penegasan bahwa jumlah screenshot bersifat historis per revisi. |
| `docs/REVISION-REPORT-11.md` | Laporan ini. |
| `screenshots/18-price-list-package-image/` | 9 screenshot desktop, tablet, dan mobile dari website yang dijalankan. |

`js/main.js` tidak diubah: mekanisme lightbox Revisi 09 otomatis membungkus gambar konten dalam `button.image-zoom`, sehingga keempat poster price list dan gambar Paket Hemat baru langsung dapat diperbesar tanpa kode baru. Tidak ada library/CDN/framework/backend/build step baru. Tidak ada file di `assets/` yang disentuh.

## 3. Aset yang Dipakai

| Kegunaan | File asli | Ekstensi terdeteksi | Ukuran |
| --- | --- | --- | --- |
| Price list kambing (existing) | `garasi_pricelist_spesialiskambing_gratismasak&potong.jpg` | `.jpg` | 1080×1350 |
| Paket Spesial | `garasi_best_seller_list.jpg` | `.jpg` | 1080×1350 |
| Paket Hemat | `garasi_paket_aqiqah_hemat.jpg` | `.jpg` | 1080×1350 |
| Paket Heboh | `garasi_paket_heboh_pricelist.jpg` | `.jpg` | 1080×1350 |
| Card Paket Hemat baru | `garasi_paket_hemat.jpg` | `.jpg` | 1080×1350 |

Aset lama `garasi_paket_aqiqah_hemat.jpg` tetap dipakai di price list (dan galeri), jadi tidak dihapus. Card Paket Hemat sekarang memakai `garasi_paket_hemat.jpg`.

## 4. Keputusan Implementasi

- Grid price list: 2 kolom mulai 641 px dan 1 kolom di ≤640 px, gap 20 px/16 px. Ini menjaga poster 4:5 cukup besar untuk dibaca tanpa memaksa 4 kolom kecil.
- Poster memakai `width="1080" height="1350"`, `loading="lazy"`, `decoding="async"`, `object-fit: contain`, dan caption. Tidak ada crop, stretch, atau tabel harga tebakan.
- Judul `#harga` diubah dari "Harga Kambing" menjadi "Daftar Harga" karena section kini memuat price list paket juga. Teks kambing, checklist, fine print, dan CTA WhatsApp lama tetap dipertahankan.
- Informasi Paket Hemat (tag, judul, tagline, meta, CTA, pesan WhatsApp, dan info lightbox) tidak diubah; hanya `src` dan alt gambar yang mengikuti aset baru.

## 5. QA Ulang

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless, device scale factor 1 (zoom 100%).

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 0 console error; 0 page error; 0 request gagal; 0 response ≥400; 0 anchor rusak |
| Price list | 4/4 poster termuat (`naturalWidth > 0`), urutan sesuai, rasio 0,800 (4:5), `object-fit: contain`, 4 caption, 4 pemicu lightbox |
| Grid | 2 kolom di 768–1440 px; 1 kolom di 320–640 px |
| Lightbox | 4/4 poster price list dan card Paket Hemat membuka file yang tepat, fokus kembali ke tombol, Escape menutup dialog; total pemicu naik dari 23 menjadi 26 (net +3) |
| Paket Hemat | `garasi_paket_hemat.jpg` tampil di card dan lightbox di semua viewport; CTA dan info lain tidak berubah |
| Regresi | Carousel tetap indeks 2/offset 0 di 10 viewport; 4 kartu layanan Revisi 10 tetap benar; 21 tautan WA, 7 FAQ, Maps lazy, promo/Escape lolos |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

Tidak ada bug fungsional baru pada website. Satu ketidaksesuaian dokumen ditemukan: PRD masih menyebut slide `82vw`/`~520 px` dari Revisi 09, padahal CSS Revisi 10 memakai `64vw`/`min(360px, 32vw)`; sudah dikoreksi. Proyek statis tidak memiliki script test atau build; `node --check` dan `git diff --check` dipakai sebagai pemeriksaan kode.

## 6. Screenshot

Folder: `screenshots/18-price-list-package-image/`

- `01-desktop-price-list.png`, `02-desktop-price-list-lightbox.png`
- `03-desktop-paket-hemat.png`, `04-desktop-paket-hemat-lightbox.png`
- `05-tablet-price-list.png`
- `06-mobile-price-list.png`, `07-mobile-price-list-lightbox.png`, `08-mobile-paket-hemat.png`
- `09-mobile-promo.png`

Semua file diverifikasi ada dan ukurannya > 0. Total screenshot proyek: 110. Model QA tidak memiliki input gambar, sehingga penilaian visual langsung tidak dilakukan; validasi bersifat programatis melalui Playwright dan Pillow.

## 7. Status Akhir

Revisi 11 selesai secara implementasi, QA, screenshot, dan dokumentasi. Perubahan belum di-commit, di-push, atau dipublikasikan.

## 8. Risiko & Batasan

- Screenshot tidak ditinjau secara visual oleh model; keterbacaan final tetap disarankan dicek langsung oleh pemilik bisnis, terutama teks kecil pada poster price list di layar 390 px.
- Safari iOS tidak diuji langsung; Chrome/Chromium lolos di seluruh viewport.
- `index.html` dan `css/style.css` masih membawa perubahan formatting besar dari sesi sebelumnya; gunakan `git diff --ignore-all-space` saat meninjau diff fungsi.
