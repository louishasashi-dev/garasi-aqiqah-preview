# Laporan Revisi 04 — Maps, Navbar & Favicon

Tanggal: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome lokal.

## Audit aset transparan

Seluruh isi `assets/img/logo/transparantlogo/` diperiksa; tidak ada file yang diubah.

| File | Dimensi / format | Analisis | Keputusan |
| --- | --- | --- | --- |
| `garasi_aqiqah_and_catering_logo_landscape-transparant.png` | 500×500 RGBA; alpha bbox `(84,174)–(452,311)` = 368×137 | Bentuk sangat lebar; OCR Windows pada komposit putih membaca "Aqiqah & Catering" | Logo navbar desktop & mobile |
| `garasi_aqiqah_catering_logo_icon-transparant.png` | 500×500 RGBA; alpha bbox `(57,52)–(461,465)` = 404×413 | Hampir kotak; OCR tidak menemukan teks → mark | Favicon; menggantikan ikon lama juga di footer |

Identifikasi dilakukan dengan Pillow (dimensi, mode, alpha bounding box) dan OCR Windows, bukan menebak dari nama file. Model tidak dapat melihat gambar secara langsung.

## Perubahan

| Area | Sebelum | Sesudah |
| --- | --- | --- |
| Embed Maps | Plus Code `QMWQ+XR Neroktog, Kota Tangerang, Banten` | `https://www.google.com/maps?q=-6.2025117,106.6895407&z=17&output=embed` |
| Tombol "Buka di Maps" | URL query Plus Code | `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8` |
| Navbar | Logo JPG 52×52 + teks "Garasi Aqiqah / & Catering" | Logo landscape transparan, tanpa teks nama terpisah |
| Favicon | `garasi_aqiqah&catering_logo_icon.jpg` | `garasi_aqiqah_catering_logo_icon-transparant.png`, `type="image/png"` |

Alamat/Plus Code di section kontak tetap ditampilkan sebagai teks; alamat bisnis tidak diubah. Marker embed mengarah ke koordinat Garasi Aqiqah & Catering. Short link terverifikasi redirect ke place "Garasi Aqiqah & Catering" dengan koordinat `-6.2025117,106.6895407`.

CSS navbar menggunakan `object-fit: contain` dan hanya menyembunyikan padding transparan berlebih di dalam canvas 500×500; piksel logo tidak dipotong atau didistorsi. Ukuran kotak logo: 180×78 px desktop, 150×64 px tablet, 130×56 px mobile, 108×48 px pada ≤360 px. `overflow: hidden` hanya pada anchor brand; tidak ada overlap dengan CTA/nav/hamburger. Hamburger dikunci `flex: 0 0 44px` dan CTA dipadatkan pada ≤360 px agar tetap 44×44 px tanpa overflow.

Tidak ada perubahan pada `js/main.js`, Hero, lima alasan, FAQ, area pengiriman, promo, CTA WhatsApp, katalog, atau file di `assets/`.

## Hasil QA

- Viewport: 320, 360, 390, 768, 1024, 1440 px.
- Horizontal overflow: 0; header overflow: 0; console/page error: 0; request gagal: 0; broken image: 0; anchor rusak: 0.
- Hamburger: 44×44 px di 320/360/390/768 px; tidak ada overlap dengan logo/CTA.
- Maps: frame aktif memuat `pb=!1m3!2m1!1s-6.2025117,106.6895407!6i17`; status 301 → 200; tombol short link redirect 200 ke koordinat benar.
- Favicon: `<link rel="icon">` tepat, favicon lama 0 di `<head>`, request 200 `image/png`, browser memuat aset 2×.
- Regresi: 18 tautan `wa.me` valid (15 CTA + 3 katalog), 19 gambar, FAQ 7/7, promo `sessionStorage`, nav mobile, maskot di FAQ, badge halal/QR terpisah tidak ada di hero.

## Screenshot

6 file aktual dari browser di `screenshots/09-maps-navbar-favicon/`:

1. `navbar-desktop.png` — 1440×900
2. `navbar-mobile.png` — 390×844
3. `favicon-browser.png` — aset favicon dirender langsung oleh browser
4. `contact-map-desktop.png` — 1440×900
5. `contact-map-mobile.png` — 390×844
6. `contact-map-location.png` — crop `.map-wrap`

Semua file diverifikasi ada dengan ukuran > 0.

## Skipped / Risk

- Diabaikan: revisi `og:image` dan teks identitas lain; tidak diminta. Risiko: OG masih memakai JPG landscape lama, bukan versi transparan.
- Risiko: Playwright headless tidak menangkap chrome/tab browser, jadi `favicon-browser.png` membuktikan aset favicon dimuat browser, bukan tampilan ikon di tab.
