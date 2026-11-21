# PRD — Garasi Aqiqah & Catering Landing Page

Status: disetujui untuk implementasi (Tahap 1 selesai; revisi 06 Tentang Kami, banner, produk, dan QR katalog selesai; revisi 07 layout Menu, card Paket ke-6, dan lightbox selesai; revisi 08 hardening lightbox selesai; revisi 09 lightbox global dan carousel Coverflow selesai; revisi 10 carousel terpusat dan card layanan terhubung ke detail selesai; revisi 11 price list dan gambar Paket Hemat selesai; revisi 12 section Menu Catering selesai; revisi 12.1 koreksi 6 gambar Menu Catering dan sosial media footer selesai; revisi 13 hero/Paket/sosial Kontak selesai; revisi 14 galeri dokumentasi selesai; revisi 15 dua kategori galeri selesai; revisi 16 kategori video YouTube selesai 21 November 2026)
Tanggal audit: 20 November 2026
Penulis: Frontend / UI-UX / QA

## Catatan audit awal (batasan sumber)

- Workspace hanya berisi `assets/` dan `garasi_aqiqah_and_catering.zip`. **Folder `references/` dan screenshot WordPress tidak tersedia**, sehingga teks lama tidak dapat dibaca dari screenshot. Seluruh teks yang digunakan berasal dari (a) identitas bisnis yang diberikan pemesan dan (b) hasil OCR pada poster/sertifikat di folder `assets`.
- Aset gambar tidak dapat dibaca secara visual oleh model yang digunakan. Identifikasi isi dilakukan dengan OCR Windows (Windows.Media.Ocr) + analisis dimensi dan warna dominan menggunakan Pillow. Hal yang tidak terbaca ditandai `[KONFIRMASI]`.
- Tidak ada asli yang diubah atau dihapus. Semua gambar tetap disimpan di path lokal `assets/img/...`.

## 1. Project Overview

Landing page statis satu halaman (single-page) untuk Garasi Aqiqah & Catering, bisnis aqiqah dan catering di Nerogtog, Pinang, Tangerang. Tujuan utama halaman adalah membangun kepercayaan (halal, pengalaman, identitas visual) dan mengarahkan pengunjung ke WhatsApp untuk konsultasi dan pemesanan. Tidak ada backend, CMS, database, atau server-side rendering.

## 2. Business Objectives

1. Menampilkan identitas dan kredibilitas Garasi Aqiqah secara modern tanpa meninggalkan ciri lama (warna emas/hitam, slogan "Berkah, Hemat, Amanah, Bahagia", tagline "Jadikan Moment Anda Lebih Berharga").
2. Mempermudah konversi: setiap CTA mengarah ke nomor WhatsApp utama `6287896102009` dengan pesan otomatis sesuai konteks.
3. Menyajikan informasi paket dan harga secara akurat dari poster asli, tanpa menebak angka yang tidak terbaca.
4. Memberikan akses cepat ke lokasi, kontak, media sosial, dan katalog WhatsApp Business.
5. Dapat dijalankan sebagai static hosting tanpa biaya dependency besar.

## 3. Target Audience

- Orang tua Muslim yang baru memiliki bayi dan ingin melaksanakan aqiqah.
- Keluarga di Tangerang dan sekitarnya yang mencari catering aqiqah halal.
- Pengunjung WhatsApp / Instagram / Facebook yang ingin melihat paket sebelum memesan.
- Pengguna mobile dengan koneksi menengah (prioritas ringan dan cepat).

## 4. Technology Stack

| Lapisan | Pilihan | Alasan |
| --- | --- | --- |
| Markup | HTML5 semantic | Sesuai syarat, tanpa framework |
| Styling | CSS3 (custom properties, flexbox, grid, media queries) | Tanpa dependency |
| Interaksi | Vanilla JavaScript (ES6+) | Nav mobile, promo modal, tahun footer, lightbox global, dan carousel Coverflow |
| Ikon | Inline SVG | Tanpa font/icon library, tajam di semua ukuran |
| Font | System font stack | Tidak bergantung pada CDN / internet saat runtime |
| Peta | Google Maps iframe embed | Berdasarkan koordinat `-6.2025117,106.6895407` dari `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8`; alamat/Plus Code tetap tampil sebagai teks |
| Testing | Playwright (Python) + Chrome lokal yang sudah terpasang | Tidak perlu mengunduh browser |
| Server | `python -m http.server` | Static hosting lokal |

Dilarang: WordPress, PHP, database, backend, gambar stok internet,Library JS/CSS eksternal.

## 5. Asset Inventory

Semua path relatif terhadap root proyek. Ukuran yang terdeteksi (lebar × tinggi px).

