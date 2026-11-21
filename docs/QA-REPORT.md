# QA Report — Garasi Aqiqah & Catering

Tanggal QA: 20 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome 157 headless (executable lokal, tanpa unduhan browser).

## Ringkasan

| Item | Status |
| --- | --- |
| Struktur HTML & 14 section + promo modal | Selesai |
| CSS responsif desktop / tablet / mobile | Selesai |
| JavaScript: nav mobile, promo modal, tahun footer, lightbox global, carousel Coverflow, card layanan detail, card Catering → Menu Catering | Selesai, vanilla JS tanpa library |
| Integrasi WhatsApp & katalog | Selesai (22 tautan: 17 CTA + 4 katalog + 1 CTA lightbox) |
| SEO metadata & Open Graph | Selesai |
| Aksesibilitas dasar | Selesai |
| Screenshot tahapan (158 file) | Selesai |
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
| Revisi 07: card Paket ke-6 & `.package-extra` dihapus | Selesai; grid 3×2 / 2×3 / 1 kolom, digantikan Coverflow pada revisi 09 |
| Revisi 07: lightbox poster Pilihan Terbaik | Selesai, mouse/touch/keyboard & ARIA |
| Revisi 08: audit hardening lightbox | Selesai, hanya scroll lock dan eager image yang diubah |
| Revisi 08: 10 pemeriksaan hardening | Lolos: init, z-index, Tab/Shift+Tab, Escape, fokus, scroll lock, ARIA, gambar, 44 px, reduced motion |
| Revisi 09: lightbox global | Selesai: 23 trigger gambar konten, info paket/galeri, WA dinamis |
| Revisi 09: carousel Coverflow | Selesai: 6+6 item, nav desktop, swipe mobile/tablet, keyboard Arrow |
| Revisi 10: carousel terpusat & seragam | Selesai: aktif awal indeks tengah dinamis, slide 360/320/64vw, item samping terlihat, nav tetap terpusat |
| Revisi 10: kartu layanan → detail | Selesai: 4/4 kartu membuka paket/galeri tepat di lightbox dengan fokus dan WA kontekstual |
| Revisi 11: price list | Selesai: 4 poster asli dalam satu grid, 2 kolom desktop/tablet dan 1 kolom mobile, utuh dan bisa diperbesar; total pemicu lightbox 26 |
| Revisi 11: gambar Paket Hemat | Selesai: card dan lightbox memakai `garasi_paket_hemat.jpg`, teks/CTA/info lain tidak berubah |
| Revisi 12: section Menu Catering | Selesai: 3 poster asli dalam Coverflow terpusat, lightbox berkicker "Menu Catering", dan CTA WA kontekstual |
| Revisi 12: kartu Catering | Selesai: kartu ke-4 scroll ke `#menu-catering`; 3 kartu lain tetap membuka lightbox detail |
| Revisi 12.1: gambar Menu Catering | Selesai: 6 asli `.jpeg` dari `assets/img/menu_catering/` berurutan, sampul sebagai posisi awal, lightbox/regresi lolos |
| Revisi 12.1: sosial media footer | Selesai: Instagram, Facebook, YouTube, dan TikTok bericon seragam; YouTube/TikTok membuka URL yang ditentukan dengan aman |
| Revisi 13: hero mobile | Selesai: poster mengikuti tinggi gambar di ≤900 px; blank 1 px, visual ≈ poster, banner tetap di bawah hero |
| Revisi 13: card Paket | Selesai: 6/6 poster tidak overflow/overlap, CTA di dalam card, ukuran slide seragam di 320–1440 px |
| Revisi 13 (koreksi): sosial Kontak Kami | Selesai: YouTube/TikTok dipindah dari FAQ ke Kontak, URL sama dengan footer, popup benar, FAQ bersih, target sentuh 44 px |
| Revisi 14: foto Galeri dokumentasi | Selesai: 9/9 JPEG valid dari `assets/img/dokumentasi/` menggantikan 6 foto lama; urutan natural, tanpa caption baru, carousel/lightbox/regresi lolos |
| Revisi 15: dua kategori Galeri | Selesai: 17/17 JPEG penyembelihan valid ditambahkan; 2 judul kategori, 26 thumbnail 4:3 `cover`, lightbox `contain`, QA 231/231 PASS |
| Revisi 16: kategori Video YouTube | Selesai: 6/6 video sesuai Markdown, 6 thumbnail PNG lokal, card landscape, toggle deskripsi, carousel existing, QA 661/661 PASS |
| Informasi yang perlu konfirmasi pemilik bisnis | 6 item (lihat bawah) |

## Fitur yang selesai

