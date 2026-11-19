# QA Report — Garasi Aqiqah & Catering

Tanggal QA: 20 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome 157 headless (executable lokal, tanpa unduhan browser).

## Ringkasan

| Item | Status |
| --- | --- |
| Struktur HTML & 13 section + promo modal | Selesai |
| CSS responsif desktop / tablet / mobile | Selesai |
| JavaScript: nav mobile, promo modal, tahun footer, lightbox | Selesai, vanilla JS tanpa library |
| Integrasi WhatsApp & katalog | Selesai (20 tautan: 16 CTA + 4 katalog) |
| SEO metadata & Open Graph | Selesai |
| Aksesibilitas dasar | Selesai |
| Screenshot tahapan (80 file) | Selesai |
| QA browser otomatis | Lolos di 10 viewport |
| Revisi konten hero / alasan / FAQ / area pengiriman | Selesai |
| Maskot dipindahkan Hero → FAQ | Selesai, tidak menutupi accordion |
| Cleanup hero: hapus badge halal lama | Selesai |
| Maps koordinat & tombol short link | Selesai, titik di Garasi Aqiqah & Catering |
| Navbar logo landscape transparan | Selesai, tanpa teks brand terpisah |
| Favicon ikon transparan | Selesai, tidak ada favicon lama di `<head>` |
| Identitas usaha 15 tahun | Selesai, tidak ada NA Group / klaim 10 tahun |
| Copywriting profil depan baru | Selesai, bold/italic sesuai format |
| Banner hadits tunggal di atas hero | Selesai, langsung terlihat |
| Tautan katalog teks & QR dalam poster | Selesai, tetap ada |
| Revisi 06: Tentang Kami lengkap + 3 logo sertifikasi | Selesai |
| Revisi 06: Banner 01 setelah Hero & Banner 02 sebelum FAQ | Selesai, rasio asli tanpa crop |
| Revisi 06: Gambar menu & paket baru | Selesai, gambar lama tetap ada |
| Revisi 06: QR katalog di hero | Selesai, ter-decode ke katalog benar |
| Revisi 07: layout Menu 3 card + 2 poster | Selesai, tanpa ruang kosong |
| Revisi 07: card Paket ke-6 & `.package-extra` dihapus | Selesai, grid 3×2 / 2×3 / 1 kolom |
| Revisi 07: lightbox poster Pilihan Terbaik | Selesai, mouse/touch/keyboard & ARIA |
| Revisi 08: audit hardening lightbox | Selesai, hanya scroll lock dan eager image yang diubah |
| Revisi 08: 10 pemeriksaan hardening | Lolos: init, z-index, Tab/Shift+Tab, Escape, fokus, scroll lock, ARIA, gambar, 44 px, reduced motion |
| Informasi yang perlu konfirmasi pemilik bisnis | 6 item (lihat bawah) |

## Fitur yang selesai

