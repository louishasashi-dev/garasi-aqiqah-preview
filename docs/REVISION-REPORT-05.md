# Laporan Revisi 05 — Identitas Usaha, Copy Hero & Banner Hadits

Tanggal: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome lokal.

## Ruang lingkup

| Area | Sebelum | Sesudah |
| --- | --- | --- |
| Identitas usaha | "support by NA Group", "dapur berpengalaman lebih dari 10 tahun" di meta OG, hero, Tentang, Keunggulan, dan footer | "Dapur Berpengalaman lebih dari 15 tahun"; NA Group dan klaim 10 tahun dihapus dari seluruh website |
| Judul hero | `<h1>` "Garasi Aqiqah" | `<h1>` bold "Wujudkan Ibadah Aqiqah Penuh Berkah &amp; Ketenangan" |
| Paragraf hero | 2 paragraf deskripsi lama + penutup lama | 2 paragraf baru persis sesuai arahan; "Garasi Aqiqah" dibold di paragraf pertama |
| Penutup hero | "Bersama Garasi Aqiqah, nikmati kemudahan, ketenangan, dan kebahagiaan..." | "Berkah dalam ibadah, hangat dalam kebersamaan." dengan gaya italic |
| Banner hadits | Satu blok di bawah `.hero-grid`, baru terlihat setelah scroll | Blok yang sama dipindahkan ke atas `.hero-grid`, langsung terlihat saat halaman dibuka; tidak ada duplikat |

Tagline "Jadikan Moment Anda Lebih Berharga", slogan, eyebrow "Welcome To", CTA, katalog, poster asli, QR di poster, navigasi, produk, FAQ, maskot, promo, Maps, favicon, dan logo tidak diubah. Tidak ada perubahan CSS atau JavaScript.

## Hasil QA

- Viewport: desktop `1440×1000`, mobile `390×844`.
- Teks judul, kedua paragraf, dan penutup cocok persis; tidak ada karakter `*` atau `_` literal.
- Format: judul `font-weight: 700` dan lebih besar dari tagline; `<strong>Garasi Aqiqah</strong>` hanya di paragraf pertama; penutup `font-style: italic`.
- Identitas: 0 "NA Group", 0 "10 tahun" pada teks dan source halaman; keterangan 15 tahun tampil di hero, Tentang, Keunggulan, footer, dan meta OG.
- Banner hadits: tepat 1 elemen `.hadith`, teks persis, posisi awal `top=161 px` (desktop) dan `top=109 px` (mobile), keduanya langsung terlihat.
- Horizontal overflow: tidak ada di 320, 360, 390, 768, 1024, dan 1440 px (`scrollWidth = clientWidth`).
- Gambar: 19/19 dimuat, 0 broken, 0 elemen loading, 0 console error, 0 request gagal.
- Regresi: 0 anchor rusak, 8 tautan nav, 7 FAQ dapat dibuka/ditutup, 18 tautan `wa.me` valid (15 CTA + 3 katalog), nav mobile, promo, poster asli, tombol "Buka di Maps" `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8`, dan Maps lazy tetap berfungsi.

## Screenshot

6 file aktual dari browser di `screenshots/12-profile-copy-revision/`:

1. `desktop-navbar.png` — 1440×1000
2. `desktop-hero.png` — 1440×1000
3. `desktop-hadith.png` — crop `.hadith` 1184×175
4. `mobile-navbar.png` — 390×844
5. `mobile-hero.png` — 390×844
6. `mobile-hadith.png` — crop `.hadith` 354×174

Semua file diverifikasi ada dengan ukuran > 0. OCR Windows membaca judul baru, kedua paragraf, penutup, dan teks hadits pada screenshot terkait.

## Skipped / Risk

- Diabaikan: perubahan desain/CSS, JavaScript, aset, dan section lain; tidak diminta.
- Risiko: QA dijalankan lokal karena perubahan belum dipublikasikan ulang ke GitHub Pages; perlu deploy sebelum screenshot publik mencerminkan revisi ini.