1. Header sticky dengan logo landscape transparan tanpa teks brand terpisah, 8 tautan navigasi, CTA Pesan Sekarang, dan hamburger mobile 44×44 px (`aria-expanded`).
2. Hero dengan banner hadits tunggal di atas, eyebrow "Welcome To", `<h1>` bold "Wujudkan Ibadah Aqiqah Penuh Berkah & Ketenangan", tagline "Jadikan Moment Anda Lebih Berharga", slogan Berkah/Hemat/Amanah/Bahagia, dua paragraf deskripsi revisi dengan "Garasi Aqiqah" bold, penutup italic "Berkah dalam ibadah, hangat dalam kebersamaan.", catatan "Dapur Berpengalaman lebih dari 15 tahun", tombol Pesan Aqiqah, Lihat Paket, container QR katalog terpisah di bawah CTA, tautan teks "Lihat Katalog WhatsApp Business", dan poster asli. Badge halal lama dan maskot tidak ada di hero; QR di dalam poster tetap dipertahankan.
3. Tentang Kami lengkap: judul dan nama usaha, subbagian A Tentang Kami, B tiga logo sertifikasi terpisah, C lima alasan, dan D empat kartu layanan; foto sertifikat halal asli tetap tampil.
4. Empat card Keunggulan (Berkah, Hemat, Amanah, Bahagia) dengan ikon SVG konsisten.
5. Daftar harga kambing memakai poster asli `object-fit`-alami; tidak ada tabel hasil tebakan.
6. Menu Aqiqah: 3 card Sate, Tengkleng, Gulai Kambing dalam satu baris 3 kolom di desktop; 2 poster (`garasi_kambing_grati_masak.jpg` dan `menu_garasi.jpeg`) berdampingan di bawahnya, masing-maksimal 420 px dan rata tengah; mobile 1 kolom dengan poster maksimal 460 px.
7. Enam paket: Hemat, Spesial, Heboh, Ayam Bakar, Snack Box, dan Pilihan Aqiqah Terbaik; sejak revisi 09 tampil dalam carousel Coverflow dengan urutan dipertahankan; tiap kartu memakai poster asli dan CTA WhatsApp dengan nama paket di pesan otomatis.
8. Lima card "Mengapa Memilih" sesuai teks revisi pemesan: Free Ongkir, Banyak Bonus Nya, Harga Kompetitif, Tepat Waktu, Garansi (ejaan asli dipertahankan).
9. Galeri 6 foto dokumentasi dengan urutan asli; sejak revisi 09 memakai carousel Coverflow, caption asli dipakai pada lightbox, dan rasio gambar dipertahankan.
10. FAQ 7 pertanyaan faktual memakai `<details>/<summary>` native: 5 lama + 2 revisi (waktu pengantaran, sumbangan daging aqiqah), dengan maskot asli di samping daftar FAQ pada desktop dan di atas daftar pada mobile.
11. CTA Konsultasi dengan pesan WhatsApp otomatis.
12. Kontak: WhatsApp, email, alamat, area pengiriman (Tangerang & Jakarta), Instagram, Facebook, Plus Code sebagai teks alamat, tombol Buka di Maps memakai short link lokasi, katalog WA, dan Google Maps embed lazy-loaded berbasis koordinat.
13. Footer dengan identitas "Dapur Berpengalaman lebih dari 15 tahun." dan copyright dinamis.
14. Promo bottom modal: jeda 2,2 detik, slide-up, close button, Escape, `sessionStorage`, CTA "Pesan Aqiqah".
15. Dua banner baru: `banner_01.jpeg` tepat setelah Hero dan `banner_02.jpeg` tepat sebelum FAQ, dirender utuh dengan `object-fit: contain`.
16. Lightbox global: 23 gambar konten relevan membuka dialog berlabel ARIA; tutup via close, backdrop, atau Escape; fokus kembali ke pemicu; promo modal tidak ikut tertutup saat Escape pertama.
17. Lightbox paket/galeri revisi 09: dua kolom di desktop dan tumpuk vertikal di mobile; info paket dan caption galeri diambil dari HTML existing; CTA "Tanyakan terkait paket ini" / "Tanyakan terkait foto ini" mengarah ke `6287896102009` dengan pesan kontekstual. Carousel Coverflow mendukung nav desktop, swipe, dan keyboard ArrowLeft/ArrowRight.
18. Revisi 10: carousel paket/galeri dibuka terpusat pada item indeks tengah dengan ukuran slide seragam dan lebih ringkas; item samping tetap terlihat. Keempat kartu Layanan & Pilihan Paket Kami dapat diklik/tombol keyboard dan langsung membuka lightbox detail paket/galeri yang sesuai.
19. Revisi 11: section `#harga` menampilkan poster price list kambing, Paket Spesial, Paket Hemat, dan Paket Heboh dalam satu layout grid dengan caption; semua gambar utuh, proporsional, dan dapat diperbesar sehingga total pemicu lightbox menjadi 26. Gambar card Paket Hemat diganti dengan aset `garasi_paket_hemat.jpg` tanpa mengubah informasi lain.
20. Revisi 12: section `#menu-catering` tepat setelah `#menu` menampilkan poster Menu Catering dalam Coverflow; lightbox menampilkan kicker "Menu Catering" dan CTA **Tanya Terkait Menu Catering**. Kartu "Catering & Nasi Box Acara" kini melakukan smooth scroll ke section tersebut; navbar dan tiga kartu layanan lain tidak berubah.
21. Revisi 12.1: gambar `#menu-catering` diganti seluruhnya dengan 6 asli dari `assets/img/menu_catering/` (`sampul_atau_awal.jpeg`, `1.jpeg`–`5.jpeg`) secara berurutan; sampul menjadi posisi awal carousel. Footer kini memuat tautan bericon Instagram, Facebook, YouTube, dan TikTok dengan gaya dan konfigurasi `target="_blank" rel="noopener noreferrer"` yang seragam.
22. Revisi 13: hero mobile memakai tinggi poster otomatis sehingga tidak ada ruang kosong besar; seluruh card Paket memakai baris grid yang membatasi poster agar tidak menimpa teks/CTA. Setelah koreksi, FAQ tidak memuat ikon sosial; YouTube dan TikTok berada di `.social-row` Kontak Kami dengan URL footer yang sama, gaya 44 px, dan pembukaan tab baru aman.
23. Revisi 14: `#galeri` menampilkan 9 foto asli dari folder `assets/img/dokumentasi/` dengan urutan nama natural, tanpa caption baru. ID `detail-souvenir` dan `detail-olahan-kambing` dipertahankan pada dua figure pertama agar kartu layanan tetap membuka lightbox; carousel Coverflow, swipe, nav desktop, lightbox, Tutup, dan CTA WhatsApp tidak berubah.
24. Revisi 15: `#galeri` tetap satu section dengan dua Coverflow dan judul kategori. Kategori pelanggan memuat 9 foto lama yang tidak diubah; kategori penyembelihan memuat 17 JPEG valid dari `assets/img/proses_sembelih_kambing/` secara natural. Semua 26 thumbnail memakai rasio 4:3 dan `object-fit: cover`; lightbox menampilkan file asli utuh dengan `object-fit: contain` untuk portrait maupun landscape.
25. Revisi 16: `#galeri` menambahkan kategori ketiga "Dokumentasi Video YouTube" setelah dua kategori foto. Keenam entri `docs/markdown-file/REVISION-YOUTUBE.md` dipakai apa adanya (judul, deskripsi, URL, dan `thumbnail_01`–`thumbnail_06`) pada card landscape dengan thumbnail kiri, teks kanan, tombol aman ke YouTube/Shorts, dan deskripsi ringkas via CSS line-clamp yang bisa dibuka/ditutup tanpa mengubah isi teks. Tidak ada iframe dan tidak ada perubahan pada dua kategori foto.

## Hasil QA otomatis (browser nyata)

| Pemeriksaan | Desktop 1440×1000 | Mobile 390×844 |
| --- | --- | --- |
| Gambar di DOM (36 `<img>`, termasuk banner, logo sertifikasi, produk, lightbox, maskot, dan 6 poster Menu Catering) | 36/36 hadir, 0 request gagal | 36/36 hadir, 0 request gagal |
| Console / page error | 0 | 0 |
| Horizontal overflow | Tidak ada (scrollWidth 1440 = clientWidth) | Tidak ada; lolos di 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px |
| Anchor internal rusak | 0 | 0 |
| Tautan `wa.me` | 22, semuanya nomor `6287896102009` (17 CTA + 4 katalog `/c/` + 1 CTA lightbox) | sama |
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
| Grid Paket revisi 07 | 6 card; `.package-extra` 0; fine print tetap ada; grid 3×2/2×3/1 kolom digantikan Coverflow pada revisi 09 | Ya |
| Card Pilihan Aqiqah Terbaik | Tag, judul, tagline, meta, alt, atribut gambar, dan CTA sesuai diminta; `object-fit: contain`; trigger berupa `<button>` | Ya |
| Lightbox revisi 07 | `role=dialog`, `aria-modal=true`, label/deskripsi ARIA; buka/tutup mouse, touch, Enter/Space, Escape, backdrop; fokus masuk & kembali; Tab tetap di dialog | Ya |
| Lightbox vs promo | Escape pertama menutup lightbox, promo tetap tampil; Escape kedua menutup promo | Ya |
| Hardening lightbox revisi 08 | 10/10 lolos: init tanpa promo, z-index 150 > promo 100 > header 60, Tab/Shift+Tab, fokus kembali, scroll lock, ARIA, gambar `eager` siap saat dibuka, close 44×44 px, reduced motion | Ya |
| Lightbox global revisi 09 | 23 trigger, 0 gambar konten tanpa wrapper; 6 paket + 6 galeri memunculkan info/CTA yang benar; close button, backdrop, Escape, fokus, scroll lock, focus trap lolos | Ya |
| Carousel Coverflow revisi 09 | 2 carousel × 6 item; aktif terpusat (offset 0 px di 10 viewport); tetangga diskalakan ~0.93 dengan opasitas ~0.78; nav desktop, swipe mobile, ArrowLeft/ArrowRight lolos | Ya |
| Lightbox dua kolom revisi 09 | Desktop `grid-template-columns` dua kolom; mobile `flex-direction: column`, info di bawah gambar, CTA masih dalam viewport | Ya |
| Posisi awal carousel revisi 10 | Indeks aktif awal 2 dari 6 item di kedua carousel; offset pusat 0 px di 10 viewport; tidak menempel kiri | Ya |
| Ukuran carousel revisi 10 | Lebar slide seragam: 360 px desktop, ≤320 px tablet, 64vw mobile; tinggi seragam per carousel (729 px paket, 540 px galeri di 1440 px); item samping terlihat 22–335 px sesuai viewport | Ya |
| Nav carousel revisi 10 | Tombol next/prev dan ArrowLeft/ArrowRight tetap terpusat sampai ujung; disabled state benar di awal/akhir; swipe mobile menggeser aktif ke indeks 3 | Ya |
| Kartu layanan revisi 10 | 4/4 kartu membuka target tepat (Paket Pilihan Terbaik, Olahan kambing, Souvenir, Paket Ayam Bakar); gambar siap, WA kontekstual, fokus kembali ke kartu, Enter/Space berfungsi | Ya |
| Price list revisi 11 | 4/4 poster termuat dengan rasio 4:5 dan `object-fit: contain`; urutan sesuai: kambing, best seller/Spesial, Hemat, Heboh; 4 caption; 4 tombol lightbox; total 26 `button.image-zoom` di halaman | Ya |
| Grid price list revisi 11 | 2 kolom di 768–1440 px, 1 kolom di 320–640 px; gap 20 px desktop/tablet dan 16 px mobile; tanpa overflow | Ya |
| Gambar Paket Hemat revisi 11 | `garasi_paket_hemat.jpg` tampil di card pertama carousel dan di lightbox; judul, tagline, meta, CTA, dan pesan WA tidak berubah | Ya |
| Regresi revisi 11 | Carousel indeks 2/offset 0 di 10 viewport, 4 kartu layanan, 21 tautan WA, 7 FAQ, Maps lazy, promo/Escape, 0 console error, 0 broken image | Ya |
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