| # | Path | Ukuran | Fungsi terdeteksi / teks OCR relevan | Section |
| --- | --- | --- | --- | --- |
| 1 | `assets/img/logo/transparantlogo/garasi_aqiqah_catering_logo_icon-transparant.png` | 500×500 | Logo ikon transparan (alpha bbox 404×413, hampir kotak). Teks tidak terbaca OCR → mark. File lama tidak dipakai lagi. | Favicon, Footer |
| 2 | `assets/img/logo/transparantlogo/garasi_aqiqah_and_catering_logo_landscape-transparant.png` | 500×500 | Logo landscape transparan (alpha bbox 368×137, OCR "Aqiqah & Catering"). Dipakai apa adanya, tidak dipotong/didistorsi. | Header desktop & mobile |
| 2a | `assets/img/logo/garasi_aqiqah_and_catering_logo_landscape.jpg` | 1080×1080 | Versi lama berlatar; tetap dipertahankan untuk gambar Open Graph. | OG image |
| 3 | `assets/img/halal/logo_halal.jpg` | 1004×1477 | Logo halal: "HALAL INDONESIA ID36110081133790926". Aset dipertahankan; badge terpisah di hero sudah dihapus. Informasi halal tetap ada di Tentang, FAQ, dan poster. | Tidak dirender terpisah |
| 4 | `assets/img/halal/logo_halal_landscape.jpg` | 1477×709 | Versi landscape logo halal lama. Aset tetap disimpan, tetapi tidak lagi dirender di Tentang; diganti logo baru `logo_halal_and_QRCODE_halal.png`. | Tidak dirender |
| 5 | `assets/img/halal/sertifikat halal.jpg` | 1000×1362 | Sertifikat Halal: "ID36110081133790926", "GARASI AQIQAH & CATERING", alamat lama di Kancil, tanggal 26–27 September 2026. | Tentang |
| 6 | `assets/img/product_and_service/garasi_poster.jpg` | 922×1152 | Poster utama: "JADIKAN MOMENT ANDA LEBIH BERHARGA", "Berkah, Hemat, Amanah, Bahagia", hadits HR Abu Dawud 2838 / At-Tirmidzi 1552, WA 0878-9610-2009 & 0811-1030-5999. | Hero |
| 7 | `assets/img/product_and_service/garasi_kambing_grati_masak.jpg` | 1279×1600 | "Spesialis kambing gratis masak": gulai/sop/tongseng, sate/teriyaki/semur/rendang. | Menu |
| 8 | `assets/img/product_and_service/garasi_pricelist_spesialiskambing_gratismasak&potong.jpg` | 1080×1350 | Pricelist kambing: type betina/jantan, 200–700 tusuk, 50–150 porsi, "GRATIS!! biaya potong & masak", "FREE SOUVENIR Sertifikat + Bingkai, Mug Dengan Foto Ananda". | Daftar Harga |
| 9 | `assets/img/product_and_service/garasi_best_seller_list.jpg` | 1080×1350 | Best seller + pricelist paket spesial kambing jantan, isi box. | Daftar Harga (Paket Spesial) |
| 10 | `assets/img/product_and_service/garasi_paket_aqiqah_hemat.jpg` | 1080×1350 | Poster "PAKET AQIQAH Hemat — Murahnya Dapat Semua", isi box, gratis ongkir. | Daftar Harga (Paket Hemat) |
| 11 | `assets/img/product_and_service/garasi_paket_hemat.jpg` | 1080×1350 | Visual paket hemat: sate kambing, acar, perlengkapan makan, air mineral. | Paket Hemat (card dan lightbox) |
| 12 | `assets/img/product_and_service/garasi_paket_aqiqah_special.jpg` | 1080×1350 | Poster paket spesial: kerupuk ikan, sate kambing, acar, pisang, fruit tea, telur rebus, perlengkapan makan, nasi putih. | Paket Spesial |
| 13 | `assets/img/product_and_service/garasi_paket_aqiqah_heboh.jpg` | 1080×1350 | Poster paket heboh: slogan Berkah/Hemat/Amanah/Bahagia, sate kambing, acar, pisang. | Paket Heboh |
| 14 | `assets/img/product_and_service/garasi_paket_heboh_pricelist.jpg` | 1080×1350 | Pricetlist paket heboh: "Jaminan Paling Ekonomis", isi box, jantan +200rb free boneka domba. | Daftar Harga (Paket Heboh) |
| 15 | `assets/img/product_and_service/garasi_paket_ayambakar.jpg` | 1080×1350 | "Paket Ayam bakar": ayam bakar, nasi putih, sambal, acar, kerupuk, pisang, air mineral. | Paket Ayam Bakar |
| 16 | `assets/img/product_and_service/garasi_paket_snackbox.jpg` | 1131×1600 | "Paket Snack Box", "Mulai 13Rb", isi 3 snack + air mineral + tisu, beberapa pilihan menu. | Paket Snack Box |
| 17 | `assets/img/product_and_service/garasi_hadiah_souvenir.jpg` | 1130×1600 | Dokumentasi sertifikat aqiqah + hadiah souvenir bertuliskan "Hadiah ini indah, tapi Ibadah kamu jauh lebih berharga." | Kenapa |
| 18 | `assets/img/product_and_service/katalog_garasi_aqiqah_wabusiness.jpg` | 300×300 | QR katalog WhatsApp Business; decode zxing-cpp: `https://wa.me/c/6287896102009`. | Hero — container QR terpisah di bawah CTA |
| 19 | `assets/img/maskot/orang&kambing.png` | 1024×988 | Maskot orang + kambing (PNG, alpha). | FAQ (desktop & mobile) |
| 20 | `assets/img/banner/banner_01.jpeg` | 1600×533 | Banner aqiqah & catering berisi teks promosi pada gambar; dirender utuh tanpa crop. | Section banner setelah Hero |
| 21 | `assets/img/banner/banner_02.jpeg` | 2560×1283 | Banner catering & nasi box berisi teks promosi pada gambar; dirender utuh tanpa crop. | Section banner sebelum FAQ |
| 22 | `assets/img/logo/logoaboutme/logo_halal_and_QRCODE_halal.png` | 850×293 | Logo Halal Indonesia + QR sertifikasi; pengganti logo halal landscape lama. | Tentang — Logo Sertifikasi |
| 23 | `assets/img/logo/logoaboutme/logo_juleha.png` | 420×594 | Logo Juleha Indonesia. | Tentang — Logo Sertifikasi |
| 24 | `assets/img/logo/logoaboutme/logo_BNSP.png` | 500×500 | Logo BNSP. | Tentang — Logo Sertifikasi |
| 25 | `assets/img/product_and_service/menu_garasi.jpeg` | 1080×1350 | Poster menu Garasi Aqiqah. | Menu |
| 26 | `assets/img/product_and_service/paket_aqiqah_pilihan_terbaik.jpeg` | 768×1376 | Poster pilihan paket aqiqah terbaik; card ke-6 dan lightbox. | Paket |
| 27 | `assets/img/menu_catering/sampul_atau_awal.jpeg` | 1080×1350 | Sampul Menu Catering: "MENU GARASI", slogan Berkah/Hemat/Amanah/Bahagia, akun `@garasiaqiqah`. | Menu Catering (slide 1/awal) |
| 28 | `assets/img/menu_catering/1.jpeg` | 1080×1350 | Daftar menu bagian 1 Nasi & Pelengkap: nasi, bubur ayam, acar, vegetable mix. | Menu Catering (slide 2) |
| 29 | `assets/img/menu_catering/2.jpeg` | 1080×1350 | Daftar menu bagian 2 Ayam & Olahan Ayam: ayam, telur, bebek, mie/bihun. | Menu Catering (slide 3) |
| 30 | `assets/img/menu_catering/3.jpeg` | 1080×1350 | Daftar menu bagian 3 Ikan & Tempe Tahu: ikan, tempe, tahu, kentang mustofa, teri kacang. | Menu Catering (slide 4) |
| 31 | `assets/img/menu_catering/4.jpeg` | 1080×1350 | Daftar menu bagian 4 Kambing & Sapi: sate, semur, rendang, gulai, tongseng, sop, soto. | Menu Catering (slide 5) |
| 32 | `assets/img/menu_catering/5.jpeg` | 1080×1350 | Daftar menu bagian 5 Sapi, Sambal & Pelengkap: sop iga, sambal, tumis sayur, capcay, puding. | Menu Catering (slide 6) |

