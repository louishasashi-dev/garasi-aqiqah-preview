# QA Report — Garasi Aqiqah & Catering

Tanggal QA: 19 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome 157 headless (executable lokal, tanpa unduhan browser).

## Ringkasan

| Item | Status |
| --- | --- |
| Struktur HTML & 13 section + promo modal | Selesai |
| CSS responsif desktop / tablet / mobile | Selesai |
| JavaScript: nav mobile, promo modal, tahun footer | Selesai |
| Integrasi WhatsApp & katalog | Selesai (18 tautan: 15 CTA + 3 katalog) |
| SEO metadata & Open Graph | Selesai |
| Aksesibilitas dasar | Selesai |
| Screenshot tahapan (36 file) | Selesai |
| QA browser otomatis | Lolos |
| Revisi konten hero / alasan / FAQ / area pengiriman | Selesai |
| Maskot dipindahkan Hero → FAQ | Selesai, tidak menutupi accordion |
| Cleanup hero: hapus badge halal & QR terpisah | Selesai |
| Maps koordinat & tombol short link | Selesai, titik di Garasi Aqiqah & Catering |
| Navbar logo landscape transparan | Selesai, tanpa teks brand terpisah |
| Favicon ikon transparan | Selesai, tidak ada favicon lama di `<head>` |
| Tautan katalog teks & QR dalam poster | Selesai, tetap ada |
| Informasi yang perlu konfirmasi pemilik bisnis | 6 item (lihat bawah) |

## Fitur yang selesai

1. Header sticky dengan logo landscape transparan tanpa teks brand terpisah, 8 tautan navigasi, CTA Pesan Sekarang, dan hamburger mobile 44×44 px (`aria-expanded`).
2. Hero dengan eyebrow "Welcome To", `<h1>` "Garasi Aqiqah", tagline "Jadikan Moment Anda Lebih Berharga", slogan Berkah/Hemat/Amanah/Bahagia, dua paragraf deskripsi revisi, catatan NA Group, tombol Pesan Aqiqah, Lihat Paket, tautan teks "Lihat Katalog WhatsApp Business", poster asli, dan kutipan hadits dari poster. Badge halal terpisah, maskot, dan card QR tambahan sudah dihapus dari hero; QR di dalam poster dipertahankan.
3. Tentang Kami dengan narasi dari identitas bisnis dan sertifikat halal asli.
4. Empat card Keunggulan (Berkah, Hemat, Amanah, Bahagia) dengan ikon SVG konsisten.
5. Daftar harga kambing memakai poster asli `object-fit`-alami; tidak ada tabel hasil tebakan.
6. Menu Aqiqah: Sate Kambing, Tengkleng Kambing, Gulai Kambing + poster olahan kambing.
7. Lima paket: Hemat, Spesial, Heboh, Ayam Bakar, Snack Box; tiap kartu memakai poster asli dan CTA dengan nama paket di pesan otomatis.
8. Lima card "Mengapa Memilih" sesuai teks revisi pemesan: Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi (ejaan asli dipertahankan).
9. Galeri 6 foto dokumentasi dengan grid masonry responsif, rasio asli dipertahankan.
10. FAQ 7 pertanyaan faktual memakai `<details>/<summary>` native: 5 lama + 2 revisi (waktu pengantaran, sumbangan daging aqiqah), dengan maskot asli di samping daftar FAQ pada desktop dan di atas daftar pada mobile.
11. CTA Konsultasi dengan pesan WhatsApp otomatis.
12. Kontak: WhatsApp, email, alamat, area pengiriman (Tangerang & Jakarta), Instagram, Facebook, Plus Code sebagai teks alamat, tombol Buka di Maps memakai short link lokasi, katalog WA, dan Google Maps embed lazy-loaded berbasis koordinat.
13. Footer dengan identitas "support by NA Group Dapur berpengalaman lebih dari 10 tahun" dan copyright dinamis.
14. Promo bottom modal: jeda 2,2 detik, slide-up, close button, Escape, `sessionStorage`, CTA "Pesan Aqiqah".

## Hasil QA otomatis (browser nyata)