1. Header sticky dengan logo landscape transparan tanpa teks brand terpisah, 8 tautan navigasi, CTA Pesan Sekarang, dan hamburger mobile 44×44 px (`aria-expanded`).
2. Hero dengan banner hadits tunggal di atas, eyebrow "Welcome To", `<h1>` bold "Wujudkan Ibadah Aqiqah Penuh Berkah & Ketenangan", tagline "Jadikan Moment Anda Lebih Berharga", slogan Berkah/Hemat/Amanah/Bahagia, dua paragraf deskripsi revisi dengan "Garasi Aqiqah" bold, penutup italic "Berkah dalam ibadah, hangat dalam kebersamaan.", catatan "Dapur Berpengalaman lebih dari 15 tahun", tombol Pesan Aqiqah, Lihat Paket, container QR katalog terpisah di bawah CTA, tautan teks "Lihat Katalog WhatsApp Business", dan poster asli. Badge halal lama dan maskot tidak ada di hero; QR di dalam poster tetap dipertahankan.
3. Tentang Kami lengkap: judul dan nama usaha, subbagian A Tentang Kami, B tiga logo sertifikasi terpisah, C lima alasan, dan D empat kartu layanan; foto sertifikat halal asli tetap tampil.
4. Empat card Keunggulan (Berkah, Hemat, Amanah, Bahagia) dengan ikon SVG konsisten.
5. Daftar harga kambing memakai poster asli `object-fit`-alami; tidak ada tabel hasil tebakan.
6. Menu Aqiqah: 3 card Sate, Tengkleng, Gulai Kambing dalam satu baris 3 kolom di desktop; 2 poster (`garasi_kambing_grati_masak.jpg` dan `menu_garasi.jpeg`) berdampingan di bawahnya, masing-maksimal 420 px dan rata tengah; mobile 1 kolom dengan poster maksimal 460 px.
7. Enam paket: Hemat, Spesial, Heboh, Ayam Bakar, Snack Box, dan Pilihan Aqiqah Terbaik; grid 3×2 desktop, 2×3 tablet, 1 kolom mobile; tiap kartu memakai poster asli dan CTA WhatsApp dengan nama paket di pesan otomatis.
8. Lima card "Mengapa Memilih" sesuai teks revisi pemesan: Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi (ejaan asli dipertahankan).
9. Galeri 6 foto dokumentasi dengan grid masonry responsif, rasio asli dipertahankan.
10. FAQ 7 pertanyaan faktual memakai `<details>/<summary>` native: 5 lama + 2 revisi (waktu pengantaran, sumbangan daging aqiqah), dengan maskot asli di samping daftar FAQ pada desktop dan di atas daftar pada mobile.
11. CTA Konsultasi dengan pesan WhatsApp otomatis.
12. Kontak: WhatsApp, email, alamat, area pengiriman (Tangerang & Jakarta), Instagram, Facebook, Plus Code sebagai teks alamat, tombol Buka di Maps memakai short link lokasi, katalog WA, dan Google Maps embed lazy-loaded berbasis koordinat.
13. Footer dengan identitas "Dapur Berpengalaman lebih dari 15 tahun." dan copyright dinamis.
14. Promo bottom modal: jeda 2,2 detik, slide-up, close button, Escape, `sessionStorage`, CTA "Pesan Aqiqah".
15. Dua banner baru: `banner_01.jpeg` tepat setelah Hero dan `banner_02.jpeg` tepat sebelum FAQ, dirender utuh dengan `object-fit: contain`.
16. Lightbox poster Pilihan Aqiqah Terbaik: tombol gambar membuka dialog berlabel ARIA; tutup via close, backdrop, atau Escape; fokus kembali ke pemicu; promo modal tidak ikut tertutup saat Escape pertama.

## Hasil QA otomatis (browser nyata)