## Revisi 09: lightbox global & carousel Coverflow

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-09-qa.json`, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`.

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 27/27 gambar siap; 0 broken; 0 console error; 0 request gagal; 0 response ≥400 |
| Trigger lightbox | 23 gambar konten dibungkus `.image-zoom`; 0 gambar konten di luar anchor/lightbox tanpa wrapper; QR katalog tetap menjadi tautan |
| Lightbox generik | `object-fit: contain`, gambar dalam viewport, fokus masuk ke close, fokus kembali ke pemicu, `body.overflow = hidden` saat terbuka dan pulih saat ditutup, tutup via tombol/backdrop/Escape |
| Lightbox paket | 6/6 card menampilkan kicker "Paket", judul/null dan CTA sesuai kartu; label "Tanyakan terkait paket ini"; `wa.me` memuat nama paket |
| Lightbox galeri | 6/6 foto menampilkan kicker "Galeri", caption asli, label "Tanyakan terkait foto ini", dan pesan WA dengan caption tersebut |
| Focus trap | Tab dari close → CTA WA → close; Shift+Tab tetap berada di dialog |
| Coverflow desktop | Tombol next menggeser aktif ke indeks 1, 2, 3; offset pusat 0 px; ArrowLeft kembali ke indeks 2; tetangga diskalakan ~0,93 dengan opasitas ~0,78 |
| Coverflow tablet/mobile | Nav disembunyikan; scroll/swipe mengubah item aktif; offset pusat 0 px; tidak ada overflow halaman |
| Tata letak lightbox | Desktop dua kolom dengan gambar dominan; mobile `column`, info di bawah gambar, CTA tidak terpotong |
| Promo vs lightbox | Muncul setelah jeda; Escape pertama menutup lightbox, promo tetap tampil; Escape kedua menutup promo |
| Regresi | Nav mobile, FAQ, dan Google Maps lazy-loaded tetap lolos; 0 anchor internal rusak; 21 tautan WA valid |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

Tidak ada bug fungsional baru pada website. Satu masalah pada skrip QA ditemukan dan diperbaiki: simulasi sentuh awal dikirim pada koordinat carousel yang belum terlihat, sehingga swipe dilaporkan gagal; setelah viewport carousel discroll ke dalam layar, swipe berhasil menggeser item aktif ke indeks 1. Ini bukan bug website.

## Revisi 10: carousel terpusat & kartu layanan detail

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-10-qa.json`, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html` dengan device scale factor 1 (zoom browser 100%).

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 27/27 gambar siap; 0 broken; 0 console error; 0 request gagal; 0 response ≥400 |
| Posisi awal | Kedua carousel langsung aktif di indeks 2 dari 6 item dengan offset pusat 0 px; tidak menempel kiri |
| Ukuran slide | Satu lebar per carousel per viewport (360 px desktop, ≤320 px tablet, 64vw mobile); satu tinggi per carousel; item samping terlihat 22–335 px tergantung viewport |
| Navigasi | Next/prev dan ArrowLeft/ArrowRight berhenti tepat di ujung dengan offset 0 px; `disabled` benar di indeks 0 dan 5; swipe mobile mengubah aktif ke indeks 3 dengan offset 0 px |
| Kartu layanan → paket | "1. Paket Aqiqah Nasi Box" → `Pilihan Aqiqah Terbaik` di `#paket`; kicker Paket; CTA dari kartu paket tersebut |
| Kartu layanan → galeri | "2. Spesialis Kambing Masak" → `Olahan kambing`; "3. Souvenir Super Lengkap" → `Hadiah souvenir & sertifikat aqiqah`; "4. Catering & Nasi Box Acara" → `Paket Ayam Bakar` (menu Ayam Bakar disebut pada kartu) |
| Interaksi kartu | 4/4 mouse/tap, Enter, dan Space membuka lightbox; gambar `complete` dengan `naturalWidth > 0`; fokus masuk close, kembali ke kartu; `body.overflow` pulih |
| WA kontekstual | Package memakai href CTA kartu; galeri memakai pesan caption; semuanya nomor `6287896102009` |
| Regresi Revisi 09 | 6 paket + 6 galeri, 23 trigger gambar, lightbox dua kolom, promo/Escape, nav mobile, FAQ, Maps lazy, anchor, dan 21 tautan WA tetap lolos |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

Catatan pemetaan: tidak ada foto katering/nasi box khusus di galeri, sehingga kartu ke-4 memakai detail `Paket Ayam Bakar` yang memang disebut pada teks kartu. Hal ini ditandai `[KONFIRMASI]` di PRD dan tidak dijadikan klaim baru.