Galeri sejak revisi 14 memakai 9 JPEG asli dari `assets/img/dokumentasi/` (`WhatsApp Image 2026-11-20 at 12.49.46.jpeg`, `12.49.47.jpeg`, `12.49.47 (1).jpeg`, `12.49.47 (2).jpeg`, `12.49.48.jpeg`, `12.49.49.jpeg`, `12.49.49 (1).jpeg`, `12.49.50.jpeg`, `12.49.50 (1).jpeg`) dalam urutan nama natural. Sejak revisi 15 ditambahkan 17 JPEG valid dari `assets/img/proses_sembelih_kambing/` (`12.46.39` sampai `12.46.44 (3)`) pada kategori kedua. Sejak revisi 16 ditambahkan kategori ketiga memakai 6 PNG asli `assets/img/thumbnail/thumbnail_01.png` sampai `thumbnail_06.png`, satu untuk tiap video YouTube/Shorts sesuai `docs/markdown-file/REVISION-YOUTUBE.md`. Semua file asli tetap dipertahankan, tidak ada file non-gambar, dan aset galeri lama tetap dipertahankan untuk section lain.

Catatan warna dominan: emas `#D4B35E` / `#DFB74C`, coklat gelap `#3C281E` / `#171516`, krema `#E7DBB7`, putih. Logo halal menggunakan ungu `#60206D` (dipakai hanya pada badge resmi).

## 6. Website Structure

Urutan section satu halaman, dengan anchor navigasi:

1. Header sticky — logo landscape transparan yang lebih besar tanpa teks nama terpisah, nav (Tentang, Keunggulan, Harga, Menu, Paket, Galeri, FAQ, Kontak), CTA Pesan Sekarang, hamburger mobile 44×44 px.
2. `#beranda` Hero — banner hadits tunggal di bagian atas (langsung terlihat saat halaman dibuka), eyebrow "Welcome To", `<h1>` bold "Wujudkan Ibadah Aqiqah Penuh Berkah & Ketenangan", tagline "Jadikan Moment Anda Lebih Berharga", slogan, dua paragraf deskripsi dengan "Garasi Aqiqah" bold pada paragraf pertama, penutup italic "Berkah dalam ibadah, hangat dalam kebersamaan.", catatan "Dapur Berpengalaman lebih dari 15 tahun", tombol Pesan Aqiqah, Lihat Paket, container QR katalog terpisah di bawah CTA, tautan teks "Lihat Katalog WhatsApp Business", dan poster asli. QR katalog tidak menyatu dengan poster.
3. `#banner-01` Banner section — `banner_01.jpeg` (1600×533) tepat setelah Hero, full width container, `object-fit: contain`, tanpa crop/stretching.
4. `#tentang` Tentang Kami — judul "Tentang Kami" dan nama usaha "Garasi Aqiqah & Catering"; subbagian A Tentang Kami, B Logo Sertifikasi (tiga container logo baru: Halal + QR, Juleha, BNSP), C Mengapa Memilih Garasi Aqiqah & Catering? (5 poin), D Layanan & Pilihan Paket Kami (4 kartu layanan). Sejak revisi 10, keempat kartu dapat diklik/tombol keyboard; revisi 12 mengubah kartu ke-4 (Catering & Nasi Box Acara) dari lightbox detail Ayam Bakar menjadi smooth scroll ke `#menu-catering`, sementara tiga kartu pertama tetap membuka lightbox Revisi 09 pada detail paket/galeri yang sesuai. Foto sertifikat halal lama tetap dipertahankan.
5. `#keunggulan` Keunggulan — 4 card: Berkah, Hemat, Amanah, Bahagia.
6. `#harga` Daftar Harga — price list kambing yang sudah ada dipertahankan dan ditambah tiga poster asli: Paket Spesial (`garasi_best_seller_list.jpg`), Paket Hemat (`garasi_paket_aqiqah_hemat.jpg`), dan Paket Heboh (`garasi_paket_heboh_pricelist.jpg`). Keempat poster berada dalam satu grid dengan caption, utuh/tidak terpotong, dapat diperbesar via lightbox, dan tidak ada tabel harga hasil tebakan.
7. `#menu` Olahan kambing pilihan — 3 card (Sate, Tengkleng, Gulai Kambing) dalam satu baris 3 kolom di desktop; di bawahnya 2 poster (`garasi_kambing_grati_masak.jpg` dan `menu_garasi.jpeg`) berdampingan, masing-maksimal 420 px dan rata tengah. Mobile: card dan poster satu kolom, poster maksimal 460 px. Figcaption, alt, rasio asli, `loading="lazy"`, dan `object-fit: contain` dipertahankan.
8. `#menu-catering` Menu Catering — section tepat setelah `#menu` dan tidak ditambahkan ke navbar. Sejak revisi 12.1 menampilkan 6 poster asli dari `assets/img/menu_catering/` secara berurutan: `sampul_atau_awal.jpeg`, `1.jpeg`, `2.jpeg`, `3.jpeg`, `4.jpeg`, dan `5.jpeg`. Sampul menjadi item aktif awal (indeks 0) dan terpusat; lebar slide seragam, nav desktop, swipe mobile/tablet, keyboard Arrow, dan semua gambar dapat diperbesar via lightbox global dengan kicker "Menu Catering" serta CTA **Tanya Terkait Menu Catering** ke `6287896102009`. Kartu "Catering & Nasi Box Acara" di `#tentang` melakukan smooth scroll ke section ini.
9. `#paket` Paket Aqiqah Garasi — 6 card dengan urutan Hemat, Spesial, Heboh, Ayam Bakar, Snack Box, dan Pilihan Aqiqah Terbaik. Sejak revisi 09, card berada di carousel Coverflow: aktif di tengah dan terbesar, samping lebih kecil/transparan, swipe/nav, dan semua gambar bisa diperbesar. Sejak revisi 11, gambar card Paket Hemat memakai `garasi_paket_hemat.jpg`; judul, harga, deskripsi, CTA, dan info lightbox tidak berubah. `.package-extra` tetap dihapus; poster Pilihan Aqiqah Terbaik tetap menjadi card ke-6 dengan CTA WhatsApp `6287896102009`. `<p class="fine-print center-text">` tetap di bawah carousel.
10. `#mengapa` Mengapa Memilih Garasi Aqiqah — 5 card sesuai teks revisi pemesan: Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi. Teks disalin persis (termasuk ejaan asli yang diminta).
11. `#galeri` Galeri — satu section dengan dua kategori: "Dokumentasi dari Pelanggan" (9 foto `assets/img/dokumentasi/` urutan natural, tidak diubah) dan "Dokumentasi Proses Penyembelihan Kambing" (17 foto valid `assets/img/proses_sembelih_kambing/` urutan natural). Judul kategori berada tepat di atas masing-masing Coverflow. Tidak ada caption per foto, sehingga info/CTA lightbox memakai `alt`. ID `detail-souvenir` dan `detail-olahan-kambing` tetap berada pada dua figure pertama kategori pelanggan agar kartu layanan tidak regresi. Thumbnail kedua kategori memakai rasio 4:3 dan `object-fit: cover`; lightbox tetap menampilkan gambar asli utuh dengan `object-fit: contain`. Sejak revisi 16 kategori ketiga "Dokumentasi Video YouTube" memuat 6 card landscape dari `REVISION-YOUTUBE.md`: thumbnail PNG lokal, judul dan deskripsi persis (tanpa pemotongan karakter), tombol **Tonton di YouTube** ke URL asli dengan `target="_blank" rel="noopener noreferrer"`, dan deskripsi yang dibatasi dengan CSS line-clamp serta tombol **Lihat lebih banyak** / **Lihat lebih sedikit** hanya saat teks benar-benar terpotong. Tidak ada iframe/embed YouTube.
12. `#banner-02` Banner section — `banner_02.jpeg` (2560×1283) tepat sebelum FAQ, full width container, `object-fit: contain`, tanpa crop/stretching.
13. `#faq` FAQ — 7 `<details>` native: 5 pertanyaan lama dipertahankan + 2 pertanyaan revisi (waktu pengantaran dan sumbangan daging aqiqah), dengan maskot asli sebagai visual pendukung di `.faq-intro` (samping daftar FAQ di desktop, di atas daftar di mobile).
14. `#konsultasi` CTA Konsultasi — pesan otomatis WhatsApp.
15. `#kontak` Kontak — WA, email, alamat, area pengiriman ("Area pengiriman hanya melayani wilayah Tangerang dan Jakarta."), IG, FB, embed Maps berbasis koordinat `-6.2025117,106.6895407` (`z=17`), Plus Code, tombol Buka di Maps → `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8`.
16. Footer — identitas "Dapur Berpengalaman lebih dari 15 tahun.", kontak ringkas, tautan Instagram/Facebook/YouTube/TikTok dengan ikon dan gaya seragam (`target="_blank"`, `rel="noopener noreferrer"`), copyright.
17. Promo bottom modal — "Dapatkan Total Gift Senilai 500K", CTA "Pesan Aqiqah", sessionStorage.

## 7. UI/UX Requirements