| Pemeriksaan | Desktop 1440×900 | Mobile 390×844 |
| --- | --- | --- |
| Gambar dimuat (19 `<img>`, termasuk maskot di FAQ) | 19/19, 0 broken, 0 request gagal | 19/19, 0 broken, 0 request gagal |
| Console / page error | 0 | 0 |
| Horizontal overflow | Tidak ada (scrollWidth 1440 = clientWidth) | Tidak ada; lolos di 320, 360, 390, 768, 1024, 1440 px |
| Anchor internal rusak | 0 | 0 |
| Tautan `wa.me` | 18, semuanya nomor `6287896102009` (15 CTA + 3 katalog `/c/`) | sama |
| Promo tertutup saat halaman dibuka | Ya | Ya |
| FAQ dapat dibuka & ditutup | 7/7 | 7/7 |
| Navigasi mobile | — | Buka via toggle (`aria-expanded=true`), tutup setelah klik tautan |
| Promo muncul setelah jeda | Ya, judul "Dapatkan Total Gift Senilai 500K" | Ya |
| Promo ditutup → `sessionStorage` | `ga_promo_dismissed = 1` | — |
| Promo tidak muncul setelah reload dalam sesi | Ya | — |
| Google Maps embed | Dimuat 301 → 200 setelah section kontak terlihat (lazy); frame `pb` mengandung `-6.2025117,106.6895407` dan zoom 17 | sama |
| Tombol "Buka di Maps" | `https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8` → redirect 200 ke place "Garasi Aqiqah & Catering" dengan koordinat `-6.2025117,106.6895407` | sama |
| Navbar logo landscape transparan | `src` tepat, `object-fit: contain`, natural 500×500; box 180×78 (desktop), 150×64 (tablet), 130×56 (mobile), 108×48 (≤360 px); tanpa teks brand; tidak overlap CTA/nav/hamburger | Ya |
| Favicon ikon transparan | `<link rel="icon">` PNG transparan; favicon lama 0; request 200 `image/png`; browser memuat aset 2× | Ya |
| Touch target hamburger | 44×44 px di 320/360/390/768 px | 44×44 px |
| Badge halal terpisah | Tidak ada elemen `.halal-badge` maupun `logo_halal.jpg` di `#beranda` | Ya |
| QR tambahan mobile | Tidak ada `.hero-qr` maupun `katalog_garasi_aqiqah_wabusiness.jpg` di `#beranda` | Ya |
| QR dalam poster | Poster utama asli (922×1152, hash cocok dengan zip) tetap dirender; QR melekat pada poster tidak diubah | Ya |
| Tautan katalog teks | "Lihat Katalog WhatsApp Business" → `https://wa.me/c/6287896102009`, `target="_blank"`, `rel="noopener noreferrer"`, dapat diklik | Ya |
| Tombol CTA hero | Pesan Aqiqah + Lihat Paket sesuai URL sebelumnya | Ya |
| Ruang kosong bekas elemen | `.hero-visual` hanya 1 anak (poster), poster terpusat, tinggi visual ≈ tinggi poster | Ya |
| Lokasi maskot | Tidak ada di `#beranda`; tampil di `#faq` | Ya |
| Maskot vs FAQ | Di samping daftar FAQ (kiri) pada desktop, di atas daftar pada mobile; tidak ada overlap dengan `.faq-list` maupun accordion | Ya |
| Maskot | Rasio asli 1024×988 (terukur ~1.034), `object-fit: contain`, tidak dipotong | Ya |
| Poster | `object-fit: contain`, rasio asli terjaga | Ya |
| Konten revisi persis | Hero, 5 alasan, 2 FAQ, area pengiriman: cocok | sama |
| Semantic / aksesibilitas | 1 `<h1>`, 11 `<h2>`, 0 gambar tanpa alt, 11 section | sama |

## Bug yang ditemukan dan diperbaiki