## Revisi 11: price list & gambar Paket Hemat

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-11-qa.json`, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html` dengan device scale factor 1 (zoom browser 100%). Tidak ada build step pada proyek statis ini; pemeriksaan kode memakai `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Ekstensi aset | Keempat file baru/diverifikasi sebagai `.jpg`: `garasi_best_seller_list.jpg`, `garasi_paket_aqiqah_hemat.jpg`, `garasi_paket_heboh_pricelist.jpg`, `garasi_paket_hemat.jpg`; tidak ada file yang diganti nama |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 0 console error; 0 page error; 0 request gagal; 0 response ≥400; 0 anchor rusak |
| Price list | 4 poster termuat (`naturalWidth > 0`), urutan sesuai, rasio tampil 0,800 (4:5), `object-fit: contain`, dan 4 figcaption; grid 2 kolom di 768–1440 px serta 1 kolom di 320–640 px |
| Lightbox price list | 4/4 poster membuka lightbox dengan `src` sesuai file asli, judul dari alt, fokus kembali ke tombol, dan Escape menutup dialog; total pemicu lightbox naik dari 23 menjadi 26 (net +3 karena 1 poster lama diganti 4 poster) |
| Paket Hemat | Card pertama memuat `garasi_paket_hemat.jpg` di semua viewport; lightbox card menampilkan file sama, kicker Paket, tagline/meta, dan CTA `6287896102009`; gambar paket lain tidak diubah |
| Regresi | Kedua carousel tetap aktif di indeks 2 dengan offset pusat 0 px; 4 kartu layanan tetap membuka detail; 21 tautan WA, 7 FAQ, dan Maps `loading="lazy"` tetap benar; promo muncul setelah jeda, Escape pertama menutup lightbox, Escape kedua menutup promo |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

## Revisi 12: Menu Catering

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-12-qa.json`, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html` dengan device scale factor 1 (zoom browser 100%). Tidak ada build step pada proyek statis ini; pemeriksaan kode memakai `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset | 3 poster asli termuat (`naturalWidth > 0`) dengan urutan `banner_02.jpeg`, `garasi_paket_ayambakar.jpg`, `garasi_paket_snackbox.jpg`; `object-fit: contain` dan setiap gambar dibungkus tombol lightbox |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 0 console error; 0 page error; 0 request gagal; 0 response ≥400; 0 anchor rusak |
| Urutan & navbar | `#menu-catering` adalah elemen setelah `#menu`; navbar tetap 8 tautan dan tidak memuat Menu Catering |
| Coverflow Menu Catering | 3 item, item aktif awal indeks 1, offset pusat 0 px, `offsetWidth` seragam per viewport, tombol prev/next aktif, swipe mobile menggeser active item ke indeks 2 |
| Lightbox Menu Catering | 3/3 poster membuka file yang tepat, kicker "Menu Catering", judul dari caption, CTA "Tanya Terkait Menu Catering" dengan href sama seperti CTA section, fokus kembali ke tombol, Escape menutup dialog |
| Kartu Catering | Klik kartu ke-4 menghasilkan posisi `#menu-catering` di `top = 0` dan tidak membuka lightbox; uji keyboard terpisah: Enter `top = 0`, Space `top = 2` px; 3 kartu layanan lain tetap membuka detail paket/galeri |
| WA & pesan | 22 tautan `wa.me/6287896102009`; pesan CTA Menu Catering terbaca "Halo Garasi Aqiqah, saya ingin bertanya tentang Menu Catering dan Nasi Box." |
| Regresi | Paket/Galeri tetap 6 item dengan indeks awal 2; price list tetap 4 poster; 7 FAQ; Maps `loading="lazy"`; promo muncul setelah jeda, Escape pertama menutup lightbox, Escape kedua menutup promo; total trigger gambar konten naik dari 26 menjadi 29 |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

## Revisi 12.1: koreksi gambar Menu Catering & sosial media footer

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-12-1-qa.json`, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html` dengan device scale factor 1 (zoom browser 100%). Ekstensi dan dimensi aset dicek dengan Pillow sebelum QA browser. Tidak ada build step pada proyek statis ini; pemeriksaan kode memakai `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Ekstensi asli | Keenam file yang dipakai terdeteksi sebagai JPEG asli, 1080×1350, ukuran > 0: `sampul_atau_awal.jpeg`, `1.jpeg`, `2.jpeg`, `3.jpeg`, `4.jpeg`, `5.jpeg`; byte identik dengan enam file asli `WhatsApp Image 2026-11-20 ...` sesuai hash blob Git, dan file asli tetap tersedia di folder |
| Urutan gambar | 6/6 `src` dan caption sesuai urutan yang diminta; keenamnya termuat (`naturalWidth > 0`), `object-fit: contain`, dan dibungkus tombol lightbox |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 0 console error; 0 page error; 0 request gagal (request gagal eksternal Google Maps iframe dikecualikan karena lazy-loaded dan tidak stabil di lingkungan lokal); 0 response ≥400; 0 anchor rusak |
| Posisi awal carousel | Menu Catering memuat 6 item dengan item aktif awal indeks 0 (`sampul_atau_awal.jpeg`), offset pusat 0 px, tombol prev dinonaktifkan dan next aktif |
| Navigasi & swipe | Desktop ≥901 px: next menggeser aktif ke indeks 1, prev kembali ke indeks 0; nav tersembunyi di ≤900 px; gesture sentuh mobile menggeser dari indeks 0 ke indeks 2 |
| Lightbox | 6/6 poster membuka file tepat, kicker "Menu Catering", judul dari caption baru, CTA "Tanya Terkait Menu Catering" dengan href sama seperti section, fokus kembali ke tombol, Escape menutup dialog |
| CTA WhatsApp | Teks, href, dan pesan otomatis tidak berubah; total 22 tautan `wa.me/6287896102009` |
| Footer | 4 tautan berikon seragam dengan `min-height: 44px`, `gap: 8px`, warna/font sama; IG/FB memakai URL lama, YouTube `https://www.youtube.com/@garasiaqiqah`, TikTok `https://www.tiktok.com/@garasiaqiqah`; semuanya `target="_blank" rel="noopener noreferrer"` dan punya aria-label tab baru |
| Uji buka tautan | Popup YouTube dan TikTok terbuka dengan URL akhir yang persis sesuai (uji Playwright `expect_popup`) |
| Regresi | Navbar tetap 8 tautan; 3 kartu layanan tetap lightbox dan 1 kartu Catering tetap scroll; Paket/Galeri tetap indeks 2; price list 4 poster; 7 FAQ; Maps lazy; promo/Escape lolos; trigger gambar konten naik dari 29 menjadi 32 |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

## Revisi 13 & koreksi: kerapian hero mobile, card Paket, dan sosial Kontak Kami

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\mobile-ui-ux-qa.json` untuk QA awal hero/Paket dan `C:\Users\DELL\AppData\Local\Temp\opencode\contact-social-qa.json` untuk QA koreksi lokasi ikon, dijalankan dengan Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html` dengan device scale factor 1 (zoom browser 100%). Tidak ada build step pada proyek statis ini; pemeriksaan kode memakai `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Total check otomatis | 219/219 PASS pada QA awal + 174/174 PASS pada QA koreksi, keduanya di 8 viewport: 320, 360, 390, 600, 768, 901, 1024, dan 1440 px |
| Hero mobile | Di ≤900 px, jarak bawah poster ke gambar ≤2 px (321→1 px saat diagnosis awal); tinggi `.hero-visual` sama dengan poster; banner tetap berada di bawah visual hero |
| Card Paket | 6/6 poster termuat, `imgOverflow` dan `imgOverlap` ≤1 px, CTA berada di dalam card dengan jarak dari meta ≥0 px, `min-height` tombol 46 px, dan ukuran slide seragam |
| CTA/lightbox Paket | Klik CTA membuka `https://wa.me/6287896102009...`; poster zoom membuka `#package-lightbox` dan Escape menutupnya |
| Sosial Kontak Kami | FAQ tidak memiliki `.faq-social` maupun tautan YouTube/TikTok; Kontak memiliki 5 `.social-link` (IG, FB, YouTube, TikTok, Katalog WA). YouTube/TikTok memakai URL persis sama dengan footer (`https://www.youtube.com/@garasiaqiqah`, `https://www.tiktok.com/@garasiaqiqah`), `target="_blank" rel="noopener noreferrer"`, tinggi ≥44 px, popup URL benar di 390 dan 1440 px, 7 `<details>` FAQ tidak berubah |
| Carousel | Paket mulai di indeks 2 dan terpusat; nav desktop next/prev bekerja; swipe sentuh mobile/tablet menggeser aktif dan tetap terpusat setelah smooth scroll |
| Regresi | 0 horizontal overflow, 0 broken image, 0 console error, 0 page error, 0 request gagal (script eksternal Google Maps iframe dikecualikan), 22 tautan WA, 8 tautan navbar, 4 poster price list, Maps lazy, 6 item galeri, promo muncul setelah jeda dan tutup via Escape |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos (hanya peringatan LF→CRLF Git) |

