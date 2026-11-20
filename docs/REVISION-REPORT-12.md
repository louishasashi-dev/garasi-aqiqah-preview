# Laporan Revisi 12 — Section Menu Catering

Tanggal: 20 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan

Revisi ini menambahkan section `#menu-catering` tepat setelah `#menu` dengan tiga poster asli yang sudah ada di `assets/img/`: banner Catering & Nasi Box, Paket Ayam Bakar, dan Paket Snack Box. Ketiganya memakai Coverflow Carousel yang sama dengan `#paket` dan `#galeri`, dapat diperbesar melalui lightbox global, dan memiliki satu CTA WhatsApp kontekstual "Tanya Terkait Menu Catering". Kartu "Catering & Nasi Box Acara" di `#tentang` tidak lagi membuka detail Ayam Bakar, melainkan melakukan smooth scroll ke section baru. Tidak ada aset, navbar, paket, harga, atau library baru.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Menambah `#menu-catering` setelah `#menu`; mengubah kartu Catering dari `data-detail-target="#detail-ayam-bakar"` menjadi `data-scroll-target="#menu-catering"`. |
| `css/style.css` | Memperluas gaya fokus/hover kartu layanan ke `[data-scroll-target]` dan menambah `.catering-cta`. |
| `js/main.js` | Menambah info lightbox untuk gambar Menu Catering dan handler klik/keyboard pada kartu `[data-scroll-target]` dengan smooth scroll yang menghormati `prefers-reduced-motion`. |
| `docs/PRD.md` | Status revisi 12, asset usage, struktur 17 entri, functional/responsive/WhatsApp/testing/acceptance, dan koreksi jumlah trigger. |
| `docs/QA-REPORT.md` | Hasil QA revisi 12, regresi, bug skrip QA, daftar 8 screenshot, dan total 118 screenshot. |
| `docs/REVISION-REPORT-12.md` | Laporan ini. |
| `screenshots/19-menu-catering-section/` | 8 screenshot desktop, tablet, dan mobile dari website yang dijalankan. |

Tidak ada file di `assets/` yang disentuh. Tidak ada WordPress, PHP, backend, framework, CDN, font eksternal, atau library besar baru. Navbar tetap 8 tautan tanpa entri Menu Catering.

## 3. Aset yang Dipakai

| Kegunaan | File asli | Ukuran | Dasar pemilihan |
| --- | --- | --- | --- |
| Catering & Nasi Box | `assets/img/banner/banner_02.jpeg` | 2560×1283 | OCR eksplisit: "Catering & Nasi Box", "Catering Harian, Prasmanan, Nasi Box", pilihan menu, dan klaim halal yang memang ada di poster asli. |
| Ayam Bakar | `assets/img/product_and_service/garasi_paket_ayambakar.jpg` | 1080×1350 | OCR "Paket Ayam bakar"; Ayam Bakar juga disebut pada teks kartu Catering dan banner catering. |
| Snack Box | `assets/img/product_and_service/garasi_paket_snackbox.jpg` | 1131×1600 | OCR "PAKET SNACK BOX" dengan pilihan snack dan air mineral. |

`assets/img/product_and_service/menu_garasi.jpeg` sudah diperiksa tetapi tidak dipakai karena isinya poster "MENU GARASI" umum, bukan daftar catering khusus. `garasi_paket_hemat.jpg` juga tidak dipakai karena merupakan paket aqiqah, bukan catering. Tidak ada gambar baru yang dihasilkan atau diunggah.

## 4. Keputusan Implementasi

- Section baru memakai kelas `section section-cream`, sama seperti bagian lain, dan ditempatkan persis setelah `#menu` sebelum `#paket`.
- Carousel memakai 3 slide agar item aktif awal adalah indeks tengah `1`, sehingga posisi awal langsung terpusat tanpa scroll tambahan.
- Semua poster memakai `loading="lazy"`, `decoding="async"`, `width`/`height` sesuai asli, `object-fit: contain`, caption, dan alt deskriptif. Teks pada poster tidak dipotong atau ditebak ulang.
- Lightbox Menu Catering memakai kicker "Menu Catering", judul dari caption, dan CTA tetap "Tanya Terkait Menu Catering" dengan pesan otomatis "Halo Garasi Aqiqah, saya ingin bertanya tentang Menu Catering dan Nasi Box."
- Kartu Catering di `#tentang` sekarang menjadi pemicu smooth scroll. Tiga kartu layanan lain tetap membuka lightbox detail sebagaimana Revisi 10.
- Mekanisme Coverflow existing dipakai apa adanya: nav desktop, swipe mobile/tablet, keyboard Arrow, dan `prefers-reduced-motion`.