1. **Skrip QA: tautan katalog dianggap CTA salah.** Pemeriksaan awal menganggap `https://wa.me/c/6287896102009` sebagai nomor CTA yang salah. Ini bukan bug website; skrip QA diperbaiki dengan memisahkan pola katalog.
2. **Skrip QA: navigasi mobile dilaporkan tidak terlihat.** Pemeriksaan dilakukan sebelum transisi CSS 200 ms selesai. Setelah ditambahkan jeda 350 ms, status `visible = true`. Bukan bug website.
3. **Screenshot kontak awal menampilkan peta kosong.** Karena iframe memakai `loading="lazy"`, embed baru dimuat saat section terlihat. Skrip screenshot diperbaiki dengan menunggu 3,5 detik setelah scroll ke `#kontak`; embed, termasuk peta dan tile peta, terverifikasi dimuat (HTTP 200).
4. **Atribut `width` ganda pada badge halal di HTML.** Ditemukan saat audit markup dan diperbaiki menjadi satu pasangan `width`/`height` yang sesuai rasio asli.
5. **Horizontal overflow 10 px di lebar 360 px.** Tombol hamburger melewati tepi container karena tiga elemen header tidak muat. Nama brand disembunyikan di bawah 420 px (logo tetap ada, tautan tetap punya `aria-label`). Kartu menu juga dipadatkan agar 320 px tidak overflow. Setelah perbaikan: `scrollWidth = clientWidth` pada 320, 360, 390, 768, 1024, dan 1440 px. Semua screenshot diambil ulang setelah perbaikan ini.
6. **Ring dekoratif hero menutup area klik QR (revisi ini).** Pseudo-element `.hero-visual::before` menerima pointer event di atas QR katalog. Diberi `pointer-events: none`; `.hero-qr` dan `.hero-mascot` juga diberi `z-index: 1`. Uji ulang `elementFromPoint` di tengah QR kini mengembalikan elemen di dalam `.hero-qr`.
7. **Poster hero belum eksplisit `object-fit: contain` (revisi ini).** Sudah ditambahkan pada `.hero-poster img`; tidak ada cropping.
8. **Pemindahan maskot (revisi 02).** Tidak ada bug baru. Grid hero mobile diubah dari `"mascot qr"` menjadi `". qr"` agar QR tetap di kanan-bawah tanpa elemen maskot; uji ulang `elementFromPoint` lolos.
9. **Cleanup hero (revisi 03).** Tidak ada bug website. Skrip QA sempat salah mengira grid cell kosong sebagai "ruang kosong"; pemeriksaan diganti ke jumlah anak, posisi poster terpusat, dan kesamaan tinggi visual/poster. Uji ulang lolos.
10. **Hamburger menyusut di 320 px (revisi 04).** Setelah logo navbar diperbesar, flex item hamburger terkompresi menjadi 30,34×44 px. Ditambahkan `flex: 0 0 44px` dan CTA dipadatkan hanya di ≤360 px. Uji ulang: 44×44 px di semua lebar mobile, tanpa overflow.

Tidak ada bug fungsional yang tersisa pada website.

## Fitur yang belum selesai / tidak tersedia

- Teks asli WordPress untuk Tentang Kami tidak dapat dipulihkan karena folder `references/` tidak ada. Teks lima alasan dan 2 FAQ tambahan sudah disediakan pemesan pada revisi ini.
- `docs/VISUAL-AUDIT.md` tidak tersedia di workspace.
- Screenshot tidak dapat dinilai secara visual oleh model yang menjalankan QA (tanpa dukungan input gambar). Validasi dilakukan secara programatis: file ada, ukuran > 0, OCR Windows mendeteksi teks kunci (Welcome To, lima alasan, FAQ baru, area pengiriman), dan geometri elemen diverifikasi melalui Playwright.
- `favicon-browser.png` adalah render aset favicon asli yang dimuat langsung oleh browser, bukan screenshot tab/chrome browser (Playwright headless tidak menangkap UI browser). Identifikasi logo landscape vs icon juga dibantu OCR Windows + analisis alpha/Pillow, bukan penglihatan langsung.

## Informasi yang masih membutuhkan konfirmasi `[KONFIRMASI]`

1. Screenshot WordPress tidak tersedia — teks lama Tentang Kami perlu dikonfirmasi; alasan dan FAQ revisi sudah mengikuti teks pemesan.
2. Nomor WA kedua `0811-1030-5999` dan domain `garasiaqiqah.com` terbaca di poster; belum dijadikan CTA/resmi.
3. Alamat pada sertifikat halal berbeda dengan alamat yang diberikan; website memakai alamat yang diberikan pemesan.
4. Tanggal sertifikat hasil OCR perlu dicek terhadap dokumen asli; saat ini hanya nomor sertifikat yang ditampilkan.
5. Daftar harga lengkap tidak direproduksi sebagai teks karena sebagian kolom poster tidak terbaca.
6. Domain final untuk `og:url`, canonical, dan sitemap.