## Revisi 14: foto Galeri dari folder dokumentasi

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\inspect-dokumentasi.py` (validasi Pillow) dan `C:\Users\DELL\AppData\Local\Temp\opencode\galeri-dokumentasi-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1). Tidak ada build step; kode statis diperiksa dengan `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset | 9 file ditemukan di `assets/img/dokumentasi/`, 9/9 JPEG dapat dibaca Pillow, 0 file non-gambar, 0 gambar rusak |
| Urutan & kelengkapan | 9/9 dipakai di `#galeri` dengan urutan natural: `12.49.46`, `12.49.47`, `12.49.47 (1)`, `12.49.47 (2)`, `12.49.48`, `12.49.49`, `12.49.49 (1)`, `12.49.50`, `12.49.50 (1)` |
| Teks | 0 `figcaption` di galeri; tidak ada judul/deskripsi/caption baru; judul lightbox diambil dari `alt` |
| Gambar | 9/9 termuat (`naturalWidth > 0`), rasio render terhadap rasio asli 0,98–1,02, tidak ada distorsi, semua dibungkus pemicu lightbox |
| Coverflow | 9 item, aktif awal indeks 4 dan terpusat; nav desktop next/prev bekerja; swipe kiri/kanan bekerja di 320/360/390/600 px; nav tersembunyi di ≤900 px |
| Lightbox | 9/9 file membuka gambar tepat di 390 dan 1440 px; tombol Tutup dan Escape menutup dialog; kicker "Galeri", judul dari `alt`, CTA "Tanyakan terkait foto ini" ke `6287896102009` |
| Kartu layanan | ID `detail-souvenir` dan `detail-olahan-kambing` tetap ada; kedua kartu layanan masih membuka lightbox |
| Regresi | 210/210 PASS di 8 viewport; 0 overflow horizontal, 0 broken image, 0 console/page error, 0 request gagal (Maps/WA eksternal dikecualikan); Paket 6, price list 4, FAQ 7, navbar 8, WA 22, kontak sosial 2, promo/Escape, dan Maps lazy tetap lolos |

## Revisi 15: dua kategori Galeri dokumentasi

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\inspect-sembelih.py` (Pillow), `C:\Users\DELL\AppData\Local\Temp\opencode\verify-gallery-categories.py` (markup), dan `C:\Users\DELL\AppData\Local\Temp\opencode\sembelih-gallery-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1, 320/390/768/1440 px). Tidak ada build step; kode statis dicek dengan `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset baru | 17 file ditemukan di `assets/img/proses_sembelih_kambing/`; 17/17 JPEG dapat dibaca Pillow, 0 invalid, 0 non-gambar; 8 portrait dan 9 landscape |
| Urutan & markup | 17/17 dipakai di kategori kedua dengan urutan natural `12.46.39`, `12.46.40`, `12.46.40 (1)`–`(2)`, `12.46.41`, `12.46.41 (1)`–`(2)`, `12.46.42`, `12.46.42 (1)`–`(2)`, `12.46.43`, `12.46.43 (1)`–`(2)`, `12.46.44`, `12.46.44 (1)`–`(3)`; atribut `width`/`height` cocok dengan dimensi asli |
| Kategori | Judul tepat "Dokumentasi dari Pelanggan" lalu "Dokumentasi Proses Penyembelihan Kambing"; keduanya merupakan elemen tepat sebelum Coverflow masing-masing; tetap satu `section#galeri` |
| Foto pelanggan | 9/9 src lama, urutan, `loading`, `decoding`, dan ID `detail-souvenir`/`detail-olahan-kambing` tidak berubah; 0 caption foto baru |
| Thumbnail | 26/26 kartu memiliki satu `offsetWidth` dan satu `offsetHeight` per viewport; rasio gambar 4:3; `object-fit: cover`; portrait dan landscape tidak membuat tinggi card berbeda |
| Coverflow | Kategori pelanggan mulai di indeks 4, kategori penyembelihan di indeks 8, keduanya terpusat; nav desktop next/prev bekerja; nav tersembunyi di ≤900 px; swipe bekerja di 320/390 px |
| Lightbox | 26/26 file membuka gambar tepat di 390 dan 1440 px; kicker "Galeri", judul dari `alt`, CTA "Tanyakan terkait foto ini" ke `6287896102009`; tombol Tutup, backdrop, dan Escape menutup dialog; fokus kembali ke pemicu |
| Lightbox utuh | Portrait dan landscape memiliki `object-fit: contain`, gambar termuat, dan rasio render terhadap rasio natural menyimpang ≤0,02; lightbox tidak memakai rasio 4:3 thumbnail |
| Regresi | 231/231 PASS di 4 viewport; 0 overflow horizontal, 0 broken image, 0 console/page error, 0 request gagal (Google Maps/WA/fonts.gstatic.com eksternal dikecualikan); 14 section, navbar 8, WA 22, Paket 6, price list 4, FAQ 7, Maps lazy, promo/Escape tetap lolos; total pemicu lightbox 52 |

## Revisi 16: Dokumentasi Video YouTube