- Karakter: modern, profesional, elegan, bersih, hangat (emas + coklat + krema).
- Hero dengan hierarki jelas: eyebrow → headline → slogan → deskripsi → CTA → QR katalog → visual.
- Card konsisten (radius, padding, border, hover), tetapi gambar poster, banner, logo sertifikasi, dan QR tetap memakai rasio aslinya via `object-fit: contain`; tidak ada cropping/stretching yang menghilangkan informasi.
- Khusus thumbnail foto `#galeri` revisi 15, semua figure memakai rasio 4:3 dan `object-fit: cover` agar tinggi kartu seragam untuk foto portrait maupun landscape. Lightbox tidak memakai rasio thumbnail: gambar asli dimuat dari `src` penuh dan ditampilkan utuh dengan `object-fit: contain`.
- Kartu video revisi 16 memanjang ke samping (lebar > tinggi) di 320–1440 px dengan grid thumbnail di kiri dan teks di kanan, ukuran seragam per breakpoint, `object-fit: cover` pada thumbnail agar tidak distorsi, dan `overflow-wrap: anywhere` agar judul/deskripsi tidak keluar dari card. Deskripsi mulai dalam 2–3 baris ringkas via CSS line-clamp; toggle teks 44 px memakai `aria-expanded`/`aria-controls` dan muncul hanya bila `scrollHeight > clientHeight`.
- Menu tidak menyisakan kolom kosong: card menempati satu baris penuh, poster menempati baris terpisah yang rata tengah; mobile memakai satu kolom.
- Carousel paket menunjukkan 6 item, galeri kategori pelanggan 9 item, galeri penyembelihan 17 item, dan galeri video YouTube 6 item pada lintasan scroll-snap: saat halaman dibuka item aktif awal adalah indeks tengah dinamis `(jumlah item - 1) / 2` (2 untuk paket, 4 untuk galeri pelanggan, 8 untuk penyembelihan, 2 untuk video) dan langsung terpusat, item aktif terbesar, item tetangga lebih kecil dan transparan, tanpa horizontal overflow pada halaman. Slide paket/foto memakai lebar dasar yang sama (desktop 360 px, tablet ≤320 px, mobile 64vw); slide video memakai lebar lebih besar (maks. 720 px, 92–94vw di mobile) agar card tetap landscape. Semua kartu cukup ringkas untuk browser desktop zoom 100% tanpa zoom out.
- Semua gambar konten relevan dapat diperbesar lewat lightbox; teks poster, banner, sertifikat, dan QR tetap tidak dipotong (`object-fit: contain`).
- Heading menggunakan satu stack serif elegan, body satu stack sans; jarak dan ukuran mengikuti skala yang konsisten.
- Sentuhan minimal: `prefers-reduced-motion` dihormati.
- Touch target minimal 44×44 px untuk nav, tombol, dan tautan ikon.
- Fokus keyboard terlihat (`:focus-visible`).
- Tidak ada horizontal overflow di 320, 360, 390, 768, 1024, dan 1440 px.

## 8. Functional Requirements

- Navigasi anchor smooth scroll; nav mobile membuka/tutup dengan `aria-expanded`.
- Semua tautan internal mengarah ke section yang ada.
- Semua CTA pemesanan memakai `https://wa.me/6287896102009?text=<encoded>`.
- Katalog WhatsApp Business memakai tautan terpisah `https://wa.me/c/6287896102009`.
- Promo modal muncul setelah jeda ±2 detik, slide-up, bisa ditutup (tombol, Escape, klik backdrop opsional), sessionStorage `ga_promo_dismissed`.
- Gambar non-hero memakai `loading="lazy"`, `decoding="async"`, `width`/`height`, kecuali gambar di dalam lightbox yang memakai `loading="eager"` agar langsung tampil saat dialog dibuka.
- Copyright year diisi otomatis oleh JS dengan fallback statis.
- Lightbox global (revisi 09): klik/Enter/Space pada gambar konten yang dibungkus tombol `.image-zoom` membuka dialog; gambar di dalam tautan (QR katalog) tetap membuka tautan. Kartu layanan di `#tentang` juga menjadi pemicu lightbox (mouse/touch/Enter/Space) dan mengembalikan fokus ke kartu saat ditutup. Tutup via tombol close, backdrop, atau Escape; fokus kembali ke pemicu; Tab dan Shift+Tab tetap di dialog; scroll background dikunci saat terbuka dan dikembalikan saat ditutup; Escape tidak menutup promo bila lightbox sedang aktif.
- Lightbox paket/galeri menampilkan panel info dua kolom di desktop (gambar kiri dominan, info kanan) dan tumpuk vertikal di mobile. Info paket berasal dari tag/judul/tagline/meta/CTA kartu; info kedua kategori galeri berasal dari `alt` karena tidak memakai caption per foto; CTA memakai teks kontekstual dan nomor `6287896102009`. Gambar lightbox memakai `object-fit: contain` dan rasio asli, bukan rasio 4:3 thumbnail.
- Carousel Coverflow: tombol prev/next tampil di desktop, tersembunyi di ≤900 px; swipe native dan keyboard ArrowLeft/ArrowRight tersedia; active item dipilih otomatis dari posisi scroll terdekat; posisi scroll dihitung dari offset layout tanpa distorsi transformasi agar tombol nav tetap terpusat; `prefers-reduced-motion` menonaktifkan animasi halus.
- Price list (revisi 11): `#harga` memuat empat poster asli dengan caption (Harga Kambing, Paket Spesial, Paket Hemat, Paket Heboh) dalam satu grid; dua kolom di ≥641 px dan satu kolom di ≤640 px; `object-fit: contain`, rasio 4:5 dipertahankan, gambar tidak dipotong, dan keempatnya menjadi pemicu lightbox global.
- Gambar Paket Hemat (revisi 11): card pertama carousel memakai `garasi_paket_hemat.jpg`; atribut `width`/`height`, `loading="lazy"`, `decoding="async"`, alt deskriptif, CTA, dan info lightbox dari kartu tetap dipertahankan. Aset lama `garasi_paket_aqiqah_hemat.jpg` tidak dihapus karena dipakai di price list dan galeri.
- Menu Catering (revisi 12, dikoreksi 12.1): section `#menu-catering` memakai 6 poster asli dari `assets/img/menu_catering/` secara berurutan, dengan `sampul_atau_awal.jpeg` sebagai item aktif awal indeks 0. Coverflow, swipe, nav, keyboard, dan lightbox global dengan kicker "Menu Catering" tetap dipakai; satu CTA WhatsApp kontekstual tidak berubah. Kartu Catering di `#tentang` memakai `data-scroll-target` dan smooth scroll ke section ini; tiga kartu layanan lain tetap membuka lightbox seperti revisi 10. Tidak ada tautan navbar baru dan tidak ada aset baru.
- Sosial media footer (revisi 12.1): footer memuat tautan berikon Instagram, Facebook, YouTube (`https://www.youtube.com/@garasiaqiqah`), dan TikTok (`https://www.tiktok.com/@garasiaqiqah`) dengan ukuran, jarak, warna, fokus, dan `target="_blank" rel="noopener noreferrer"` yang seragam.

## 9. WhatsApp Ordering Flow