## 5. QA Ulang

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless, device scale factor 1 (zoom 100%).

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | Lolos: 0 overflow horizontal, 0 console error, 0 page error, 0 request gagal, 0 response ≥400, dan 0 anchor rusak |
| Urutan section & navbar | `#menu-catering` langsung setelah `#menu`; navbar tetap 8 tautan tanpa Menu Catering |
| Aset | 3/3 poster termuat, urutan sesuai, `object-fit: contain`, dan semua dibungkus tombol zoom |
| Coverflow | 3 item, indeks awal 1, offset pusat 0 px, lebar `offsetWidth` seragam per viewport, nav aktif, swipe mobile menggeser ke indeks 2 |
| Lightbox | 3/3 poster membuka file tepat dengan kicker "Menu Catering", judul caption, CTA/href sama dengan section, fokus kembali ke tombol, dan Escape menutup dialog |
| Kartu Catering | Klik menghasilkan `top = 0` untuk `#menu-catering` tanpa lightbox; uji keyboard terpisah: Enter `top = 0`, Space `top = 2` px; 3 kartu lain tetap membuka detail |
| WA & regresi | 22 tautan WA ke `6287896102009`; Paket/Galeri tetap indeks 2; price list tetap 4 poster; 7 FAQ; Maps lazy; promo/Escape lolos; trigger gambar konten naik dari 26 menjadi 29 |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos (hanya warning LF→CRLF) |

Tiga kegagalan pada menjalankan skrip QA pertama kali berasal dari skrip itu sendiri: lebar slide diukur dari bounding box yang terdistorsi transformasi `scale`, fokus dibaca sebelum Escape, dan jeda smooth scroll 900 ms terlalu singkat. Skrip diperbaiki memakai `offsetWidth`, membaca fokus setelah Escape, dan jeda 1800 ms. Uji ulang lolos di seluruh viewport. Bukan bug website. Proyek statis tidak memiliki script test atau build; `node --check` dan `git diff --check` dipakai sebagai pemeriksaan kode.

## 6. Screenshot

Folder: `screenshots/19-menu-catering-section/`

- `01-desktop-section.png`, `02-desktop-lightbox.png`, `03-desktop-card-to-section.png`
- `04-tablet-section.png`
- `05-mobile-section.png`, `06-mobile-lightbox.png`, `07-mobile-after-swipe.png`
- `08-mobile-promo.png`

Semua file diverifikasi ada, ukuran > 0, dan berasal dari browser sungguhan via Playwright + Chrome headless. Total screenshot proyek: 118. Model QA tidak memiliki input gambar, sehingga penilaian visual langsung tidak dilakukan; validasi bersifat programatis melalui Playwright dan Pillow.

## 7. Status Akhir

Revisi 12 selesai secara implementasi, QA, screenshot, dan dokumentasi. Perubahan belum di-commit, di-push, atau dipublikasikan.

## 8. Risiko & Batasan

- Screenshot tidak ditinjau secara visual oleh model; keterbacaan akhir poster catering di layar 390 px sebaiknya dicek langsung oleh pemilik bisnis.
- Safari iOS tidak diuji langsung; Chrome/Chromium lolos di seluruh viewport.
- Detail pilihan menu catering tidak dibuatkan teks atau tabel baru; informasi tetap mengikuti teks asli pada poster dan CTA WhatsApp.
- `index.html` dan `css/style.css` masih membawa perubahan formatting besar dari sesi sebelumnya; gunakan `git diff --ignore-all-space` saat meninjau diff fungsi.