Sumber: `docs/markdown-file/REVISION-YOUTUBE.md`, `C:\Users\DELL\AppData\Local\Temp\opencode\verify-youtube-source-text.py` (perbandingan teks HTML dengan Markdown setelah escape Markdown didekode), dan `C:\Users\DELL\AppData\Local\Temp\opencode\youtube-gallery-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1, 320/390/768/1024/1440 px). Tidak ada build step; JS statis dicek dengan `node --check` dan `git diff --check`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & data | 6/6 PNG ditemukan di `assets/img/thumbnail/` (`thumbnail_01.png`–`thumbnail_06.png`) dan dapat dibaca Pillow; 6/6 judul, deskripsi, URL, dan nama thumbnail di DOM cocok persis dengan source Markdown setelah `\_`, `\&`, dan `\#` didekode sebagai karakter tampilan |
| Struktur | "#Dokumentasi Video YouTube" adalah judul ketiga dan berada tepat sebelum Coverflow ketiga di dalam `#galeri`; dua judul dan 26 figure foto lama tidak berubah; 0 iframe di `#galeri` |
| Card | 6/6 card memuat thumbnail, judul, deskripsi, dan tombol **Tonton di YouTube**; thumbnail memakai `object-fit: cover` tanpa wrapper lightbox; judul/deskripsi/tombol berada di dalam batas card di semua viewport |
| Landscape & konsistensi | Satu ukuran card per viewport: 294×282 px (320), 359×263 px (390), 676×312 px (768), dan 720×332 px (1024/1440); lebar selalu > tinggi; ≤360 px memakai 2 baris clamp, viewport lain 3 baris |
| Hyperlink | 6/6 thumbnail anchor dan 6/6 tombol memakai URL persis, `target="_blank"`, `rel="noopener noreferrer"`, dan `aria-label` bermakna; tombol serta toggle memiliki tinggi sentuh ≥44 px |
| Deskripsi expandable | 6/6 deskripsi awalnya terpotong dan toggle terlihat; klik menampilkan teks penuh tanpa clamp, tombol berubah menjadi "Lihat lebih sedikit" dan `aria-expanded="true"`; klik kedua kembali ringkas dengan tombol "Lihat lebih banyak" dan `aria-expanded="false"`; uji mouse dan tombol Enter di 390/1440 px; deskripsi singkat buatan menghilangkan toggle setelah resize, membuktikan tombol hanya muncul saat terpotong |
| Carousel | Coverflow video dibuka di indeks 2 dan terpusat (offset 0 px); nav desktop next/prev, klik hingga indeks 5, ArrowLeft/ArrowRight, swipe sentuh di 320/390/768 px, dan nav tersembunyi di ≤900 px semuanya lolos |
| Regresi | Paket 6 item/indeks 2, galeri pelanggan 9/indeks 4, penyembelihan 17/indeks 8, dan ID `detail-souvenir`/`detail-olahan-kambing` tidak berubah; 0 overflow horizontal, 0 broken image, 0 console/page error, 0 request gagal (Maps/WA/fonts eksternal dikecualikan); 661/661 PASS di 5 viewport |

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
17. **Skrip QA revisi 09: swipe mobile dilaporkan gagal.** Koordinat sentuh dikirim sebelum carousel berada di viewport. Skrip diperbaiki dengan `scroll_into_view_if_needed()` sebelum mengirim `Input.dispatchTouchEvent`; uji ulang: item aktif galeri bergeser dari indeks 0 ke 1. Bukan bug website.
18. **Klik nav carousel kedua tidak terpusat (revisi 10).** Audit menemukan item aktif ke-5 berhenti 47 px dari tengah karena track flex dibatasi lebar viewport sehingga padding kanan tidak ikut memperpanjang area scroll; perhitungan juga memakai bounding box yang terdistorsi `scale`. Diperbaiki dengan `width: max-content; min-width: 100%` pada `.coverflow-track` dan perhitungan posisi dari `offsetLeft`/`offsetWidth`. Uji ulang: offset 0 px sampai indeks 5.
19. **Skrip QA revisi 10: Escape promo dilaporkan gagal.** Status lightbox/promo dibaca terlalu cepat setelah `keyboard.press`. Skrip diberi jeda 200 ms setelah Escape pertama dan 700 ms setelah Escape kedua. Uji ulang: Escape pertama menutup lightbox, Escape kedua menutup promo. Bukan bug website.
20. **Dokumen PRD masih memuat ukuran slide lama (revisi 11).** Baris responsive menyebut `82vw` dan `~520 px`, padahal CSS Revisi 10 memakai `64vw` dan `min(360px, 32vw)`. Dokumen diperbarui; perilaku browser sudah benar di 10 viewport, jadi bukan bug website.
21. **Skrip QA revisi 12: tiga pemeriksaan awal salah (revisi ini).** `getBoundingClientRect().width` mengukur slide yang sudah di-`scale` sehingga lebar tampak berbeda; fokus lightbox dibaca sebelum Escape; dan jeda 900 ms belum cukup untuk smooth scroll selesai di viewport kecil. Skrip diubah memakai `offsetWidth`, membaca fokus setelah Escape, dan menunggu 1800 ms. Uji ulang: lebar seragam, fokus kembali benar, dan `top = 0` di semua viewport. Bukan bug website.
22. **Skrip QA revisi 12.1: lima pemeriksaan awal salah (revisi ini).** Gambar lazy ke-4/ke-5 belum termuat saat metrik diambil, fontSize komputasi dibaca sebagai `14.56px` bukan `0.91rem`, carousel masih berada di akhir setelah pemeriksaan lightbox sehingga tombol next diuji dari indeks 5, ekspektasi `prevDisabled` terbalik untuk posisi awal indeks 0, dan request gagal Google Maps iframe ikut dihitung. Skrip diperbaiki dengan scroll memuat keenam gambar, reset `scrollLeft = 0`, ekspektasi `prevDisabled = true`, perbandingan fontSize piksel, dan pengecualian request Maps. Uji ulang: PASS di 10 viewport. Bukan bug website.
23. **Poster hero menyisakan ruang kosong besar di mobile (revisi 13).** `.hero-poster` memiliki `height: 752px` tetap sementara gambar hanya ±354 px pada lebar 321 px, sehingga ±398 px area kosong tampak di bawah poster. Diperbaiki dengan `height: auto` pada `@media (max-width: 900px)`. Uji ulang: blank ≤2 px di semua viewport ≤900 px dan banner tetap di bawah hero.
24. **Poster Paket tinggi menimpa teks/CTA card (revisi 13).** Baris grid `.package-image` ber-auto dan gambar `height: 100%` membuat poster tertinggi keluar dari kotak gambar; pada kondisi awal `Paket Pilihan Terbaik` overlap ±100 px ke body. Diperbaiki dengan `grid-template-rows: minmax(0, 1fr)` serta `min-height: 0; max-height: 100%` pada gambar/pemicu zoom. Uji ulang: 6/6 kartu tidak overlap di 320–1440 px, CTA tetap di dalam card, dan carousel serta lightbox tidak regresi.
25. **Skrip QA revisi 13: enam pemeriksaan awal salah (revisi ini).** Gambar lazy belum termuat saat dihitung, `ctaOverflow` memakai elemen DOM bukan rect sehingga `NaN`, jeda 500 ms belum cukup untuk smooth scroll, selector lightbox ditulis `#lightbox` bukan `#package-lightbox`, promo overlay belum dinonaktifkan, dan request Google Maps ikut dihitung. Skrip diperbaiki dengan eager loading, `r(card).bottom`, jeda 1000 ms, selector benar, `sessionStorage` promo, dan pengecualian Maps. Uji ulang: 219/219 PASS. Bukan bug website.
26. **Salah lokasi ikon sosial pada revisi 13 (koreksi pemesan).** YouTube/TikTok awalnya ditaruh di FAQ. Blok `.faq-social` dan CSS-nya dihapus, lalu dua tautan serupa ditambahkan ke `.social-row` Kontak Kami memakai gaya `.social-link` yang sudah ada; footer, hero, Paket, dan bagian lain tidak disentuh. Skrip QA koreksi sempat mengira maskot FAQ adalah `img` dan ukuran card seragam dari rect `scale`; setelah memakai `button.image-zoom` dan `getComputedStyle`, uji ulang 174/174 PASS.
27. **Skrip QA revisi 14: URL lightbox mengandung spasi ter-encode (revisi ini).** Pemeriksaan awal mengira 9 gambar salah karena `src` lightbox menjadi `WhatsApp%20Image...`; file yang terbuka sebenarnya tepat. Skrip dinormalisasi dengan `urllib.parse.unquote`; uji ulang 210/210 PASS. ID `detail-souvenir`/`detail-olahan-kambing` sengaja dipertahankan pada figure baru agar kartu layanan tidak kehilangan target lightbox. Bukan bug website.
28. **Thumbnail portrait revisi 15 masih mengikuti tinggi intrinsik (revisi ini).** `aspect-ratio: 4 / 3` awalnya diletakkan pada tombol `.image-zoom`, sehingga gambar portrait dengan tinggi intrinsik 456 px tetap menentukan tinggi tombol dan kartu. Diagnosis computed style menunjukkan tinggi gambar portrait 456 px vs landscape 256,5 px. Rasio dipindahkan ke `.section-gallery .gallery-grid .image-zoom img` dengan `height: auto; object-fit: cover`; tinggi kartu menjadi seragam. Skrip QA juga diperbaiki untuk ekspektasi 14 section dan perbandingan list vs tuple, serta mengecualikan font `fonts.gstatic.com` yang dimuat oleh embed Google Maps. Uji ulang 231/231 PASS.
29. **Kartu video revisi 16 awalnya berorientasi portrait di 320 px.** Pengukuran Playwright awal memberi 294×298 px karena toggle 44 px dan tiga baris deskripsi. Ditambahkan `-webkit-line-clamp: 2` hanya pada ≤360 px sehingga menjadi 294×282 px; ukuran lain tidak berubah. Verifikasi teks sumber juga menemukan spasi indentasi tambahan pada beberapa baris deskripsi saat HTML disisipkan; semua spasi tersebut dihapus sehingga `textContent` 6/6 identik dengan Markdown. Skrip QA sempat melaporkan 2 FAIL palsu karena mengekspresikan offset tengah 0 px sebagai `0 or 999`; setelah perbaikan skrip, uji ulang 661/661 PASS.

