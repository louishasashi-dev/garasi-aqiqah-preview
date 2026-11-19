# PRD — Garasi Aqiqah & Catering Landing Page

Status: disetujui untuk implementasi (Tahap 1 selesai; revisi konten & mobile selesai; pemindahan maskot ke FAQ selesai; cleanup hero selesai 19 November 2026)
Tanggal audit: 19 November 2026
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
| Interaksi | Vanilla JavaScript (ES6+) | Hanya untuk nav mobile, promo modal, dan tahun footer |
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
| 4 | `assets/img/halal/logo_halal_landscape.jpg` | 1477×709 | Versi landscape logo halal, nomor sama. | Tentang / sertifikat |
| 5 | `assets/img/halal/sertifikat halal.jpg` | 1000×1362 | Sertifikat Halal: "ID36110081133790926", "GARASI AQIQAH & CATERING", alamat lama di Kancil, tanggal 26–27 September 2026. | Tentang, Galeri |
| 6 | `assets/img/product_and_service/garasi_poster.jpg` | 922×1152 | Poster utama: "JADIKAN MOMENT ANDA LEBIH BERHARGA", "Berkah, Hemat, Amanah, Bahagia", hadits HR Abu Dawud 2838 / At-Tirmidzi 1552, WA 0878-9610-2009 & 0811-1030-5999. | Hero, Galeri |
| 7 | `assets/img/product_and_service/garasi_kambing_grati_masak.jpg` | 1279×1600 | "Spesialis kambing gratis masak": gulai/sop/tongseng, sate/teriyaki/semur/rendang. | Menu, Galeri |
| 8 | `assets/img/product_and_service/garasi_pricelist_spesialiskambing_gratismasak&potong.jpg` | 1080×1350 | Pricelist kambing: type betina/jantan, 200–700 tusuk, 50–150 porsi, "GRATIS!! biaya potong & masak", "FREE SOUVENIR Sertifikat + Bingkai, Mug Dengan Foto Ananda". | Daftar Harga Kambing |
| 9 | `assets/img/product_and_service/garasi_best_seller_list.jpg` | 1080×1350 | Best seller + pricelist paket spesial kambing jantan, isi box. | Daftar Harga / Paket |
| 10 | `assets/img/product_and_service/garasi_paket_aqiqah_hemat.jpg` | 1080×1350 | Poster "PAKET AQIQAH Hemat — Murahnya Dapat Semua", isi box, gratis ongkir. | Paket Hemat, Galeri |
| 11 | `assets/img/product_and_service/garasi_paket_hemat.jpg` | 1080×1350 | Visual paket hemat: sate kambing, acar, perlengkapan makan, air mineral. | Paket Hemat (alternatif visual) |
| 12 | `assets/img/product_and_service/garasi_paket_aqiqah_special.jpg` | 1080×1350 | Poster paket spesial: kerupuk ikan, sate kambing, acar, pisang, fruit tea, telur rebus, perlengkapan makan, nasi putih. | Paket Spesial, Galeri |
| 13 | `assets/img/product_and_service/garasi_paket_aqiqah_heboh.jpg` | 1080×1350 | Poster paket heboh: slogan Berkah/Hemat/Amanah/Bahagia, sate kambing, acar, pisang. | Paket Heboh |
| 14 | `assets/img/product_and_service/garasi_paket_heboh_pricelist.jpg` | 1080×1350 | Pricetlist paket heboh: "Jaminan Paling Ekonomis", isi box, jantan +200rb free boneka domba. | Paket Heboh (pricelist) |
| 15 | `assets/img/product_and_service/garasi_paket_ayambakar.jpg` | 1080×1350 | "Paket Ayam bakar": ayam bakar, nasi putih, sambal, acar, kerupuk, pisang, air mineral. | Paket Ayam Bakar |
| 16 | `assets/img/product_and_service/garasi_paket_snackbox.jpg` | 1131×1600 | "Paket Snack Box", "Mulai 13Rb", isi 3 snack + air mineral + tisu, beberapa pilihan menu. | Paket Snack Box |
| 17 | `assets/img/product_and_service/garasi_hadiah_souvenir.jpg` | 1130×1600 | Dokumentasi sertifikat aqiqah + hadiah souvenir bertuliskan "Hadiah ini indah, tapi Ibadah kamu jauh lebih berharga." | Galeri, Kenapa |
| 18 | `assets/img/product_and_service/katalog_garasi_aqiqah_wabusiness.jpg` | 300×300 | Kode visual katalog WhatsApp Business (OCR kosong). Aset dipertahankan; card QR terpisah di hero mobile sudah dihapus. QR yang menyatu dengan poster tetap ada. | Tidak dirender terpisah; tautan katalog aktif |
| 19 | `assets/img/maskot/orang&kambing.png` | 1024×988 | Maskot orang + kambing (PNG, alpha). | FAQ (desktop & mobile) |