1. Pengunjung memilih CTA kontekstual (umum, paket tertentu, konsultasi, promo).
2. Pesan otomatis dibuka di WhatsApp dengan nomor `6287896102009`.
3. Pesan contoh:
   - Umum: `Halo Garasi Aqiqah, saya ingin berkonsultasi mengenai paket aqiqah.`
   - Paket: `Halo Garasi Aqiqah, saya ingin bertanya tentang Paket Hemat.`
   - Promo: `Halo Garasi Aqiqah, saya tertarik dengan promo Total Gift Senilai 500K dan ingin Pesan Aqiqah.`
   - Galeri: `Halo Garasi Aqiqah, saya ingin bertanya terkait foto <alt>.`
   - Menu Catering: `Halo Garasi Aqiqah, saya ingin bertanya tentang Menu Catering dan Nasi Box.`
   - Katalog: tautan langsung ke `https://wa.me/c/6287896102009` (tanpa pesan).
4. Nama paket selalu dimasukkan ke dalam pesan jika tombol berada di kartu paket.
5. Harga tidak disebutkan di pesan otomatis agar tidak mengikat jika poster berubah.

## 10. Responsive Requirements

| Breakpoint | Perilaku |
| --- | --- |
| ≤ 600 px | Satu kolom, hamburger nav, hero stack dengan poster utama dan QR katalog terpisah di bawah CTA; Tentang menampilkan copy lebih dulu, lalu sertifikat dan tiga logo bertumpuk; Menu 1 kolom dengan poster vertikal maksimal 460 px; price list 1 kolom; Paket/Galeri/Menu Catering Coverflow swipe dengan slide `64vw`, nav disembunyikan; lightbox gambar dan info bertumpuk vertikal; banner full width tanpa crop; maskot tampil proporsional di atas daftar FAQ; promo modal mengambang penuh lebar dengan batas tinggi |
| 601–900 px | Nav hamburger; Menu 3 card 1 kolom dan 2 poster berdampingan; price list 2 kolom; Paket/Galeri/Menu Catering Coverflow swipe dengan nav disembunyikan; kartu umum dua kolom |
| 901–1023 px | Nav masih hamburger; Menu 3 card 3 kolom ringkas dan 2 poster berdampingan; price list 2 kolom; Paket/Galeri/Menu Catering Coverflow dengan tombol nav desktop |
| ≥ 1024 px | Nav horizontal, hero dua kolom, kartu 3–5 kolom sesuai section; price list 2 kolom; Paket/Galeri/Menu Catering Coverflow dengan slide `min(360px, 32vw)` dan tombol nav |
| ≥ 1280 px | Container maksimal ~1200 px, ruang putih lebih lapang |

## 11. SEO Requirements

- `<title>` deskriptif, meta `description` ±155 karakter, `lang="id"`.
- Open Graph: `og:type=website`, `og:title`, `og:description`, `og:image` (logo lokal), `og:locale=id_ID`.
- Twitter card summary.
- `meta viewport`, `theme-color`, `robots`.
- Satu `<h1>` di hero; `<h2>` per section; alt deskriptif pada semua gambar.
- `[KONFIRMASI]` domain final/`og:url`/canonical — sementara tidak ditambahkan canonical agar tidak mengarah ke domain yang salah.

## 12. Accessibility Requirements

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`, `dialog`/`role=dialog`.
- Navigasi keyboard penuh; `Esc` menutup menu dan modal.
- Modal memiliki `aria-labelledby`, `aria-describedby`, tombol close dengan `aria-label`, fokus dipindahkan saat dibuka dan dikembalikan saat ditutup.
- Kontras teks minimal 4.5:1 untuk body dan 3:1 untuk heading besar.
- Gambar dekoratif memakai `alt=""`; gambar informasi memakai alt deskriptif.
- FAQ memakai `<details>/<summary>` (native, screen-reader friendly).
- Tidak ada yang hanya mengandalkan warna untuk menyampaikan makna.
- Lightbox memakai `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, tombol close 44×44 px, fokus terkelola, dan `prefers-reduced-motion`.
- Setiap tombol pembesar gambar memiliki `aria-label` yang menyebut judul gambar; carousel memberi `role="group"` pada viewport dan `role="group"`/`aria-label` pada tiap slide, dengan tombol nav berlabel.

## 13. Performance Requirements

- Total aset ±2,4 MB (18 JPEG + 1 PNG maskot), tidak dimodifikasi. Tidak ada font/CDN/JS eksternal.
- Lazy loading untuk semua gambar di bawah lipat; eager + `fetchpriority="high"` hanya untuk hero.
- `width`/`height` mencegah layout shift.
- CSS dan JS lokal, satu file masing-masing, tanpa build step.
- Tidak ada request ke internet kecuali embed Google Maps (dimuat `lazy` via iframe `loading="lazy"`).

## 14. Testing Requirements