| Pemeriksaan | Desktop 1440×1000 | Mobile 390×844 |
| --- | --- | --- |
| Gambar dimuat (27 `<img>`, termasuk banner, logo sertifikasi, produk, lightbox, dan maskot) | 27/27, 0 broken, 0 request gagal | 27/27, 0 broken, 0 request gagal |
| Console / page error | 0 | 0 |
| Horizontal overflow | Tidak ada (scrollWidth 1440 = clientWidth) | Tidak ada; lolos di 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px |
| Anchor internal rusak | 0 | 0 |
| Tautan `wa.me` | 20, semuanya nomor `6287896102009` (16 CTA + 4 katalog `/c/`) | sama |
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
| Identitas usaha | 0 NA Group, 0 "10 tahun", 5 kemunculan "Dapur Berpengalaman lebih dari 15 tahun" (meta, hero, tentang, keunggulan, footer) | sama |
| Copywriting hero baru | Judul, 2 paragraf, dan penutup persis; `font-weight:700`, `<strong>` Garasi Aqiqah di paragraf 1, penutup `font-style:italic`, tanpa `*` / `_` literals | sama |
| Banner hadits | 1 `.hadith`, teks persis, `top=161 px` saat halaman dibuka | 1 `.hadith`, teks persis, `top=109 px` saat halaman dibuka |
| Regresi penuh revisi 05/06 | Lolos: tanpa overflow di 10 viewport; 0 anchor rusak; 20 WA valid; 7 FAQ toggle; nav mobile, promo, Maps lazy, banner, Tentang, dan QR katalog berfungsi | Ya |
| Badge halal terpisah | Tidak ada elemen `.halal-badge` maupun `logo_halal.jpg` di `#beranda` | Ya |
| QR katalog hero | `.hero-qr` ada di bawah CTA, gambar 300×300 dimuat, tautan ke `https://wa.me/c/6287896102009`, terpisah dari poster | Ya |
| QR dalam poster | Poster utama asli (922×1152, hash cocok dengan zip) tetap dirender; QR melekat pada poster tidak diubah | Ya |
| Tautan katalog teks | "Lihat Katalog WhatsApp Business" → `https://wa.me/c/6287896102009`, `target="_blank"`, `rel="noopener noreferrer"`, dapat diklik | Ya |
| Tombol CTA hero | Pesan Aqiqah + Lihat Paket sesuai URL sebelumnya | Ya |
| Ruang kosong bekas elemen | `.hero-visual` hanya 1 anak (poster), poster terpusat, tinggi visual ≈ tinggi poster | Ya |
| Lokasi maskot | Tidak ada di `#beranda`; tampil di `#faq` | Ya |
| Maskot vs FAQ | Di samping daftar FAQ (kiri) pada desktop, di atas daftar pada mobile; tidak ada overlap dengan `.faq-list` maupun accordion | Ya |
| Maskot | Rasio asli 1024×988 (terukur ~1.034), `object-fit: contain`, tidak dipotong | Ya |
| Poster | `object-fit: contain`, rasio asli terjaga | Ya |
| Konten revisi persis | Hero, 5 alasan, 2 FAQ, area pengiriman: cocok | sama |
| Tentang Kami revisi 06 | Semua teks A–D ada, format bold/italic sesuai, 3 logo terpisah `object-fit: contain`, sertifikat ada, logo halal landscape lama 0 | sama |
| Banner 01 & 02 | `#banner-01` tepat setelah `#beranda`, `#banner-02` tepat sebelum `#faq`; rasio asli 3:1 dan 2:1, tidak crop/stretch | sama |
| Gambar produk baru | `menu_garasi.jpeg` di `#menu`, `paket_aqiqah_pilihan_terbaik.jpeg` di `#paket`; gambar lama tetap ada | sama |
| QR katalog dapat dipindai | zxing-cpp decode gambar dan screenshot: `https://wa.me/c/6287896102009` | sama |
| Layout Menu revisi 07 | Desktop/901+: 3 card 1 baris + 2 poster 1 baris; tablet 601–900: 3 card 1 kolom + 2 poster berdampingan; ≤600: semua 1 kolom; jarak card–poster 28 px, poster ≤420 px desktop dan ≤460 px mobile | Ya |
| Grid Paket revisi 07 | 6 card; 3×2 desktop, 2×3 tablet, 1 kolom mobile; `.package-extra` 0; fine print tetap ada | Ya |
| Card Pilihan Aqiqah Terbaik | Tag, judul, tagline, meta, alt, atribut gambar, dan CTA sesuai diminta; `object-fit: contain`; trigger berupa `<button>` | Ya |
| Lightbox revisi 07 | `role=dialog`, `aria-modal=true`, label/deskripsi ARIA; buka/tutup mouse, touch, Enter/Space, Escape, backdrop; fokus masuk & kembali; Tab tetap di dialog | Ya |
| Lightbox vs promo | Escape pertama menutup lightbox, promo tetap tampil; Escape kedua menutup promo | Ya |
| Hardening lightbox revisi 08 | 10/10 lolos: init tanpa promo, z-index 150 > promo 100 > header 60, Tab/Shift+Tab, fokus kembali, scroll lock, ARIA, gambar `eager` siap saat dibuka, close 44×44 px, reduced motion | Ya |
| Semantic / aksesibilitas | 1 `<h1>`, 12 `<h2>` (termasuk judul lightbox tersembunyi), 0 gambar tanpa alt, 13 section | sama |

## Audit hardening lightbox revisi 08

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-08-audit.json`, dijalankan dengan Playwright + Chrome headless pada `http://127.0.0.1:8000/index.html`.