## Daftar screenshot (file nyata dari browser)

| Folder | File | Ukuran |
| --- | --- | --- |
| `screenshots/01-initial-design/` | `homepage-desktop.png` | 1440×900 |
| `screenshots/01-initial-design/` | `homepage-mobile.png` | 390×844 |
| `screenshots/02-development/` | `packages-desktop.png` | 1440×900 |
| `screenshots/02-development/` | `contact-desktop.png` | 1440×900 |
| `screenshots/03-responsive/` | `packages-mobile.png` | 390×844 |
| `screenshots/03-responsive/` | `contact-mobile.png` | 390×844 |
| `screenshots/03-responsive/` | `promo-modal-mobile.png` | 390×844 |
| `screenshots/04-final/` | `final-fullpage-desktop.png` | 1440×10148 |
| `screenshots/04-final/` | `final-fullpage-mobile.png` | 390×18097 |
| `screenshots/06-content-mobile-revision/` | `why-garasi-desktop.png` | 1440×900 |
| `screenshots/06-content-mobile-revision/` | `why-garasi-mobile.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `hero-desktop-updated.png` | 1440×900 |
| `screenshots/06-content-mobile-revision/` | `hero-mobile-updated.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `hero-mobile-qr-visible.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `mascot-desktop.png` | 1440×900 |
| `screenshots/06-content-mobile-revision/` | `mascot-mobile.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `faq-desktop-updated.png` | 1440×900 |
| `screenshots/06-content-mobile-revision/` | `faq-mobile-updated.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `contact-maps-desktop.png` | 1440×900 |
| `screenshots/06-content-mobile-revision/` | `contact-maps-mobile.png` | 390×844 |
| `screenshots/06-content-mobile-revision/` | `fullpage-desktop.png` | 1440×10564 |
| `screenshots/06-content-mobile-revision/` | `fullpage-mobile.png` | 390×19100 |
| `screenshots/07-mascot-faq-revision/` | `hero-desktop.png` | 1440×900 |
| `screenshots/07-mascot-faq-revision/` | `hero-mobile.png` | 390×844 |
| `screenshots/07-mascot-faq-revision/` | `faq-desktop.png` | 1440×900 |
| `screenshots/07-mascot-faq-revision/` | `faq-mobile.png` | 390×844 |
| `screenshots/07-mascot-faq-revision/` | `faq-mascot-position.png` | 390×844 |
| `screenshots/08-hero-cleanup/` | `hero-desktop.png` | 1440×900 |
| `screenshots/08-hero-cleanup/` | `hero-mobile.png` | 390×844 |
| `screenshots/08-hero-cleanup/` | `hero-mobile-poster-qr.png` | 390×844 |
| `screenshots/09-maps-navbar-favicon/` | `navbar-desktop.png` | 1440×900 |
| `screenshots/09-maps-navbar-favicon/` | `navbar-mobile.png` | 390×844 |
| `screenshots/09-maps-navbar-favicon/` | `favicon-browser.png` | aset favicon dirender browser |
| `screenshots/09-maps-navbar-favicon/` | `contact-map-desktop.png` | 1440×900 |
| `screenshots/09-maps-navbar-favicon/` | `contact-map-mobile.png` | 390×844 |
| `screenshots/09-maps-navbar-favicon/` | `contact-map-location.png` | crop `.map-wrap` 1440×900 |

Semua file diverifikasi ada dengan ukuran > 0 dan dihasilkan dari `http://127.0.0.1:8000/index.html` menggunakan Playwright + Chrome headless. Folder `06` adalah bukti historis sebelum maskot dipindahkan; folder `07` setelah pemindahan; folder `08` adalah kondisi setelah badge halal dan QR terpisah di hero dihapus; folder `09` adalah kondisi setelah Maps, navbar, dan favicon direvisi.