Catatan warna dominan: emas `#D4B35E` / `#DFB74C`, coklat gelap `#3C281E` / `#171516`, krema `#E7DBB7`, putih. Logo halal menggunakan ungu `#60206D` (dipakai hanya pada badge resmi).

## 6. Website Structure

Urutan section satu halaman, dengan anchor navigasi:

1. Header sticky — logo landscape transparan yang lebih besar tanpa teks nama terpisah, nav (Tentang, Keunggulan, Harga, Menu, Paket, Galeri, FAQ, Kontak), CTA Pesan Sekarang, hamburger mobile 44×44 px.
2. `#beranda` Hero — eyebrow "Welcome To", `<h1>` "Garasi Aqiqah", tagline "Jadikan Moment Anda Lebih Berharga", slogan, dua paragraf deskripsi, catatan "support by NA Group...", tombol Pesan Aqiqah, Lihat Paket, tautan teks "Lihat Katalog WhatsApp Business", dan poster asli. Badge halal terpisah, maskot, dan card QR tambahan tidak dipakai di hero; QR di dalam poster dan sertifikasi di section lain tetap ada.
3. `#tentang` Tentang Kami — judul "Garasi Aqiqah", narasi dari data yang tersedia, sertifikat halal.
4. `#keunggulan` Keunggulan — 4 card: Berkah, Hemat, Amanah, Bahagia.
5. `#harga` Daftar Harga Kambing — poster pricelist asli + poin yang terbaca; tanpa tabel harga hasil tebakan.
6. `#menu` Menu Aqiqah — Sate Kambing, Tengkleng Kambing, Gulai Kambing + visual olahan kambing.
7. `#paket` Pilihan Paket — Hemat, Spesial, Heboh, Ayam Bakar, Snack Box; masing-masing poster + CTA WhatsApp.
8. `#mengapa` Mengapa Memilih Garasi Aqiqah — 5 card sesuai teks revisi pemesan: Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi. Teks disalin persis (termasuk ejaan asli yang diminta).
9. `#galeri` Galeri — dokumentasi asli, grid responsive.
10. `#faq` FAQ — 7 `<details>` native: 5 pertanyaan lama dipertahankan + 2 pertanyaan revisi (waktu pengantaran dan sumbangan daging aqiqah), dengan maskot asli sebagai visual pendukung di `.faq-intro` (samping daftar FAQ di desktop, di atas daftar di mobile).
11. `#konsultasi` CTA Konsultasi — pesan otomatis WhatsApp.
12. `#kontak` Kontak — WA, email, alamat, area pengiriman ("Area pengiriman hanya melayani wilayah Tangerang dan Jakarta."), IG, FB, embed Maps berbasis koordinat `-6.2025117,106.6895407` (`z=17`), Plus Code, tombol Buka di Maps → `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8`.
13. Footer — identitas "support by NA Group...", kontak ringkas, copyright.
14. Promo bottom modal — "Dapatkan Total Gift Senilai 500K", CTA "Pesan Aqiqah", sessionStorage.

## 7. UI/UX Requirements

- Karakter: modern, profesional, elegan, bersih, hangat (emas + coklat + krema).
- Hero dengan hierarki jelas: eyebrow → headline → slogan → deskripsi → CTA → visual.
- Card konsisten (radius, padding, border, hover), tetapi gambar poster tetap memakai rasio aslinya via `object-fit: contain` di dalam frame; tidak ada cropping yang menghilangkan teks.
- Heading menggunakan satu stack serif elegan, body satu stack sans; jarak dan ukuran mengikuti skala yang konsisten.
- Sentuhan minimal: `prefers-reduced-motion` dihormati.
- Touch target minimal 44×44 px untuk nav, tombol, dan tautan ikon.
- Fokus keyboard terlihat (`:focus-visible`).
- Tidak ada horizontal overflow di 360 px.

## 8. Functional Requirements

- Navigasi anchor smooth scroll; nav mobile membuka/tutup dengan `aria-expanded`.
- Semua tautan internal mengarah ke section yang ada.
- Semua CTA pemesanan memakai `https://wa.me/6287896102009?text=<encoded>`.
- Katalog WhatsApp Business memakai tautan terpisah `https://wa.me/c/6287896102009`.
- Promo modal muncul setelah jeda ±2 detik, slide-up, bisa ditutup (tombol, Escape, klik backdrop opsional), sessionStorage `ga_promo_dismissed`.
- Gambar non-hero memakai `loading="lazy"`, `decoding="async"`, `width`/`height`.
- Copyright year diisi otomatis oleh JS dengan fallback statis.

## 9. WhatsApp Ordering Flow

1. Pengunjung memilih CTA kontekstual (umum, paket tertentu, konsultasi, promo).
2. Pesan otomatis dibuka di WhatsApp dengan nomor `6287896102009`.
3. Pesan contoh:
   - Umum: `Halo Garasi Aqiqah, saya ingin berkonsultasi mengenai paket aqiqah.`
   - Paket: `Halo Garasi Aqiqah, saya ingin bertanya tentang Paket Hemat.`
   - Promo: `Halo Garasi Aqiqah, saya tertarik dengan promo Total Gift Senilai 500K dan ingin Pesan Aqiqah.`
   - Katalog: tautan langsung ke `https://wa.me/c/6287896102009` (tanpa pesan).