Tidak ada bug fungsional yang tersisa pada website.

## Fitur yang belum selesai / tidak tersedia

- Teks asli WordPress untuk Tentang Kami tidak dapat dipulihkan karena folder `references/` tidak ada. Teks Tentang Kami lengkap sudah disediakan pemesan pada revisi 06.
- `docs/VISUAL-AUDIT.md` tidak tersedia di workspace.
- Screenshot tidak dapat dinilai secara visual oleh model yang menjalankan QA (tanpa dukungan input gambar), termasuk folder `16-image-lightbox-coverflow`, `17-service-card-carousel`, `18-price-list-package-image`, `19-menu-catering-section`, `20-menu-catering-social-footer`, `21-mobile-ui-ux-revision`, `22-contact-social-icons`, `23-galeri-dokumentasi`, `24-galeri-dua-kategori`, dan `25-dokumentasi-video-youtube`. Validasi dilakukan secara programatis: file ada, ukuran > 0, geometri elemen diverifikasi melalui Playwright, dan dimensi screenshot dicek dengan Pillow; OCR Windows dipakai pada folder lama bila teks kunci perlu dicek, dan QR di-decode dengan zxing-cpp.
- Folder khusus `assets/img/menu_catering/` berisi enam poster JPEG asli. Revisi 12.1 memakai salinan bernama deskriptif (`sampul_atau_awal.jpeg`, `1.jpeg`–`5.jpeg`) yang byte-nya identik dengan enam file asli `WhatsApp Image 2026-11-20 ...`; file asli tetap dipertahankan di folder dan tidak ada byte gambar yang diubah. Kartu "Catering & Nasi Box Acara" tidak lagi membuka detail `Paket Ayam Bakar`, melainkan scroll ke section tersebut.
- `favicon-browser.png` adalah render aset favicon asli yang dimuat langsung oleh browser, bukan screenshot tab/chrome browser (Playwright headless tidak menangkap UI browser). Identifikasi logo landscape vs icon juga dibantu OCR Windows + analisis alpha/Pillow, bukan penglihatan langsung.

## Informasi yang masih membutuhkan konfirmasi `[KONFIRMASI]`