| Pemeriksaan | Hasil |
| --- | --- |
| Lightbox tetap init walaupun promo tidak muncul | Lolos |
| Prioritas overlay: lightbox 150 > promo 100 > header 60 | Lolos |
| `role=dialog`, `aria-modal=true`, `aria-labelledby`, `aria-describedby` | Lolos |
| Tombol close 44×44 px | Lolos |
| Tab dan Shift+Tab tetap di tombol close | Lolos |
| Fokus kembali ke tombol pemicu setelah ditutup | Lolos |
| Scroll background terkunci saat terbuka dan pulih saat ditutup | Lolos setelah perbaikan |
| Gambar poster siap tampil saat dibuka | Lolos setelah perbaikan |
| `prefers-reduced-motion: reduce` dihormati | Lolos |
| Escape pertama menutup lightbox, Escape kedua menutup promo | Lolos |

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
11. **Banner hadits berada di bawah grid hero (revisi 05).** Banner sudah ada tetapi baru terlihat setelah scroll. Blok yang sama dipindahkan ke atas `.hero-grid` tanpa duplikasi; uji ulang: satu `.hadith`, teks persis, dan langsung terlihat di desktop/mobile.
12. **Tentang Kami mobile menampilkan sertifikat sebelum teks (revisi 06).** Urutan visual mobile masih didominasi gambar sehingga konten revisi tidak langsung terlihat. Ditambahkan `.tentang-section .about-visual { order: 0; }`; copy kini tampil lebih dulu, lalu sertifikat dan tiga logo bertumpuk. Screenshot `mobile-about.png` diambil ulang dan OCR mengonfirmasi teks Tentang Kami.
13. **Horizontal overflow 65 px di 901 px saat Menu 3 kolom (revisi 07).** Card Menu terlalu sempit untuk padding/icon bawah breakpoint 1100 px. Ditambahkan gaya ringkas hanya untuk 901–1100 px (padding 18 px, gap 12 px, ikon 40 px); uji ulang `scrollWidth = clientWidth = 901`.
14. **Skrip QA revisi 07 membaca atribut setelah diubah.** Pemeriksaan awal mengubah semua `loading` menjadi `eager` sebelum membaca card baru, sehingga dilaporkan `eager`. Skrip diperbaiki dengan membaca atribut lebih dulu; hasil benar `loading="lazy"`.
15. **Scroll background tidak terkunci saat lightbox terbuka (revisi 08).** Audit Playwright menunjukkan `scrollY` berubah dari 8352 ke 8952 setelah wheel saat dialog terbuka. `js/main.js` sekarang menyimpan `overflow` awal, mengatur `document.body.style.overflow = 'hidden'` saat buka, dan mengembalikannya saat tutup. Uji ulang: `scrollY` tetap 8352, `bodyInline = hidden` saat terbuka, dan kembali kosong setelah ditutup.
16. **Gambar lightbox memakai `loading="lazy"` (revisi 08).** Pada satu audit, `complete = false` dan `naturalWidth = 0` tepat setelah dialog dibuka. Atribut di `index.html` diubah menjadi `loading="eager"` hanya pada gambar lightbox. Uji ulang: `complete = true`, `naturalWidth = 768`, dan `loading = eager` sebelum maupun sesudah dialog dibuka.

Tidak ada bug fungsional yang tersisa pada website.

## Fitur yang belum selesai / tidak tersedia

- Teks asli WordPress untuk Tentang Kami tidak dapat dipulihkan karena folder `references/` tidak ada. Teks Tentang Kami lengkap sudah disediakan pemesan pada revisi 06.
- `docs/VISUAL-AUDIT.md` tidak tersedia di workspace.
- Screenshot tidak dapat dinilai secara visual oleh model yang menjalankan QA (tanpa dukungan input gambar). Validasi dilakukan secara programatis: file ada, ukuran > 0, OCR Windows mendeteksi teks kunci, geometri elemen diverifikasi melalui Playwright, dan QR di-decode dengan zxing-cpp.
- `favicon-browser.png` adalah render aset favicon asli yang dimuat langsung oleh browser, bukan screenshot tab/chrome browser (Playwright headless tidak menangkap UI browser). Identifikasi logo landscape vs icon juga dibantu OCR Windows + analisis alpha/Pillow, bukan penglihatan langsung.

## Informasi yang masih membutuhkan konfirmasi `[KONFIRMASI]`