- Playwright + Chrome headless dengan server statis lokal.
- Screenshot tahapan: `screenshots/01-initial-design`, `02-development`, `03-responsive`, `04-final`, `06-content-mobile-revision`, `07-mascot-faq-revision`, `08-hero-cleanup`, `09-maps-navbar-favicon`, `10-final-presentation`, `12-profile-copy-revision`, `13-client-revisions`, `14-menu-package-revision`, `15-lightbox-hardening`, `16-image-lightbox-coverflow`, `17-service-card-carousel`, `18-price-list-package-image`, `19-menu-catering-section`, `20-menu-catering-social-footer`, `21-mobile-ui-ux-revision`, `22-contact-social-icons`, `23-galeri-dokumentasi`, `24-galeri-dua-kategori`, dan `25-dokumentasi-video-youtube` (320/390/768/1024/1440 px desktop, tablet, dan mobile).
- Cek otomatis: HTTP 200 untuk semua aset, tidak ada broken image, tidak ada console error, tidak ada overflow horizontal (`scrollWidth <= clientWidth`), semua CTA `wa.me` benar, sessionStorage modal, nav mobile tanpa tautan Menu Catering, FAQ, posisi banner, tiga logo sertifikasi, gambar produk, QR katalog, layout Menu, 4 poster price list termuat/utuh/bisa diperbesar, grid 2 kolom ≥641 px dan 1 kolom ≤640 px, gambar Paket Hemat baru tampil di card dan lightbox, 6 item di carousel paket, 9 item di galeri pelanggan, 17 item di galeri penyembelihan, dan 6 item di Menu Catering dengan urutan `sampul_atau_awal`, `1`–`5`, posisi awal Menu Catering indeks 0 dan terpusat (paket indeks 2, galeri pelanggan indeks 4, galeri penyembelihan indeks 8), ukuran slide seragam, item samping terlihat, tombol nav desktop, swipe mobile/tablet, keyboard Arrow, kedua judul kategori galeri tepat dan berurutan, 26 thumbnail galeri seragam 4:3 dengan `object-fit: cover` pada portrait/landscape, lightbox galeri memakai `object-fit: contain` tanpa rasio thumbnail, lightbox global 52 trigger gambar konten (26 Revisi 11 + 6 Menu Catering + 3 galeri tambahan revisi 14 + 17 galeri penyembelihan revisi 15), 6 kartu video YouTube dengan judul/deskripsi/URL persis source Markdown, 6 thumbnail PNG lokal dan 6 hyperlink `target="_blank" rel="noopener noreferrer"`, line-clamp serta toggle **Lihat lebih banyak/Lihat lebih sedikit** dengan keyboard dan `aria-expanded`, 3 kartu layanan yang tetap membuka lightbox dan 1 kartu Catering yang scroll ke `#menu-catering`, tautan footer YouTube/TikTok beserta ikon dan `rel="noopener noreferrer"`, info paket/galeri/menu catering, WA dinamis, mouse/touch/keyboard termasuk Tab/Shift+Tab, scroll lock, gambar siap saat dibuka, reduced motion, poster hero mobile tanpa blank besar di bawah gambar, keenam poster Paket tidak overlap body/CTA dan ukurannya seragam, FAQ tanpa ikon sosial, serta ikon YouTube/TikTok di Kontak Kami memakai URL footer yang sama dengan target 44 px.
- Cek QR: decode gambar QR dan screenshot QR dengan zxing-cpp; hasil harus `https://wa.me/c/6287896102009`.
- Cek manual: keterbacaan teks di atas gambar, konsistensi kartu, dan Maps embed.

## 15. Acceptance Criteria