1. Screenshot WordPress tidak tersedia — teks Tentang Kami sekarang mengikuti teks revisi 06 dari pemesan; teks lama WordPress tidak dapat dipulihkan.
2. Nomor WA kedua `0811-1030-5999` dan domain `garasiaqiqah.com` terbaca di poster; belum dijadikan CTA/resmi.
3. Alamat pada sertifikat halal berbeda dengan alamat yang diberikan; website memakai alamat yang diberikan pemesan.
4. Tanggal sertifikat hasil OCR perlu dicek terhadap dokumen asli; saat ini hanya nomor sertifikat yang ditampilkan.
5. Daftar harga lengkap tidak direproduksi sebagai teks karena sebagian kolom poster tidak terbaca.
6. Domain final untuk `og:url`, canonical, dan sitemap.
7. Card "Catering & Nasi Box Acara" tidak memiliki foto katering khusus di galeri; saat ini membuka detail "Paket Ayam Bakar" yang disebut pada teks kartu. Konfirmasi jika ada aset yang lebih tepat.

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
| `screenshots/16-image-lightbox-coverflow/` | `01-desktop-top.png` | 1440×1000 |
| `screenshots/16-image-lightbox-coverflow/` | `02-desktop-paket-coverflow.png` | 1440×1641 |
| `screenshots/16-image-lightbox-coverflow/` | `03-desktop-paket-lightbox.png` | 1440×1000 |
| `screenshots/16-image-lightbox-coverflow/` | `04-desktop-galeri-coverflow.png` | 1440×1205 |
| `screenshots/16-image-lightbox-coverflow/` | `05-desktop-galeri-lightbox.png` | 1440×1000 |
| `screenshots/16-image-lightbox-coverflow/` | `06-tablet-paket-coverflow.png` | 768×1457 |
| `screenshots/16-image-lightbox-coverflow/` | `07-mobile-top.png` | 390×844 |
| `screenshots/16-image-lightbox-coverflow/` | `08-mobile-paket-coverflow.png` | 390×1282 |
| `screenshots/16-image-lightbox-coverflow/` | `09-mobile-galeri-lightbox.png` | 390×844 |
| `screenshots/16-image-lightbox-coverflow/` | `10-mobile-promo.png` | 390×844 |
| `screenshots/17-service-card-carousel/` | `01-desktop-top.png` | 1440×1000 |
| `screenshots/17-service-card-carousel/` | `02-desktop-service-cards.png` | crop `.about-service-grid` 1184×845 |
| `screenshots/17-service-card-carousel/` | `03-desktop-paket-carousel.png` | 1440×1187 |
| `screenshots/17-service-card-carousel/` | `04-desktop-service-to-paket-lightbox.png` | 1440×1000 |
| `screenshots/17-service-card-carousel/` | `05-desktop-galeri-carousel.png` | 1440×960 |
| `screenshots/17-service-card-carousel/` | `06-desktop-service-to-galeri-lightbox.png` | 1440×1000 |
| `screenshots/17-service-card-carousel/` | `07-tablet-paket-carousel.png` | 768×1138 |
| `screenshots/17-service-card-carousel/` | `08-mobile-top.png` | 390×844 |
| `screenshots/17-service-card-carousel/` | `09-mobile-paket-carousel.png` | 390×1049 |
| `screenshots/17-service-card-carousel/` | `10-mobile-service-to-galeri-lightbox.png` | 390×844 |
| `screenshots/17-service-card-carousel/` | `11-mobile-promo.png` | 390×844 |
| `screenshots/18-price-list-package-image/` | `01-desktop-price-list.png` | 1440×2234 |
| `screenshots/18-price-list-package-image/` | `02-desktop-price-list-lightbox.png` | 1440×1000 |
| `screenshots/18-price-list-package-image/` | `03-desktop-paket-hemat.png` | 1440×1000 |
| `screenshots/18-price-list-package-image/` | `04-desktop-paket-hemat-lightbox.png` | 1440×1000 |
| `screenshots/18-price-list-package-image/` | `05-tablet-price-list.png` | 768×1630 |
| `screenshots/18-price-list-package-image/` | `06-mobile-price-list.png` | 390×2632 |
| `screenshots/18-price-list-package-image/` | `07-mobile-price-list-lightbox.png` | 390×844 |
| `screenshots/18-price-list-package-image/` | `08-mobile-paket-hemat.png` | 390×844 |
| `screenshots/18-price-list-package-image/` | `09-mobile-promo.png` | 390×844 |
| `screenshots/19-menu-catering-section/` | `01-desktop-section.png` | 1440×1044 |
| `screenshots/19-menu-catering-section/` | `02-desktop-lightbox.png` | 1440×1000 |
| `screenshots/19-menu-catering-section/` | `03-desktop-card-to-section.png` | 1440×1000 |
| `screenshots/19-menu-catering-section/` | `04-tablet-section.png` | 768×960 |
| `screenshots/19-menu-catering-section/` | `05-mobile-section.png` | 390×815 |
| `screenshots/19-menu-catering-section/` | `06-mobile-lightbox.png` | 390×844 |
| `screenshots/19-menu-catering-section/` | `07-mobile-after-swipe.png` | 390×844 |
| `screenshots/19-menu-catering-section/` | `08-mobile-promo.png` | 390×844 |
| `screenshots/20-menu-catering-social-footer/` | `01-desktop-section.png` | 1440×988 |
| `screenshots/20-menu-catering-social-footer/` | `02-desktop-lightbox.png` | 1440×1000 |
| `screenshots/20-menu-catering-social-footer/` | `03-desktop-footer.png` | 1440×511 |
| `screenshots/20-menu-catering-social-footer/` | `04-tablet-section.png` | 768×910 |
| `screenshots/20-menu-catering-social-footer/` | `05-mobile-section.png` | 390×777 |
| `screenshots/20-menu-catering-social-footer/` | `06-mobile-lightbox.png` | 390×844 |
| `screenshots/20-menu-catering-social-footer/` | `07-mobile-after-swipe.png` | 390×844 |
| `screenshots/20-menu-catering-social-footer/` | `08-mobile-footer.png` | 390×873 |
| `screenshots/20-menu-catering-social-footer/` | `09-mobile-promo.png` | 390×844 |
| `screenshots/21-mobile-ui-ux-revision/` | `01-mobile-hero.png` | 390×844 |
| `screenshots/21-mobile-ui-ux-revision/` | `02-mobile-package.png` | 390×844 |
| `screenshots/21-mobile-ui-ux-revision/` | `03-mobile-faq.png` | 390×844 |
| `screenshots/21-mobile-ui-ux-revision/` | `04-desktop-hero.png` | 1440×1000 |
| `screenshots/21-mobile-ui-ux-revision/` | `05-desktop-package.png` | 1440×1000 |
| `screenshots/21-mobile-ui-ux-revision/` | `06-desktop-faq.png` | 1440×1000 |
| `screenshots/22-contact-social-icons/` | `01-desktop-kontak.png` | 1440×1000 |
| `screenshots/22-contact-social-icons/` | `02-mobile-kontak.png` | 390×844 |
| `screenshots/22-contact-social-icons/` | `03-desktop-faq.png` | 1440×1000 |
| `screenshots/22-contact-social-icons/` | `04-mobile-faq.png` | 390×844 |
| `screenshots/23-galeri-dokumentasi/` | `01-desktop-galeri.png` | 1440×1000 |
| `screenshots/23-galeri-dokumentasi/` | `02-desktop-lightbox.png` | 1440×1000 |
| `screenshots/23-galeri-dokumentasi/` | `03-mobile-galeri.png` | 390×844 |
| `screenshots/23-galeri-dokumentasi/` | `04-mobile-lightbox.png` | 390×844 |
| `screenshots/24-galeri-dua-kategori/` | `01-desktop-1440-galeri.png` | 1440×1110 |
| `screenshots/24-galeri-dua-kategori/` | `02-desktop-1440-lightbox-landscape.png` | 1440×1000 |
| `screenshots/24-galeri-dua-kategori/` | `03-desktop-1440-lightbox-portrait.png` | 1440×1000 |
| `screenshots/24-galeri-dua-kategori/` | `04-tablet-768-galeri.png` | 768×1013 |
| `screenshots/24-galeri-dua-kategori/` | `05-mobile-390-galeri.png` | 390×920 |
| `screenshots/24-galeri-dua-kategori/` | `06-mobile-390-lightbox-landscape.png` | 390×844 |
| `screenshots/24-galeri-dua-kategori/` | `07-mobile-390-lightbox-portrait.png` | 390×844 |
| `screenshots/24-galeri-dua-kategori/` | `08-mobile-320-galeri.png` | 320×853 |
| `screenshots/24-galeri-dua-kategori/` | `09-desktop-1440-lightbox-pelanggan.png` | 1440×1000 |
| `screenshots/24-galeri-dua-kategori/` | `10-mobile-390-lightbox-pelanggan.png` | 390×844 |
| `screenshots/25-dokumentasi-video-youtube/` | `01-desktop-1440-galeri-youtube.png` | 1440×1557 |
| `screenshots/25-dokumentasi-video-youtube/` | `02-desktop-1024-galeri-youtube.png` | 1024×1497 |
| `screenshots/25-dokumentasi-video-youtube/` | `03-tablet-768-galeri-youtube.png` | 768×1430 |
| `screenshots/25-dokumentasi-video-youtube/` | `04-mobile-390-galeri-youtube.png` | 390×1289 |
| `screenshots/25-dokumentasi-video-youtube/` | `05-mobile-320-galeri-youtube.png` | 320×1240 |
| `screenshots/25-dokumentasi-video-youtube/` | `06-desktop-1440-deskripsi-dibuka.png` | 1440×1728 |
| `screenshots/25-dokumentasi-video-youtube/` | `07-mobile-390-deskripsi-dibuka.png` | 390×1613 |

Semua file diverifikasi ada dengan ukuran > 0 dan dihasilkan dari browser sungguhan via Playwright + Chrome headless. Folder `06` adalah bukti historis sebelum maskot dipindahkan; folder `07` setelah pemindahan; folder `08` setelah badge halal dan QR terpisah di hero dihapus; folder `09` setelah Maps, navbar, dan favicon direvisi; folder `10` adalah presentation set dari GitHub Pages sebelum revisi copy ini; folder `12` adalah kondisi setelah revisi identitas usaha, copy hero, dan posisi banner hadits; folder `13` adalah kondisi setelah revisi 06 Tentang Kami, banner, produk, dan QR katalog; folder `14` adalah kondisi setelah revisi 07 layout Menu, card Paket ke-6, dan lightbox; folder `15` adalah kondisi setelah revisi 08 hardening lightbox; folder `16` adalah kondisi setelah revisi 09 lightbox global dan carousel Coverflow; folder `17` adalah kondisi setelah revisi 10 carousel terpusat dan kartu layanan terhubung ke detail; folder `18` adalah kondisi setelah revisi 11 price list dan gambar Paket Hemat; folder `19` adalah kondisi setelah revisi 12 Menu Catering; folder `20` adalah kondisi setelah revisi 12.1 koreksi 6 gambar Menu Catering dan sosial media footer; folder `21` adalah kondisi setelah revisi 13 kerapian hero mobile dan card Paket; folder `22` adalah kondisi setelah koreksi pemindahan ikon YouTube/TikTok dari FAQ ke Kontak Kami; folder `23` adalah kondisi setelah revisi 14 penggantian seluruh foto Galeri dengan dokumentasi asli; folder `24` adalah kondisi setelah revisi 15 penambahan kategori penyembelihan dan thumbnail 4:3 `cover`; folder `25` adalah kondisi setelah revisi 16 penambahan kategori video YouTube dengan card landscape dan deskripsi expandable. Total 158 screenshot. QA revisi ini dijalankan di `http://127.0.0.1:8000/index.html` karena perubahan belum dipublikasikan ke GitHub Pages.