1. Screenshot WordPress tidak tersedia — teks Tentang Kami sekarang mengikuti teks revisi 06 dari pemesan; teks lama WordPress tidak dapat dipulihkan.
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
| `screenshots/10-final-presentation/` | `desktop-fullpage.png` | 1440×10564 |
| `screenshots/10-final-presentation/` | `desktop-hero.png` | 1440×1000 |
| `screenshots/10-final-presentation/` | `desktop-product.png` | 1440×1000 |
| `screenshots/10-final-presentation/` | `desktop-contact.png` | 1440×949 |
| `screenshots/10-final-presentation/` | `mobile-fullpage.png` | 390×19054 |
| `screenshots/10-final-presentation/` | `mobile-hero.png` | 390×844 |
| `screenshots/10-final-presentation/` | `mobile-product.png` | 390×844 |
| `screenshots/10-final-presentation/` | `mobile-contact.png` | 390×1444 |
| `screenshots/12-profile-copy-revision/` | `desktop-navbar.png` | 1440×1000 |
| `screenshots/12-profile-copy-revision/` | `desktop-hero.png` | 1440×1000 |
| `screenshots/12-profile-copy-revision/` | `desktop-hadith.png` | crop `.hadith` 1184×175 |
| `screenshots/12-profile-copy-revision/` | `mobile-navbar.png` | 390×844 |
| `screenshots/12-profile-copy-revision/` | `mobile-hero.png` | 390×844 |
| `screenshots/12-profile-copy-revision/` | `mobile-hadith.png` | crop `.hadith` 354×174 |
| `screenshots/13-client-revisions/` | `desktop-about.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-certification.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-banner-01.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-banner-02.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-products.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-hero-qr.png` | 1440×1000 |
| `screenshots/13-client-revisions/` | `desktop-fullpage.png` | 1440×15242 |
| `screenshots/13-client-revisions/` | `mobile-about.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-certification.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-banner-01.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-banner-02.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-products.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-hero-qr.png` | 390×844 |
| `screenshots/13-client-revisions/` | `mobile-fullpage.png` | 390×24744 |
| `screenshots/14-menu-package-revision/` | `desktop-menu.png` | 1440×1096 |
| `screenshots/14-menu-package-revision/` | `desktop-package.png` | 1440×2123 |
| `screenshots/14-menu-package-revision/` | `desktop-package-lightbox.png` | 1440×1000 |
| `screenshots/14-menu-package-revision/` | `tablet-menu.png` | 768×1164 |
| `screenshots/14-menu-package-revision/` | `tablet-package.png` | 768×2700 |
| `screenshots/14-menu-package-revision/` | `mobile-menu.png` | 390×1729 |
| `screenshots/14-menu-package-revision/` | `mobile-package.png` | 390×4916 |
| `screenshots/14-menu-package-revision/` | `mobile-package-lightbox.png` | 390×844 |
| `screenshots/15-lightbox-hardening/` | `01-desktop-top.png` | 1440×1000 |
| `screenshots/15-lightbox-hardening/` | `02-desktop-package.png` | 1440×2123 |
| `screenshots/15-lightbox-hardening/` | `03-desktop-lightbox.png` | 1440×1000 |
| `screenshots/15-lightbox-hardening/` | `04-tablet-package.png` | 768×2700 |
| `screenshots/15-lightbox-hardening/` | `05-mobile-top.png` | 390×844 |
| `screenshots/15-lightbox-hardening/` | `06-mobile-package.png` | 390×4916 |
| `screenshots/15-lightbox-hardening/` | `07-mobile-lightbox.png` | 390×844 |
| `screenshots/15-lightbox-hardening/` | `08-mobile-promo.png` | 390×844 |

Semua file diverifikasi ada dengan ukuran > 0 dan dihasilkan dari browser sungguhan via Playwright + Chrome headless. Folder `06` adalah bukti historis sebelum maskot dipindahkan; folder `07` setelah pemindahan; folder `08` setelah badge halal dan QR terpisah di hero dihapus; folder `09` setelah Maps, navbar, dan favicon direvisi; folder `10` adalah presentation set dari GitHub Pages sebelum revisi copy ini; folder `12` adalah kondisi setelah revisi identitas usaha, copy hero, dan posisi banner hadits; folder `13` adalah kondisi setelah revisi 06 Tentang Kami, banner, produk, dan QR katalog; folder `14` adalah kondisi setelah revisi 07 layout Menu, card Paket ke-6, dan lightbox; folder `15` adalah kondisi setelah revisi 08 hardening lightbox. Total 80 screenshot. QA revisi ini dijalankan di `http://127.0.0.1:8000/index.html` karena perubahan belum dipublikasikan ke GitHub Pages.