4. Nama paket selalu dimasukkan ke dalam pesan jika tombol berada di kartu paket.
5. Harga tidak disebutkan di pesan otomatis agar tidak mengikat jika poster berubah.

## 10. Responsive Requirements

| Breakpoint | Perilaku |
| --- | --- |
| < 640 px | Satu kolom, hamburger nav, hero stack dengan satu poster utama (tanpa badge halal/QR terpisah); maskot tampil proporsional di atas daftar FAQ; card paket stack, galeri 2 kolom, promo modal mengambang penuh lebar dengan batas tinggi |
| 640–1023 px | Dua kolom untuk kartu, galeri 2–3 kolom, nav masih hamburger |
| ≥ 1024 px | Nav horizontal, hero dua kolom, kartu 3–5 kolom sesuai section, galeri 3 kolom |
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

## 13. Performance Requirements

- Total aset ±2,4 MB (18 JPEG + 1 PNG maskot), tidak dimodifikasi. Tidak ada font/CDN/JS eksternal.
- Lazy loading untuk semua gambar di bawah lipat; eager + `fetchpriority="high"` hanya untuk hero.
- `width`/`height` mencegah layout shift.
- CSS dan JS lokal, satu file masing-masing, tanpa build step.
- Tidak ada request ke internet kecuali embed Google Maps (dimuat `lazy` via iframe `loading="lazy"`).

## 14. Testing Requirements

- Playwright + Chrome headless dengan server statis lokal.
- Screenshot tahapan: `screenshots/01-initial-design`, `02-development`, `03-responsive`, `04-final`, `06-content-mobile-revision`, `07-mascot-faq-revision`, dan `08-hero-cleanup` (desktop + mobile).
- Cek otomatis: HTTP 200 untuk semua aset, tidak ada broken image, tidak ada console error, tidak ada overflow horizontal (`scrollWidth <= clientWidth`), semua CTA `wa.me` benar, sessionStorage modal, nav mobile, dan FAQ.
- Cek manual: keterbacaan teks di atas gambar, konsistensi kartu, dan Maps embed.

## 15. Acceptance Criteria

1. Seluruh section A–M plus promo modal hadir dan dapat dinavigasi.
2. Tidak ada WordPress/PHP/backend/dependency baru di runtime.
3. Tidak ada gambar, teks, harga, atau testimoni yang mengarang; semua bersumber dari identitas atau OCR aset.
4. Semua CTA dan tautan eksternal berfungsi dengan nomor/URL yang diberikan.
5. Tampilan rapi di 320, 360, 390, 768, 1024, dan 1440 px tanpa scroll horizontal.
6. Promo modal tidak langsung menutupi konten saat halaman dibuka, dan tidak muncul lagi dalam sesi setelah ditutup.
7. Screenshot nyata dari browser tersedia di kelima folder tahapan.
8. QA report berisi status, bug, dan daftar screenshot.
9. Konten revisi (hero, 5 alasan, 2 FAQ, area pengiriman) sesuai teks yang diberikan pemesan dan tidak menghilangkan konten lama.
10. Maskot hanya di FAQ; badge halal terpisah dan card QR tambahan tidak ada di hero. Aset asli tidak diubah; poster asli beserta QR di dalamnya tetap tampil. Tautan teks "Lihat Katalog WhatsApp Business" ke `https://wa.me/c/6287896102009` tetap terlihat dan dapat diklik.

## Informasi yang membutuhkan konfirmasi pemilik bisnis `[KONFIRMASI]`

1. Screenshot WordPress tidak tersedia → teks asli section Tentang tidak dapat dipulihkan. Teks "Mengapa Memilih" dan 2 FAQ tambahan sudah disediakan pemesan pada revisi ini; 5 FAQ lama tetap dipertahankan.
2. Nomor WA kedua `0811-1030-5999` dan domain `garasiaqiqah.com` terbaca di poster lama, tetapi tidak dimasukkan sebagai CTA utama; konfirmasi jika ingin ditampilkan.
3. Alamat pada sertifikat halal (Jl. KH. Hasyim Ashari Gg Kancil Blok C No. 110) berbeda dengan alamat yang diberikan (Gg. Dukuh 2 No.38, Nerogtog). Yang dipakai di website adalah alamat yang diberikan pemesan.
4. Tanggal sertifikat hasil OCR (26–27 September 2026) perlu dicek kembali terhadap dokumen asli sebelum dicantumkan sebagai teks. Saat ini hanya nomor sertifikat yang ditampilkan.
5. Teks harga pada poster sudah terbaca sebagian, tetapi tidak direproduksi sebagai tabel karena sebagian kolom tidak terbaca; konfirmasi daftar harga terbaru jika ingin ditampilkan sebagai teks.
6. Domain final untuk `og:url`, canonical, dan sitemap.