1. Seluruh 14 section utama (termasuk 2 banner dan Menu Catering) plus promo modal hadir dan dapat dinavigasi.
2. Tidak ada WordPress/PHP/backend/dependency baru di runtime.
3. Tidak ada gambar, teks, harga, atau testimoni yang mengarang; semua bersumber dari identitas atau OCR aset.
4. Semua CTA dan tautan eksternal berfungsi dengan nomor/URL yang diberikan.
5. Tampilan rapi di 320, 360, 390, 768, 1024, dan 1440 px tanpa scroll horizontal.
6. Promo modal tidak langsung menutupi konten saat halaman dibuka, dan tidak muncul lagi dalam sesi setelah ditutup.
7. Screenshot nyata dari browser tersedia di seluruh folder tahapan yang relevan, termasuk `13-client-revisions`.
8. QA report berisi status, bug, dan daftar screenshot.
9. Konten revisi (hero, 5 alasan, 2 FAQ, area pengiriman) sesuai teks yang diberikan pemesan dan tidak menghilangkan konten lama.
10. Maskot hanya di FAQ; aset asli tidak diubah; poster asli beserta QR di dalamnya tetap tampil. QR katalog baru berada di container terpisah di bawah CTA hero dan ter-decode ke `https://wa.me/c/6287896102009`. Tautan teks "Lihat Katalog WhatsApp Business" tetap terlihat dan dapat diklik.
11. Tentang Kami memuat seluruh teks revisi 06, tiga logo sertifikasi terpisah, dan foto sertifikat lama; logo halal landscape lama tidak dirender.
12. Banner 01 berada tepat setelah Hero, Banner 02 tepat sebelum FAQ, dan keduanya tidak terpotong. Gambar produk baru tampil di Menu dan Paket tanpa menghapus gambar lama.
13. Menu desktop menampilkan 3 card dalam satu baris dan 2 poster berdampingan di bawahnya; tablet 3 card 1 kolom dengan 2 poster berdampingan; mobile semuanya 1 kolom dengan poster maksimal 460 px. Tidak ada ruang kosong antar card dan poster.
14. Paket terdiri dari 6 card dalam urutan asli pada carousel Coverflow; `.package-extra` tidak ada; card Pilihan Aqiqah Terbaik memakai CTA `6287896102009` dan poster tidak terpotong.
15. Lightbox global berfungsi dengan mouse, touch, dan keyboard; dialog berlabel ARIA; fokus kembali ke pemicu; Tab/Shift+Tab tetap di dialog; background tidak scroll saat lightbox terbuka; gambar langsung tampil saat dibuka; Escape menutup lightbox lebih dulu dan promo tetap berfungsi setelahnya.
16. Paket dan ketiga kategori galeri sama-sama memakai Coverflow: aktif terpusat, tetangga lebih kecil/transparan, nav desktop, swipe mobile/tablet, ArrowLeft/ArrowRight, tanpa overflow. Lightbox paket/galeri foto menampilkan info dua kolom di desktop dan vertikal di mobile dengan CTA WhatsApp kontekstual ke `6287896102009`.
17. Revisi 10: carousel dibuka dalam keadaan terpusat pada indeks tengah dinamis; slide berukuran seragam dan lebih ringkas; item samping tetap terlihat; keempat kartu Layanan & Pilihan Paket Kami membuka gambar/info paket atau galeri yang sesuai lewat lightbox dengan fokus dan WA kontekstual.
18. Revisi 11: `#harga` menampilkan price list kambing plus `garasi_best_seller_list.jpg`, `garasi_paket_aqiqah_hemat.jpg`, dan `garasi_paket_heboh_pricelist.jpg` dalam satu grid yang rapi, utuh, dan dapat diperbesar; card Paket Hemat memakai `garasi_paket_hemat.jpg` tanpa mengubah judul/deskripsi/CTA/info lightbox; carousel, WA, promo, navbar, dan lightbox Revisi 09–10 tidak regresi.
19. Revisi 12: `#menu-catering` berada tepat setelah `#menu`, menampilkan poster Menu Catering pada Coverflow, lightbox dengan kicker "Menu Catering", dan CTA **Tanya Terkait Menu Catering** ke `6287896102009`; kartu Catering di `#tentang` scroll ke section ini, navbar tidak berubah, tiga kartu layanan lain dan seluruh fitur Revisi 09–11 tidak regresi.
20. Revisi 12.1: keenam asli `assets/img/menu_catering/sampul_atau_awal.jpeg`, `1.jpeg`, `2.jpeg`, `3.jpeg`, `4.jpeg`, dan `5.jpeg` tampil utuh secara berurutan dengan sampul sebagai posisi awal carousel; lightbox, swipe, nav, CTA WA, dan footer dengan tautan berikon YouTube/TikTok berfungsi tanpa regresi Revisi 09–12.
21. Revisi 13: poster hero mobile tidak lagi menyisakan ruang kosong ±400 px karena `.hero-poster` memakai `height: auto` pada ≤900 px; keenam card Paket memakai baris grid `minmax(0, 1fr)` dan poster `max-height: 100%` sehingga tidak overlap dengan judul, meta, atau CTA di 320–1440 px; FAQ dikembalikan seperti semula tanpa ikon sosial; ikon YouTube/TikTok ditaruh di `.social-row` Kontak Kami dengan URL yang sama persis seperti footer, `target="_blank" rel="noopener noreferrer"`, dan target sentuh 44 px; carousel, CTA WA, lightbox, promo, navbar, price list, Maps, footer, dan konten tidak berubah.
22. Revisi 14: seluruh foto `#galeri` diganti dengan 9 JPEG valid dari `assets/img/dokumentasi/` dalam urutan nama natural; tidak ada caption/teks baru, semua gambar termuat tanpa distorsi, Coverflow tetap terpusat di indeks 4 dengan nav desktop/swipe mobile/keyboard, lightbox menampilkan file tepat dengan judul dari `alt`, tombol Tutup dan CTA WhatsApp kontekstual tetap berfungsi, serta kartu layanan yang memakai ID galeri tidak regresi.
23. Revisi 15: `#galeri` tetap satu section dengan judul "Dokumentasi dari Pelanggan" dan "Dokumentasi Proses Penyembelihan Kambing" tepat di atas masing-masing Coverflow; 9 foto pelanggan tidak berubah dan 17 JPEG valid penyembelihan ditambahkan urutan natural; 26 thumbnail memakai rasio 4:3 dan `object-fit: cover` sehingga portrait/landscape memiliki tinggi card sama; lightbox kedua kategori menampilkan gambar asli utuh dengan `object-fit: contain`, judul dari `alt`, CTA WA kontekstual, tombol Tutup/backdrop/Escape, dan tidak mengubah navbar, footer, maupun section lain.
24. Revisi 16: `#galeri` menambahkan kategori ketiga "Dokumentasi Video YouTube" setelah dua kategori foto tanpa mengubah keduanya. Keenam video dari `REVISION-YOUTUBE.md` tampil urut dengan thumbnail PNG lokal, judul/deskripsi/URL persis, tombol **Tonton di YouTube** aman di tab baru, tanpa iframe. Card landscape dengan ukuran seragam per breakpoint, thumbnail tidak distorsi, teks tidak keluar dari card, toggle deskripsi berbasis line-clamp hanya muncul saat terpotong, dapat diklik mouse/keyboard serta berubah menjadi **Lihat lebih sedikit** saat penuh; carousel memakai Coverflow existing dengan indeks awal 2, nav desktop, swipe mobile, dan tanpa regresi Paket/Galeri.

## Informasi yang membutuhkan konfirmasi pemilik bisnis `[KONFIRMASI]`

1. Screenshot WordPress tidak tersedia → teks asli section Tentang tidak dapat dipulihkan. Teks Tentang Kami lengkap sudah disediakan pemesan pada revisi 06; 5 FAQ lama tetap dipertahankan.
2. Nomor WA kedua `0811-1030-5999` dan domain `garasiaqiqah.com` terbaca di poster lama, tetapi tidak dimasukkan sebagai CTA utama; konfirmasi jika ingin ditampilkan.
3. Alamat pada sertifikat halal (Jl. KH. Hasyim Ashari Gg Kancil Blok C No. 110) berbeda dengan alamat yang diberikan (Gg. Dukuh 2 No.38, Nerogtog). Yang dipakai di website adalah alamat yang diberikan pemesan.
4. Tanggal sertifikat hasil OCR (26–27 September 2026) perlu dicek kembali terhadap dokumen asli sebelum dicantumkan sebagai teks. Saat ini hanya nomor sertifikat yang ditampilkan.
5. Teks harga pada poster sudah terbaca sebagian, tetapi tidak direproduksi sebagai tabel karena sebagian kolom tidak terbaca; konfirmasi daftar harga terbaru jika ingin ditampilkan sebagai teks.
6. Domain final untuk `og:url`, canonical, dan sitemap.
7. Card "Catering & Nasi Box Acara" tidak memiliki foto katering khusus di galeri. Karena kartu menyebut Ayam Bakar, saat ini kartu membuka detail "Paket Ayam Bakar" di galeri; konfirmasi jika tersedia aset katering/nasi box yang lebih tepat.
