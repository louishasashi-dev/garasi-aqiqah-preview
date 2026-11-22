# QA Report — Garasi Aqiqah & Catering

Tanggal QA: 22 November 2026
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome 157 headless (executable lokal, tanpa unduhan browser).

## Ringkasan

| Item | Status |
| --- | --- |
| Struktur HTML & 15 section + promo modal | Selesai |
| CSS responsif desktop / tablet / mobile | Selesai |
| JavaScript: nav mobile, promo modal, tahun footer, lightbox global, carousel Coverflow, card layanan detail, card Catering → Menu Catering | Selesai, vanilla JS tanpa library |
| Integrasi WhatsApp & katalog | Selesai (22 tautan: 17 CTA + 4 katalog + 1 CTA lightbox) |
| SEO metadata & Open Graph | Selesai |
| Aksesibilitas dasar | Selesai |
| Screenshot tahapan (378 file) | Selesai |
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
| Revisi 17: optimasi mobile Video YouTube | Selesai: kartu vertikal 508:273 `contain`, play icon, slide 84vw + peek, indikator `n / 6`, fokus ke kartu aktif, QA 770/770 PASS |
| Revisi 18: koreksi hyperlink layanan | Selesai: 2 hyperlink teks membuka asli PNG/JPEG penuh tanpa info/CTA baru, Tutup/backdrop/Escape, QA 312/312 PASS |
| Revisi 19: 3 video YouTube baru | Selesai: 9/9 kartu sesuai dua Markdown, 9 thumbnail PNG lokal, indikator `5 / 9`, portrait 07/09 tidak terpotong, QA 844/844 PASS |
| Revisi 20: Ulasan Pelanggan Google Maps | Selesai: 5/5 ulasan persis sumber, 5 PNG lokal utuh, 5 short link aman, nav header/footer, grid 3/2/1 kolom, QA 317/317 PASS |
| Revisi 21: perbaikan layout Ulasan Pelanggan | Selesai: avatar inisial terpisah dari foto bukti 4:3 `cover`, teks clamp + toggle, kontras AA, scroll offset, QA 847/847 PASS |
| Revisi 22: carousel Ulasan Pelanggan | Selesai: 5 slide seragam memakai pola Coverflow Galeri, nav/swipe/keyboard + indikator `n / 5`, teks lengkap menggulir tanpa resize kartu, QA 981/981 PASS |
| Revisi 23: konten harga & konsistensi `.price-copy` | Selesai; 4 wrapper `.price-copy`, 7 list `check-list check-list-light`, 4 poster utuh; QA awal 1177/1183 PASS dengan 6 FAIL ekspektasi navbar lama |
| Revisi 35: layout Flexbox & CTA Heboh `#harga` | Selesai: teks kiri/poster kanan di >900 px, teks lalu poster di ≤900 px, 4 CTA harga ke nomor utama, 10 tautan navbar aktif didokumentasikan; QA 1225/1225 PASS |
| Revisi 36: poster `#harga` satu kolom | Selesai: 4 poster vertikal berurutan Harga Kambing → Hemat → Spesial → Heboh; teks, CTA, dan layout kolom utama tidak berubah; QA 1273/1273 PASS |
| Revisi 39: kerapian footer | Selesai: 11 link footer seragam 44 px, garis bawah sejajar konten, brand footer tampil ≤420 px, tablet tanpa sel kosong; QA 239/239 PASS |
| Revisi SEO 01: optimasi performa gambar | Selesai: 5 turunan WebP lokal, file asli utuh, lightbox tetap asli; sumber `23.155.287` byte → turunan `689.922` byte, unduhan awal turun `504.815` byte; QA 19/19 pada 390 px dan 18/18 pada 1280 px PASS |
| Revisi navbar Split desktop | Selesai: aktif hanya ≥1101 px, Split setelah scroll >80 px berupa floating logo container 180×64 px, klik logo kembali Normal, top otomatis Normal; QA 24/24 PASS |
| Revisi animasi navbar Split | Selesai: transisi dua arah Normal↔Floating/Split di ≥1101 px, klik tanpa hash/scroll, siklus 3× berulang, scroll-to-top, reduced motion, dan regresi breakpoint; QA 27/27 PASS |
| Audit W3C HTML Validator | Selesai: 0 error dan 88 info; 13 ARIA role, 28 URL gambar, promo `div[role=dialog]`, dan fallback heading lightbox diperbaiki tanpa perubahan visual; QA 11/11 + 6/6 + navbar 27/27 PASS |
| Informasi yang perlu konfirmasi pemilik bisnis | 6 item (lihat bawah) |

## Fitur yang selesai

1. Header sticky dengan logo landscape transparan tanpa teks brand terpisah, 10 tautan navigasi aktif (Beranda, Tentang, Keunggulan, Harga, Menu, Paket, Galeri, Ulasan, FAQ, Kontak), CTA Pesan Sekarang, dan hamburger mobile 44×44 px (`aria-expanded`).
2. Hero dengan banner hadits tunggal di atas, eyebrow "Welcome To", `<h1>` bold "Wujudkan Ibadah Aqiqah Penuh Berkah & Ketenangan", tagline "Jadikan Moment Anda Lebih Berharga", slogan Berkah/Hemat/Amanah/Bahagia, dua paragraf deskripsi revisi dengan "Garasi Aqiqah" bold, penutup italic "Berkah dalam ibadah, hangat dalam kebersamaan.", catatan "Dapur Berpengalaman lebih dari 15 tahun", tombol Pesan Aqiqah, Lihat Paket, container QR katalog terpisah di bawah CTA, tautan teks "Lihat Katalog WhatsApp Business", dan poster asli. Badge halal lama dan maskot tidak ada di hero; QR di dalam poster tetap dipertahankan.
3. Tentang Kami lengkap: judul dan nama usaha, subbagian A Tentang Kami, B tiga logo sertifikasi terpisah, C lima alasan, dan D empat kartu layanan; foto sertifikat halal asli tetap tampil.
4. Empat card Keunggulan (Berkah, Hemat, Amanah, Bahagia) dengan ikon SVG konsisten.
5. Daftar harga kambing memakai poster asli `object-fit`-alami; tidak ada tabel hasil tebakan. Sejak revisi 23, deskripsi teks Hemat/Spesial/Heboh dari sumber dan CTA WhatsApp kontekstual memakai pola `.price-copy` yang sama, tanpa kartu atau class kustom per paket. Sejak revisi 35, keempat blok teks berada di kolom kiri dan keempat poster di kolom kanan pada desktop; di mobile seluruh teks tampil lebih dulu lalu poster, dengan CTA **Tanya Paket Heboh** sebagai tambahan.
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
26. Revisi 17: pada ≤640 px, kartu video menjadi satu kolom vertikal dengan thumbnail 508:273 `object-fit: contain` (gambar utuh, tidak crop), ikon play pseudo-element di tengah, judul 0,95 rem line-clamp 3, deskripsi 0,8 rem line-clamp 3 yang tetap bisa diperluas, toggle/tombol YouTube ≥44 px, carousel video full-bleed dengan slide 84vw dan peek kartu tetangga, indikator posisi `n / 6` yang mengikuti kartu aktif, serta focus ring keyboard yang dipindahkan ke kartu aktif. Layout 768–1440 px dan dua kategori foto tidak berubah.
27. Revisi 18 (koreksi): dua hyperlink teks kartu layanan ("2. Spesialis Kambing Masak (Mulai Rp 1,5 Jt)" dan "3. Souvenir Super Lengkap") kini membuka `#package-lightbox` dengan `assets/img/product_and_service/SPESIALIS KAMBING GRATIS MASAK.png` dan `assets/img/product_and_service/garasi_hadiah_souvenir.jpg` tampil penuh, rasio asli, dan `object-fit: contain`. Tidak ada foto pada kartu, tidak ada kicker/judul/deskripsi/CTA baru di lightbox, dan tidak ada navigasi ke `#galeri`. Kartu Paket, kartu Catering, `#galeri`, item lain, navbar, footer, dan fitur sebelumnya tidak diubah.
28. Revisi 19: kategori "Dokumentasi Video YouTube" menerima 3 kartu baru dari `docs/markdown-file/penambahan dokumentasi youtube.md` (`thumbnail_07`–`thumbnail_09`) sehingga total 9 video. Keenam video lama, dua kategori foto, hyperlink layanan revisi 18, navbar, footer, CTA WhatsApp, dan seluruh fitur sebelumnya tidak diubah. Card tetap memakai carousel/lightbox existing tanpa iframe, indeks awal dan indikator menjadi `5 / 9`, thumbnail portrait baru memakai `contain` di desktop, dan QA 844/844 PASS di delapan viewport.

29. Revisi 20: `#ulasan` ditambahkan setelah Banner 02 dan sebelum FAQ sebagai 5 kartu Ulasan Pelanggan dari `REVISION-GOOGLE-REVIEWS.md`. Foto PNG lokal, nama akun, waktu relatif, 5 bintang, isi lengkap, dan short link Google Maps identik dengan sumber; kartu memakai grid 3/2/1 kolom, foto `object-fit: contain`, tautan ≥44 px dengan `target="_blank" rel="noopener noreferrer"`, serta tautan Ulasan di navbar dan footer. Tidak ada ulasan, rating agregat, foto, atau CTA tambahan; seluruh fitur revisi 17/18/19 dipertahankan.

30. Revisi 21: kelima kartu `#ulasan` sekarang memakai avatar inisial UA/VS/FA/CS/SA di samping identitas, sementara foto PNG lokal asli menjadi foto bukti tersendiri dengan rasio 4:3 dan `object-fit: cover` (lightbox tetap menampilkan file asli utuh `contain`). Isi ulasan, waktu, bintang, dan short link tidak berubah; teks panjang dibatasi ±6 baris dengan tombol **Baca selengkapnya** yang muncul hanya saat terpotong, dapat dibuka/tutup, dan memakai `aria-expanded`/`aria-controls`. Heading seimbang, kontras teks AA, `scroll-margin-top` mengikuti header sticky, dan grid 3/2/1 kolom tetap rapi.

31. Revisi 22: grid `#ulasan` diganti carousel Coverflow yang memakai `[data-coverflow]`, `.coverflow-viewport`, dan `.coverflow-track` seperti Galeri, tanpa mengubah lima carousel lama. Kelima kartu identik ukurannya per viewport dengan slide aktif di tengah dan tetangga tampak sebagian; tombol nav desktop, keyboard Arrow, dan swipe touch berpindah slide serta indikator `n / 5` sinkron dari `3 / 5`. Isi, urutan, foto, alt, rating, waktu, dan short link persis sumber. **Baca selengkapnya** kini menggulir teks penuh di dalam kotak 6 baris tetap sehingga tinggi kartu tidak berubah saat dibuka atau ditutup.

32. Revisi 23: `#harga` memakai judul, pengantar, alasan, dan penutup baru dari `REVISION-PRICE-CONTENT.md` tanpa emoji atau marker Markdown. Deskripsi lengkap Paket Aqiqah Hemat, Spesial, dan Heboh mengikuti keempat poster asli; CTA lama **Tanya Harga Kambing** tetap ada dan ditambah **Tanya Paket Hemat** serta **Tanya Paket Spesial** ke nomor `6287896102009`. Keempat kartu Layanan & Pilihan Paket Kami menampilkan teks "Klik untuk melihat detail" dan panah kanan-atas di bagian bawah dengan `pointer-events: none`, sehingga tidak mengubah mouse/touch/keyboard, lightbox, atau scroll ke `#menu-catering`. Koreksi selanjutnya mengganti kartu grid paket dengan empat blok `.price-copy` yang identik polanya; rincian ada di bagian QA khusus di bawah.

33. Revisi navbar Split desktop: pada viewport ≥1101 px, header Normal tetap seperti semula sampai halaman digulir lebih dari 80 px; setelah itu `.site-header.is-split` hanya menampilkan floating container logo fixed 180×64 px di `top: 20px`, sejajar dengan tepi kiri logo Normal (`max(28px, calc(50% - 592px))`), background putih 96%, border `var(--line)`, radius 14 px, dan shadow halus. Header transparan, `backdrop-filter: none`, serta `pointer-events: none` agar area kosong tidak menghalangi konten; nav/CTA disembunyikan tetapi tinggi layout 78 px tetap terjaga. Klik pada floating logo mengembalikan Normal dan state itu bertahan sampai perubahan scroll berikutnya; scroll ke posisi paling atas juga kembali Normal. Di 1100 px ke bawah (termasuk tablet/mobile) tidak ada perubahan. Perbaikan juga menahan scroll anchoring saat klik agar header tidak langsung Split lagi.

## Hasil QA otomatis (browser nyata)

### QA khusus revisi navbar Split desktop

- Sumber: Playwright + Chrome 157 headless memakai server lokal statis threading; 24 pemeriksaan otomatis, 24/24 PASS.
- Viewport: 1440, 1101, 1100, 1024, 768, 390, dan 360 px.
- Hasil: 0 console error, 0 page error, 0 response lokal ≥400, 0 broken image, 0 horizontal overflow.
- Regresi minimum terpisah: 21/21 PASS (18/18 anchor/WA/FAQ/nav/gambar/overflow pada 360, 390, 1440 px + 3/3 promo/Escape/sessionStorage/Maps lazy).
- State terverifikasi: Normal di top, tidak Split di 79 px, Split setelah >80 px dan tetap stabil saat scroll anchoring (`wheel 85`), header tetap `sticky` dengan tinggi 79 px dan `.header-inner` 78 px, area header kosong tidak menjadi target klik (`pointer-events: none`), floating logo `position: fixed` `top: 20px` `left` sama dengan Normal pada 1440 dan 1101 px, box 180×64 px dengan background/border/radius/shadow sesuai spesifikasi, gambar 178×180 px `object-fit: contain` `margin-top: -55px` tidak terpotong, nav/CTA tersembunyi, klik floating logo kembali Normal dan tetap Normal saat smooth scroll melewati >80 px, scroll/top berikutnya kembali Normal, resize 1440→1024→1440 benar, dan 1100 px/tablet/mobile tidak berubah.

### QA khusus revisi animasi navbar Split desktop

- Sumber: Playwright + Chrome 157 headless memakai server lokal statis threading; 27 pemeriksaan otomatis, 27/27 PASS.
- Viewport: 1440, 1101, 1100, 1024, 768, 390, dan 360 px; reduced motion memakai konteks terpisah.
- Hasil: 0 console error, 0 page error, 0 response lokal ≥400, 0 broken image, 0 horizontal overflow, dan tinggi header/`.header-inner` tidak berubah saat transisi.
- State terverifikasi: sampel 120 ms saat Normal→Floating dan Split→Normal berada di antara nilai awal/akhir untuk `top`, tinggi brand, dan opacity nav; geometri akhir di 1440/1101 px sesuai spesifikasi dengan gambar 178×180 px `margin-top: -55px`, nav/CTA tersembunyi, dan latar header transparan.
- Interaksi: klik logo tidak mengubah `location.hash` maupun `scrollY`; siklus scroll→klik diulang 3× tanpa hash; scroll ke top kembali Normal; resize 1440→1024→1440, 1101, 1100, tablet, dan mobile tidak regresi; `prefers-reduced-motion: reduce` memakai durasi 0 s dan tetap mencapai Split.

| Pemeriksaan | Desktop 1440×1000 | Mobile 390×844 |
| --- | --- | --- |
| Gambar di DOM (62 `<img>`, termasuk banner, logo sertifikasi, produk, lightbox, maskot, dan 6 poster Menu Catering) | 62/62 hadir, 0 gambar rusak, 0 request gagal | 62/62 hadir, 0 gambar rusak, 0 request gagal |
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
| Navbar logo landscape transparan | `src` tepat, `object-fit: contain`, natural 500×500; box Normal 180×78 (desktop), 150×64 (tablet), 130×56 (mobile), 108×48 (≤360 px); box Split desktop 180×64 fixed; tanpa teks brand; tidak overlap CTA/nav/hamburger | Ya |
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

## Revisi 17: Optimasi mobile Dokumentasi Video YouTube

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev17-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1, delapan viewport 320/360/390/430/640/768/1024/1440 px), `C:\Users\DELL\AppData\Local\Temp\opencode\verify-youtube-source-text.py`, dan OCR Windows pada crop thumbnail DPR 2. Screenshot before/after berada di `screenshots/26-optimasi-mobile-youtube/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Layout mobile | 6/6 card pada 320/360/390/430/640 px memakai satu kolom (`grid-template-columns` satu nilai), thumbnail di atas dan body di bawah, slide tepat `84vw`, viewport full-bleed 100vw, tanpa elemen saling menimpa; 0 overflow horizontal di semua viewport |
| Thumbnail utuh | Kotak thumbnail memakai rasio 508:273 (toleransi 0,02) dan `object-fit: contain`; perhitungan scaled content 6/6 masuk sepenuhnya di dalam kotak pada semua viewport, sehingga tidak ada cropping untuk kelima rasio asli PNG yang berbeda |
| Keterbacaan thumbnail | OCR Windows pada crop DPR 2 membaca teks 4/6 thumbnail (`paket Catering Nasi Ayam Bakar`, alamat di thumbnail rute, `Proses Penyembelihan Hewan Aqiqah`, `Proses Packing ... Garasi Aqiqah`); dua thumbnail yang tidak terbaca OCR juga tidak terbaca dari file aslinya, jadi bukan efek crop Revisi 17 |
| Play icon | 42×42 px, `top`/`left` berada tepat di tengah kotak thumbnail layout, transform `translate(-50%, -50%)`, dan `pointer-events: none` pada circle maupun segitiga; tidak menambah elemen ARIA baru |
| Peek carousel | Pada 320/360/390/430/640 px, sisi kartu sebelum dan sesudah kartu aktif terlihat masing-masing >5 px di dalam viewport (sekitar 10–26 px), sehingga affordance geser jelas tanpa mengubah carousel foto |
| Indikator posisi | Teks awal `3 / 6` di semua viewport (indeks aktif 2 dipertahankan), tersembunyi di 768/1024/1440 px; mengikuti swipe ke `4 / 6` dan kembali `3 / 6`, nav desktop dan ArrowLeft/ArrowRight; `role="status"` + `aria-live="polite"` |
| Tipografi & target sentuh | Judul 15,2 px (0,95 rem), deskripsi 12,8 px (0,8 rem), keduanya `-webkit-line-clamp: 3`; toggle `min-height: 44px`, tombol YouTube `min-height: 46px`, dan tinggi visual kartu aktif ≥44 px; judul/deskripsi/toggle/tombol tidak overlap |
| Deskripsi | 6/6 toggle terlihat karena teks terpotong; expand menampilkan `scrollHeight <= clientHeight + 1` dengan `aria-expanded="true"` dan teks **Lihat lebih sedikit**; collapse mengembalikan clamp dengan **Lihat lebih banyak**; diuji di 320/390/640/1440 px |
| Data & hyperlink | 6/6 judul, deskripsi, URL, thumbnail, dan urutan masih identik dengan `REVISION-YOUTUBE.md`; 6/6 `href` persis dengan `target="_blank"` dan `rel="noopener noreferrer"`; popup aktif di 390/1440 px membuka ID video yang sama (YouTube mengubah URL `youtu.be`/`shorts` ke bentuk kanonik) |
| Fokus keyboard | Di 390/1440 px, `:focus-visible` pada viewport tidak menggambar ring gold (`outline: none`), sedangkan kartu aktif mendapat outline solid 3 px berwarna emas; ArrowRight/ArrowLeft tetap menggeser carousel dan indikator mengikuti |
| Regresi | Menu Catering 6/indeks 0, Paket 6/indeks 2, galeri pelanggan 9/indeks 4, penyembelihan 17/indeks 8, dan video 6/indeks 2; nav foto masih bekerja; 768–1440 px mempertahankan card dua kolom landscape, `object-fit: cover`, slide `min(720px, 88vw)`, dan indikator tersembunyi; 0 broken image, 0 console/page error, 0 request gagal; 770/770 PASS di 8 viewport |

## Revisi 18: Koreksi Hyperlink Spesialis Kambing Masak & Souvenir Super Lengkap

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev18-koreksi-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1, lima viewport 320/390/768/1024/1440 px), pengecekan format/dimensi dengan Pillow, dan screenshot before/after di `screenshots/28-koreksi-hyperlink-layanan/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

Catatan koreksi: interpretasi awal menambahkan `.service-photo` pada dua kartu di `#tentang` dan dibuktikan di `screenshots/27-service-photo-preview/`. Pemesan mengklarifikasi bahwa yang dimaksud adalah dua hyperlink/teks kartu yang sebelumnya membuka detail Galeri, bukan penambahan foto kartu. Implementasi final menghapus foto tersebut dan mengalihkan dua aksi kartu ke aset lokal yang ditentukan tanpa menyentuh `#galeri`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & format | `SPESIALIS KAMBING GRATIS MASAK.png` benar PNG 1279×1600 dan `garasi_hadiah_souvenir.jpg` benar JPEG 1130×1600. Keduanya lokal, tidak dipindah/diubah, dan termuat `naturalWidth > 0` di semua viewport saat dibuka |
| Struktural kartu | 0 `.service-photo` dan 0 `.image-zoom` tambahan pada kartu layanan; 4/4 judul serta 4/4 deskripsi pertama identik dengan sebelum revisi; kartu kembali berisi teks seperti semula |
| Dua hyperlink | Klik pada teks "2. Spesialis Kambing Masak (Mulai Rp 1,5 Jt)" membuka `SPESIALIS KAMBING GRATIS MASAK.png`; klik "3. Souvenir Super Lengkap" membuka `garasi_hadiah_souvenir.jpg`; keduanya memakai atribut `data-lightbox-image` pada kartu yang bersangkutan |
| Batas perubahan | `location.hash` tetap kosong setelah klik; tidak ada perpindahan ke `#galeri`; dua `src` figure `detail-olahan-kambing` dan `detail-souvenir` tetap memakai foto dokumentasi lama; 52 tombol lightbox lama tidak bertambah |
| Isi lightbox | Panel info tersembunyi, CTA tidak terlihat, kelas `has-info` tidak aktif, dan tidak ada teks/CTA baru pada dialog; `role="dialog"`, `aria-modal="true"`, dan `aria-controls` tetap benar |
| Preview gambar | Rasio render terhadap rasio natural menyimpang <0,02; `object-fit: contain`; gambar sepenuhnya berada di dalam viewport; 0 overflow horizontal saat dialog terbuka di 320–1440 px |
| Tutup & keyboard | Tombol Tutup menutup kambing, klik area luar menutup souvenir di semua viewport; Enter pada kartu ber-`tabindex` membuka aset yang tepat, Escape menutup, promo tidak ikut muncul, fokus kembali ke kartu pemicu di 390/1440 px |
| Scroll | `body.style.overflow = hidden` saat terbuka dan kembali ke nilai semula setelah Tutup/backdrop/Escape; tidak ada scroll halaman yang terkunci |
| Regresi | 6 paket/indeks 2, 9 galeri pelanggan/indeks 4, 17 penyembelihan/indeks 8, 6 video/indeks 2, 6 Menu Catering/indeks 0, 4 price poster, 7 FAQ, 8 tautan navbar, kartu Paket tetap membuka paket, kartu Catering tetap scroll ke `#menu-catering`, tautan navbar Galeri tetap berfungsi, dan semua tautan `wa.me` memakai `6287896102009`; 0 console/page error, 0 request gagal; 312/312 PASS di 5 viewport |

## Revisi 19: Penambahan 3 Video YouTube

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev19-youtube-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, device scale factor 1, delapan viewport 320/360/390/430/640/768/1024/1440 px), `C:\Users\DELL\AppData\Local\Temp\opencode\rev19-verify-source.py`, pengecekan format/dimensi dengan Pillow, dan screenshot before/after di `screenshots/29-tambah-video-youtube/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & sumber | `thumbnail_07.png` 890976 byte PNG 582×943, `thumbnail_08.png` 86430 byte PNG 409×226, dan `thumbnail_09.png` 478537 byte PNG 433×663 lokal serta termuat di semua viewport. 9/9 judul, deskripsi, URL, dan thumbnail identik dengan gabungan `REVISION-YOUTUBE.md` dan `penambahan dokumentasi youtube.md`, setelah escape `\_`, `\&`, `\#` didekode dan U+200B dipertahankan. Video 8 tanpa `.youtube-description` dan tanpa `.youtube-toggle` |
| Kartu & interaksi | 9 kartu urut `thumbnail_01`–`thumbnail_09`; 9/9 tautan YouTube/Shorts persis dengan `target="_blank" rel="noopener noreferrer"` dan `aria-label` yang benar; 8 toggle tersisa membuka/menutup deskripsi; 0 iframe di `#galeri`; tidak ada akses iframe eksternal yang dianggap request gagal |
| Layout | 641–1440 px tetap dua kolom landscape, slide `min(720px, 88vw)`, thumbnail lama/`thumbnail_08` `cover`, `thumbnail_07`/`thumbnail_09` `contain`; ≤640 px tetap satu kolom, thumbnail 508:273 `contain`, slide 84vw dengan peek tetangga, judul 0,95 rem dan deskripsi 0,8 rem line-clamp 3; 0 overflow horizontal di delapan viewport |
| Carousel & regresi | Indikator awal `5 / 9`, nav desktop di >900 px, swipe ≤900 px, dan keyboard Arrow tetap menggeser ke `6 / 9` lalu kembali `5 / 9`; Menu Catering 6/indeks 0, Paket 6/indeks 2, pelanggan 9/indeks 4, penyembelihan 17/indeks 8, hyperlink layanan revisi 18, FAQ, navbar, footer, dan semua CTA `6287896102009` tidak berubah; 65 gambar tanpa broken image, 0 console/page error, 0 request gagal; 844/844 PASS |
| Screenshot | Delapan file before/after 320/390/430/1440 px dibuat dari browser sungguhan, semua ada dengan ukuran > 0; verifikasi visual langsung tidak tersedia, jadi geometri dan dimensi dicek programatis |

## Revisi 20: Ulasan Pelanggan Google Maps

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev20-ulasan-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, delapan viewport 320/360/390/430/640/768/1024/1440 px), `docs/markdown-file/REVISION-GOOGLE-REVIEWS.md`, pengecekan format/dimensi dengan Pillow, dan screenshot before/after di `screenshots/30-ulasan-google-maps/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & sumber | 5 PNG lokal (`ululazmiulasan` 595×454, `ulasansivins` 601×450, `ulasanfarisaazzahra` 663×702, `ulasancindyayusintia` 733×556, `syifaandiniulasan` 654×525) termuat di semua viewport; 70/70 gambar di DOM tanpa broken image; 0 request gagal. Nama, waktu relatif dari 21 November 2026, 5 bintang, isi teks, URL short link, dan path foto 5/5 identik dengan Markdown, termasuk tanda baca, emoji, dan `&amp;` yang terbaca kembali sebagai `&`. |
| Kartu & aksesibilitas | 5 kartu `.review-card` urut; `aria-label` bintang `5 dari 5 bintang`, alt foto memakai nama akun, tautan memakai `target="_blank" rel="noopener noreferrer"` dan `aria-label` yang sesuai; tinggi minimum tautan 44 px; fokus `:focus-visible` emas; tidak ada teks terpotong permanen, carousel, atau rating agregat. |
| Layout | Grid 3 kolom >900 px, 2 kolom 641–900 px, 1 kolom ≤640 px; tiap kartu memuat profile/teks/tautan tanpa overlap; foto 64×64 px `object-fit: contain`; 0 horizontal overflow baik saat load maupun setelah interaksi di delapan viewport. |
| Navigasi & regresi | Navbar memuat `Ulasan`, footer memuat `Ulasan Pelanggan`, keduanya menuju `#ulasan`; 18 anchor internal rusak = 0; 15 section; 22 tautan `wa.me` masih memakai `6287896102009` atau katalog `/c/`; 7 FAQ; 5 carousel; 9 kartu YouTube dengan indikator `5 / 9`; kartu Catering masih scroll ke `#menu-catering`; hyperlink layanan revisi 18, Maps lazy, dan promo/Escape tetap lolos. 0 console error dan 0 page error; 317/317 PASS. |
| Screenshot | Delapan file before/after 320/390/430/1440 px dibuat dari browser sungguhan, semua ada dengan ukuran > 0; verifikasi visual langsung tidak tersedia, jadi geometri, teks, dan dimensi dicek programatis. |

## Revisi 21: Perbaikan Layout Ulasan Pelanggan

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev21-ulasan-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, delapan viewport 320/360/390/430/640/768/1024/1440 px), `docs/markdown-file/REVISION-GOOGLE-REVIEWS.md`, OCR Windows untuk satu foto sertifikat, dan screenshot before/after di `screenshots/31-perbaikan-layout-ulasan/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & sumber | 5 PNG lokal tetap tidak diubah, dimensi natural benar, dan 5/5 termuat tanpa broken image; 70/70 gambar di DOM. Nama, waktu relatif, 5 bintang, isi teks, short link, dan path foto persis sumber. Alt Farisa memakai "Sertifikat aqiqah..." berdasarkan OCR; empat foto lain memakai alt provenan `Foto bukti ulasan <nama> di Google Maps` sesuai keputusan pemesan karena isi visual tidak dapat diverifikasi model. |
| Kartu & aksesibilitas | Avatar inisial UA/VS/FA/CS/SA berukuran 46 px dan lingkaran; tidak ada lagi foto yang dipakai sebagai avatar. Foto bukti menjadi elemen tersendiri dengan rasio 4:3 dan `object-fit: cover` pada thumbnail, sementara lightbox global tetap membuka file asli `contain`. Isi panjang dibatasi 6 baris; tombol **Baca selengkapnya** hanya muncul saat `scrollHeight > clientHeight`, berubah menjadi **Tampilkan lebih sedikit**, memakai `aria-expanded`/`aria-controls`, dan bisa dibuka/tutup. Teks, tautan, dan toggle memakai `var(--muted)` dengan kontras 5,96:1 di atas kartu putih; fokus emas 3 px dan target sentuh ≥44 px tetap ada. |
| Layout & navigasi | Grid 3/2/1 kolom (>900/641–900/≤640 px); kartu tidak lagi diregangkan `height: 100%`, foto tidak melewati kotak 4:3, dan tidak ada overlap. `#ulasan` memakai `scroll-margin-top` 94 px desktop / 84 px mobile sehingga anchor tidak tertutup header sticky; heading memakai `text-wrap: balance`. 0 horizontal overflow baik saat load, setelah toggle, maupun setelah navigasi mobile di delapan viewport. |
| Regresi | 15 section; navbar `Ulasan` dan footer `Ulasan Pelanggan` menuju section; 18 anchor internal rusak = 0; 22 CTA WA memakai `6287896102009` atau katalog `/c/`; 7 FAQ; 5 carousel; 9 kartu YouTube dengan indikator `5 / 9`; kartu Catering scroll, hyperlink layanan revisi 18, Maps lazy, dan promo/Escape tidak berubah. 0 console error, 0 page error, 0 request gagal; 847/847 PASS. |
| Screenshot | Delapan file before/after 320/390/430/1440 px dibuat dari browser sungguhan, semua ada dengan ukuran > 0; geometri dan dimensi dicek programatis karena verifikasi visual langsung tidak tersedia. |

## Revisi 22: Carousel Ulasan Pelanggan

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev22-ulasan-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, delapan viewport 320/360/390/430/640/768/1024/1440 px), `docs/markdown-file/REVISION-GOOGLE-REVIEWS.md`, geometri `C:\Users\DELL\AppData\Local\Temp\opencode\rev22-after-geometry.json`, dan screenshot before/after di `screenshots/32-carousel-ulasan-google-maps/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset & sumber | 5 PNG lokal tetap tidak diubah, 5/5 termuat tanpa broken image, dan 70/70 gambar di DOM. Nama, waktu relatif, 5 bintang, isi teks `textContent`, short link, dan path foto 5/5 identik dengan Markdown. Teks yang sebelumnya terbagi oleh indentasi HTML dikembalikan ke satu baris sumber tanpa mengubah kata, tanda baca, emoji, atau `&amp;`. |
| Carousel & kontrol | Root carousel memakai `role="group"`, `aria-roledescription="carousel"`, dan label dari judul section. Viewport `overflow-x: auto` + `scroll-snap-type: x mandatory`, track `display: flex`, 5 slide, aktif awal indeks 2, dua tetangga, dan peek kartu samping terlihat. Indikator `3 / 5` sinkron; nav desktop mengubah ke `4 / 5` lalu `5 / 5` dan `next` disabled di akhir; ArrowRight/ArrowLeft serta swipe touch CDP mengubah slide dan scrollLeft. |
| Kartu & toggle | Lebar slide identik 205/250/275/320/360 px dan tinggi identik 524/538/557/593/623 px berturut-turut pada 320/390/430/768/1440 px. Avatar 46 px diukur dari `offsetWidth`/`offsetHeight` (bukan rect yang terskala), foto 4:3 `cover`, dan kontras teks/tautan/toggle AA tetap lolos. **Baca selengkapnya** muncul hanya saat `scrollHeight > clientHeight`, `aria-expanded`/`aria-controls` benar, teks penuh dapat digulir sampai bawah dengan `overflow-y: auto`, dan tinggi kelima kartu tidak berubah saat dibuka maupun ditutup. |
| Regresi | 15 section; navbar/footer ke `#ulasan`; 18 anchor internal rusak = 0; 22 CTA WA memakai `6287896102009` atau katalog `/c/`; 7 FAQ; 9 kartu YouTube dengan indikator `5 / 9`; 5 carousel lama plus carousel ulasan = 6 total; kartu Catering scroll, hyperlink layanan revisi 18, Maps lazy, dan promo/Escape tidak berubah. 0 console error, 0 page error, 0 request gagal; 981/981 PASS. |
| Screenshot | Sepuluh file before/after 320/390/430/768/1440 px dibuat dari browser sungguhan, semua ada dengan ukuran > 0 dan dimensi sesuai viewport. Verifikasi visual langsung tidak tersedia, sehingga geometri slide dan dimensi screenshot dicek programatis. |

## Revisi 23: Konten Harga & Petunjuk Kartu Layanan

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev23-konten-harga-qa.json` (Playwright Python + Chrome headless pada `http://127.0.0.1:8000/index.html`, delapan viewport 320/360/390/430/640/768/1024/1440 px), `docs/markdown-file/REVISION-PRICE-CONTENT.md`, geometri before/after `C:\Users\DELL\AppData\Local\Temp\opencode\rev23-before-geometry.json` dan `C:\Users\DELL\AppData\Local\Temp\opencode\rev23-after-geometry.json`, serta screenshot di `screenshots/33-revisi-konten-harga/`. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Konten & sumber | Teks lama (`Daftar Harga`, lead lama, 5 poin lama, fine-print lama) 0/6 muncul di `#harga`; teks baru 15/15 hadir, termasuk judul, alasan syariat, penutup, tiga judul paket, "Spesial Telur Rebus", "Voucher Spesial Cashback", dan promo Heboh. Tidak ada emoji, zero-width space, atau marker `[]` pada teks harga maupun petunjuk kartu. `\&` sumber dirender sebagai `&`, tanda `—` dipertahankan, dan ejaan tombol diperbaiki menjadi **Tanya Paket Spesial**. |
| Poster & CTA | Keempat `src` poster dan urutannya identik dengan before, masing-masing termuat `complete` dengan 1080×1350 natural; grid poster tidak diubah. CTA `#harga` berurutan **Tanya Harga Kambing**, **Tanya Paket Hemat**, **Tanya Paket Spesial**; href lama dipertahankan persis dan dua href baru memakai `https://wa.me/6287896102009?text=...`. Total CTA WhatsApp/katalog naik 22 → 24, semuanya memakai nomor atau katalog `6287896102009`. |
| Layout & kartu layanan | Pada implementasi awal revisi 23 deskripsi paket memakai grid 3/2/1 kolom; ini sudah diganti oleh koreksi `.price-copy` di bawah. Empat petunjuk "Klik untuk melihat detail" + SVG panah kanan-atas tetap berada di bawah isi tiap kartu, `pointer-events: none` pada teks dan ikon, dan tiap induk tetap `role="button"`, `tabindex="0"`, serta `aria-label` "Lihat ...". Klik kartu detail masih membuka `#package-lightbox`; kartu Catering masih scroll ke `#menu-catering`. |
| Regresi | 15 section; 70 gambar; 6 carousel; 9 kartu YouTube dengan indikator `5 / 9`; 7 FAQ; nav mobile, anchor internal, Maps lazy, promo/Escape, dan carousel ulasan `3 / 5` tidak berubah. 0 console error, 0 page error, 0 request gagal, 0 broken image, dan 0 overflow di delapan viewport; 1111/1111 PASS pada saat implementasi awal, sebelum koreksi `.price-copy` dan perubahan navbar eksternal. |
| Screenshot | Sepuluh file before/after 320/390/430/768/1440 px dibuat dari browser sungguhan, semua ada dengan ukuran > 0 dan dimensi sesuai viewport. Verifikasi visual langsung tidak tersedia, sehingga perubahan diverifikasi lewat `textContent`, atribut, geometri, dan dimensi screenshot. |

## Koreksi Revisi 23: Konsistensi `.price-copy` di `#harga`

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev24-price-copy-qa.json`, `C:\Users\DELL\AppData\Local\Temp\opencode\rev24-00-before-section-audit.json`, dan `C:\Users\DELL\AppData\Local\Temp\opencode\rev24-01-after-section-audit.json` (Playwright Python + Chrome headless, delapan viewport 320/360/390/430/640/768/1024/1440 px). Screenshot hanya mengambil elemen `#harga`, bukan halaman penuh, dan disimpan di `screenshots/34-konsistensi-price-copy/`.

| Pemeriksaan | Hasil |
| --- | --- |
| Struktur | Empat wrapper `.price-copy` langsung di `.price-grid`; 4 judul `h2`; 0 `h3`; 0 class `price-package*`; 7 list `check-list check-list-light`; paragraf hanya `.section-lead` atau `.price-subhead`. Judul, isi, dan urutan mengikuti sumber tanpa emoji. |
| Styling | Computed style `h2`, `.section-lead`, `.price-subhead`, `.check-list`, item list, dan tombol identik di keempat wrapper. Wrapper memakai `display: block`, tanpa background/border/radius/padding kartu, lebar dan posisi X identik, jarak antar anak grid 32 px di delapan viewport. Tidak ada CSS baru selain penghapusan aturan lama. |
| Konten & CTA | Seluruh baris sumber tetap ada (perbandingan case-insensitive untuk judul); keempat poster memuat utuh 1080×1350; tiga CTA tetap berurutan **Tanya Harga Kambing**, **Tanya Paket Hemat**, **Tanya Paket Spesial** dengan `6287896102009`; total CTA WhatsApp/katalog 24; Heboh tanpa CTA. |
| QA otomatis | 1177/1183 PASS di delapan viewport. 0 overflow, 0 broken image, 0 console/page error, 0 request gagal. Enam FAIL pada pemeriksaan lama "mobile nav has 9 links" terjadi di 320/360/390/430/640/768 px karena navbar aktif memuat 10 tautan (`#beranda` ditambahkan); kemudian diselesaikan pada Revisi 35 tanpa mengubah HTML navbar. |
| Screenshot | 16 file before/after delapan viewport tersimpan, semua ukuran > 0. Model QA tidak mendukung input gambar, jadi verifikasi visual manual tidak dilakukan; struktur dan styling diverifikasi programatis dari DOM dan computed style. |

## Revisi 35: Layout Flexbox & CTA Paket Heboh di `#harga`

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev35-layout-cta-qa.json`, `C:\Users\DELL\AppData\Local\Temp\opencode\rev35-00-before-section-audit.json`, dan `C:\Users\DELL\AppData\Local\Temp\opencode\rev35-01-after-section-audit.json` (Playwright Python + Chrome headless, delapan viewport 320/360/390/430/640/768/1024/1440 px). Screenshot hanya elemen `#harga`, bukan halaman penuh, di `screenshots/35-layout-cta-harga/`.

| Pemeriksaan | Hasil |
| --- | --- |
| Layout desktop | Pada 1024/1440 px, `.price-grid` ber-`display: flex` dan `flex-direction: row`. `.price-text` berada di kiri (kanan 557/820 px) sebelum `.price-gallery` di kanan (x 589/852 px). Kolom poster memiliki `y` dan `bottom` identik dengan rentang penuh teks (5756–9584 px dan 5648–9401 px), sehingga sejajar vertikal dengan seluruh konten teks. |
| Layout mobile/tablet | Pada 320/360/390/430/640/768 px, `flex-direction: column`; `.price-text` mendahului `.price-gallery` di DOM dan geometri. Poster pertama muncul setelah blok Heboh (misal 390 px: teks berakhir 13309 px, gallery mulai 13341 px), tidak ada poster yang menyela paragraf atau checklist. |
| Isi & CTA | Keempat blok `.price-copy`, 7 list `check-list check-list-light`, dan keempat poster asli dengan `src`/urutan identik dipertahankan. CTA `#harga` berurutan **Tanya Harga Kambing**, **Tanya Paket Hemat**, **Tanya Paket Spesial**, **Tanya Paket Heboh**; yang baru memakai `.btn.btn-gold` dan `https://wa.me/6287896102009?text=...paket%20heboh...`. Total CTA WhatsApp/katalog naik 24 → 25. |
| Navbar | Ekspektasi QA dan dokumentasi diperbarui dari 9 menjadi 10 tautan aktif karena `#beranda` benar-benar ada dan ditautkan; tidak ada tautan navbar yang dihapus atau diubah. |
| QA otomatis | **1225/1225 PASS** di delapan viewport. 0 FAIL, 0 overflow horizontal, 0 broken image, 0 console error, 0 page error, dan 0 request gagal. |
| Screenshot | 16 file before/after delapan viewport ada dengan ukuran > 0. Verifikasi visual manual tidak tersedia pada model QA, sehingga arah kolom, urutan DOM, dan rentang vertikal dicek dari DOM/computed style serta dimensi file. |

## Revisi 36: Poster Harga Satu Kolom

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\rev36-poster-satu-kolom-qa.json`, `C:\Users\DELL\AppData\Local\Temp\opencode\rev36-00-before-section-audit.json`, dan `C:\Users\DELL\AppData\Local\Temp\opencode\rev36-01-after-section-audit.json` (Playwright Python + Chrome headless, delapan viewport 320/360/390/430/640/768/1024/1440 px). Screenshot hanya elemen `#harga`, bukan halaman penuh, di `screenshots/36-poster-satu-kolom/`.

| Pemeriksaan | Hasil |
| --- | --- |
| Penyebab & perbaikan | `.price-gallery` memakai `grid-template-columns: repeat(2, minmax(0, 1fr))`, sehingga poster berpasangan dua kolom pada 768/1024/1440 px (misal 1440 px: x 852 dan 1092). Diubah menjadi `minmax(0, 1fr)`; pada ≤640 px aturan lama `1fr` tetap berlaku. Hanya satu baris CSS yang diubah. |
| Urutan poster | Urutan visual/DOM/caption/alt adalah **Harga Kambing → Paket Hemat → Paket Spesial → Paket Heboh** di delapan viewport. Dua `<figure>` ditukar di dalam `.price-gallery` karena CSS saja hanya mengubah visual, bukan urutan DOM/lightbox; container `.price-copy` tidak disentuh. |
| Geometri | `gridTemplateColumns` hanya satu track di semua lebar (misal 1024 px: `406.547px`; 1440 px: `460px`). Keempat poster memiliki x identik dan y menaik: 1024 px → y 5756/6309/6863/7417; 1440 px → y 5648/6268/6889/7509. Gap 20 px, atau 16 px di ≤640 px. |
| Teks & CTA | Perbandingan audit before/after menunjukkan `wrappers`, `headings`, `lists`, dan `ctas` identik. Seluruh baris sumber harga tetap ada, 4 `.price-copy`, 7 checklist, 4 tombol `.btn-gold` dengan href sama, dan 25 CTA WhatsApp/katalog situs. Tidak ada perubahan pada `.price-copy` atau section lain. |
| Layout utama | Desktop 1024/1440 px tetap `flex-direction: row`, teks di kiri dan poster di kanan; mobile/tablet ≤900 px tetap `column`, seluruh teks sebelum poster. Poster asli 1080×1350, `loading="lazy"`, dan 4 tombol zoom dengan `aria-label` "Perbesar ..." tetap ada. |
| QA otomatis | **1273/1273 PASS** di delapan viewport. 0 FAIL, 0 overflow horizontal, 0 broken image, 0 console error, 0 page error, dan 0 request gagal. Percobaan awal 8 FAIL hanya karena pemeriksaan ukuran poster dijalankan sebelum gambar `lazy` dimuat; pemeriksaan duplikat setelah gambar termuat sudah lolos, sehingga pemeriksaan awal yang terlalu cepat dihapus. |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` pada `css/style.css`, `index.html`, `docs/PRD.md`, dan `docs/QA-REPORT.md` lolos. Tidak ada build step pada proyek statis ini. |
| Screenshot | 16 file before/after delapan viewport ada dengan ukuran > 0. Verifikasi visual manual tidak tersedia pada model QA, sehingga satu kolom, urutan, dan x/y poster dicek dari DOM/computed style serta dimensi file. |

## Revisi 37: ruang kosong poster Hero desktop

Sumber: `C:\laragon\www\garasi_aqiqah_and_catering\screenshots\37-hero-poster-height\before-audit.json`, `after-audit.json`, dan `qa-report.json` (Playwright Python + Chrome headless). Screenshot hanya elemen `#beranda`, bukan halaman penuh, di `screenshots/37-hero-poster-height/`.

| Pemeriksaan | Hasil |
| --- | --- |
| Penyebab & perbaikan | `.hero-poster` desktop memakai `width: 522px; height: 752px`, sementara gambar render 520×649,7 px sehingga ada ruang kosong ±101,3 px di bawah poster. Satu deklarasi diubah menjadi `height: auto` pada `css/style.css:471`. Media query 901–1100 px tidak memuat deklarasi `.hero-poster`, dan media ≤900 px sudah `height: auto`, jadi keduanya tidak disentuh. |
| Geometri | Desktop 1024/1280/1440 px: tinggi `.hero-poster` 651,7 px, tinggi `.hero-visual` sama, jarak bawah gambar ke container 1 px (border), dan rasio render 0,8 sama dengan rasio asli. Mobile 390 px: geometri before/after identik (320×399,31 px). |
| Regresi | **129/129 PASS**. 0 broken image, 0 console error, 10 tautan navbar, 25 CTA WhatsApp/katalog, 4 poster harga, 7 FAQ, dan 0 anchor rusak pada 320/360/390/430/640/768/1024/1280/1440 px. Tidak ada overflow horizontal pada viewport yang diminta maupun delapan viewport standar QA. |
| Overflow 901 px | Overflow 33 px di 901/902 px bersifat bawaan dan identik saat tinggi lama 752 px disuntikkan kembali (33 px sebelum dan sesudah), berasal dari track carousel yang melebar tepat setelah breakpoint 900 px. Tidak diubah karena di luar ruang lingkup revisi ini. |
| Screenshot | 8 file before/after 390/1024/1280/1440 px ada dengan ukuran > 0. Verifikasi visual manual tidak tersedia pada model QA, sehingga ruang kosong dicek dari perbandingan `poster bottom` versus `image bottom`, computed style, dan dimensi file. |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` pada `css/style.css` lolos. `git diff --check` global masih melaporkan baris kosong di EOF `docs/markdown-file/REVISION-PRICE-CONTENT.md:133` dari revisi sebelumnya. Tidak ada commit/push. |

## Revisi 38: ulasan Google Louis Hasashi

Sumber: `C:\laragon\www\garasi_aqiqah_and_catering\screenshots\38-google-review-louis\qa-report.json`, `00-before-audit.json`, dan `01-after-audit.json` (Playwright Python + Chrome headless, delapan viewport 320/360/390/430/640/768/1024/1440 px). Screenshot hanya elemen `#ulasan`, bukan halaman penuh, di `screenshots/38-google-review-louis/`.

| Pemeriksaan | Hasil |
| --- | --- |
| Aset | Dua file asli ditemukan tanpa diubah: `assets/img/ulasan/fotoulasanlouis_01.jpg` (JPEG 9000×12000) dan `fotoulasanlouis_02.jpg` (JPEG 2160×3840). Keduanya dipakai langsung dengan atribut width/height sesuai dimensi asli. |
| Perubahan | Tepat satu `<article class="review-card">` ditambahkan di akhir `.review-grid`, sehingga jumlah kartu 5 → 6. Lima kartu lama, urutan, teks, foto, dan tautannya tidak diubah. Indikator sumber diperbarui `3 / 5` → `3 / 6`; JS sudah menghitung indeks awal secara dinamis sehingga tetap indeks 2. |
| Kartu Louis | Nama **Louis Hasashi**, 5 bintang (`aria-label="5 dari 5 bintang"`), isi ulasan persis sumber dengan `&amp;` hanya sebagai escape HTML, dan tautan persis `https://goo.gl/maps/jE39sGCzBV4N8HDLA?g_st=ac` dengan `target="_blank"` dan `rel="noopener noreferrer"`. Waktu relatif tidak diberikan pada source sehingga sengaja tidak dibuat-buat. |
| Dua foto | Kedua gambar berada dalam satu `.review-photo` pada kartu yang sama. Aturan baru `.review-photo-pair` membagi kotak 4:3 menjadi dua kolom; tinggi kartu semua slide tetap seragam per viewport. Kedua gambar dimuat dari path lokal asli dan dibungkus otomatis oleh tombol `.image-zoom` existing. |
| Lightbox & toggle | 2/2 foto Louis membuka `#package-lightbox` dengan `src` dan `alt` yang tepat, Escape menutup, fokus kembali ke trigger. Tombol **Baca selengkapnya** tampil karena teks terpotong 6 baris; klik mengubah ke **Tampilkan lebih sedikit**/`aria-expanded="true"`, klik lagi kembali. |
| Carousel | Indikator awal `3 / 6` dan kartu aktif indeks 2 di delapan viewport. Nav desktop (next/prev), keyboard Arrow, dan perubahan `scrollLeft` yang dipakai swipe mobile semuanya menggeser slide aktif. Nav tersembunyi di ≤900 px. |
| QA otomatis | **163/163 PASS**. 0 card ganda, 0 foto terpisah, 0 broken image, 0 console error, 0 page error, dan 0 overflow horizontal di delapan viewport. Screenshot before diambil ulang setelah server lokal kembali HTTP 200; audit akhir sebelum perubahan menunjukkan 0 broken image/console error. |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` pada `index.html`, `css/style.css`, `docs/PRD.md`, dan `docs/QA-REPORT.md` lolos; `git diff --check` global juga lolos dengan exit 0. Tidak ada commit/push. |
| Screenshot | 16 file before/after delapan viewport ada dengan ukuran > 0. Verifikasi visual manual tidak tersedia pada model QA, sehingga isi kartu, ukuran, dan interaksi dicek dari DOM/computed style serta dimensi file. |

## Revisi 39: kerapian footer

Sumber: `C:\laragon\www\garasi_aqiqah_and_catering\screenshots\39-footer-polish\` (Playwright Python + Chrome headless). Screenshot khusus elemen `footer.site-footer` diambil pada 360/420/640/641/768/900/1100/1280 px, dengan screenshot halaman penuh tambahan pada 360/1280 px.

| Pemeriksaan | Hasil |
| --- | --- |
| Konflik aturan | `AGENTS.md:20` mewajibkan target sentuh minimal 44 px, sementara permintaan awal memakai 40 px. Konflik dihentikan dan diputuskan oleh pemesan: seluruh link footer memakai **44 px**. Tidak ada file yang diubah sebelum keputusan tersebut. |
| Perubahan | `css/style.css`: `.footer-links li` `margin-bottom: 0`; `.footer-links a` `display: inline-flex`, `align-items: center`, `min-height: 44px`; deklarasi `display`/`align-items`/`min-height` dihapus dari `.footer-links a.footer-social-link` sehingga hanya `gap: 8px` yang tersisa; `.brand-footer .brand-name` `display: block`; aturan `.footer-grid > :first-child { grid-column: 1 / -1; }` ditambahkan di blok `@media (max-width: 900px)`. `index.html`: `.footer-bottom` dibungkus `<div class="container">` dengan isi identik. JS tidak diubah. |
| Ritme link | Sebelum: 7 link navigasi tinggi 20 px dan 4 link sosial 44 px; jarak antarlink 15,6 px/12,6 px/10 px. Sesudah: 11/11 link tinggi 44 px, `min-height: 44px`, `display: inline-flex`, `align-items: center`, `margin-bottom: 0`, dan 9/9 jarak antarlink 0 px pada delapan viewport. Font `0.91rem`, `gap: 8px`, warna hover emas, ikon 16 px, aria-label, href, target, dan rel tidak berubah. |
| Garis bawah | Sebelum tepi kiri border `.footer-bottom` berada di 20/0 px, sementara tepi teks grid berada di 48/28 px (18 px di ≤640 px). Sesudah kiri dan kanan border sama persis dengan tepi teks grid pada semua viewport. Jarak vertikal grid→border tetap 52 px (36 px di ≤640 px), diverifikasi dengan membandingkan DOM bersampul dan simulasi DOM lama tanpa sampul. |
| Brand footer | Sebelum `.brand-footer .brand-name` `display: none` di 420/360 px; sesudah `block` di semua viewport. Header tidak memiliki `.brand-name` dan tidak berubah; `.brand-name` global ≤420 px tidak dihapus. |
| Tablet | Uji injeksi CSS pada 900/768/641 px menunjukkan blok pertama memenuhi dua kolom, blok Navigasi/Hubungi sejajar di baris kedua, dan tinggi grid turun 585,03 px → 493,31 px tanpa sel kanan kosong. Aturan ini tidak berpengaruh pada 640/420/360 px: geometri identik saat `grid-column` ditimpa ke `auto`. |
| Interaksi | Tab focus menampilkan outline 2 px dengan offset 3 px; hover link berubah ke `var(--gold-light)`; anchor footer `#tentang` berfungsi; nav mobile 10 tautan; FAQ 7 item; promo tetap muncul setelah 2,2 detik, tertutup tombol, dan tersimpan di sessionStorage; Maps iframe `loading="lazy"` tetap dimuat saat kontak terlihat. |
| Regresi | **239/239 PASS**. 0 console error/warning, 0 page error, 0 broken image, dan 0 overflow horizontal pada viewport yang diuji maupun 320/390/430/1024/1440 px. Navbar 10 tautan, 25 CTA WhatsApp/katalog, 6 kartu ulasan, 7 FAQ, 4 poster harga, dan anchor internal tetap benar. Tidak ada perubahan pada konten footer, warna/padding `.site-footer`, rasio grid desktop, tautan sosial, maupun bagian lain. |
| Full page | Crop piksel di atas footer identik sebelum/sesudah pada 1280 px dan 360 px. Posisi awal footer juga identik (18893 px dan 26368 px); perubahan tinggi halaman hanya berasal dari tinggi footer yang membesar. |
| Screenshot | 20 file before/after ada dengan ukuran > 0. Verifikasi visual manual tidak tersedia pada model QA, sehingga geometri, computed style, dan interaksi diperiksa secara programatis; tema warna/kontras mengikuti aturan existing yang tidak diubah. |
| Pemeriksaan kode | `node --check js\main.js` exit 0; `git diff --check` pada `index.html`, `css/style.css`, `docs/PRD.md`, dan `docs/QA-REPORT.md` exit 0; `git diff --check` global exit 0. Tidak ada commit/push. |
| Catatan QA | Tiga FAIL awal berasal dari skrip QA, bukan website: ekspektasi jumlah jarak link salah (9, bukan 10), inferensi posisi footer memakai tinggi screenshot after untuk before, dan `ERR_CONNECTION_REFUSED` sporadis karena `python -m http.server` menangani banyak permintaan gambar parallel. Skrip diperbaiki menjadi 9 jarak, tinggi before/after masing-masing, dan pemuatan gambar berurutan; uji ulang 239/239 PASS. |

## Revisi SEO 01: optimasi performa gambar

Sumber: `C:\laragon\www\garasi_aqiqah_and_catering\screenshots\40-image-performance\` (Playwright Python + Chrome headless). Screenshot before/after diambil pada viewport 360/390/768/1280/1440 px dan halaman penuh 390/1280 px dengan server statis lokal yang sama.

| Pemeriksaan | Hasil |
| --- | --- |
| Ruang lingkup | Lima gambar besar dipilih secara selektif: banner `banner_01_baru.jpg`, dua foto dokumentasi `12.49.46.jpeg`/`12.49.47.jpeg`, dan dua foto ulasan Louis. Tidak ada gambar lain yang diubah. |
| Turunan | `fotoulasanlouis_01_preview.webp` `18.275.454 → 105.470` byte (9000×12000 → 720×960), `fotoulasanlouis_02_preview.webp` `2.528.464 → 72.386` byte (2160×3840 → 540×960), `dokumentasi_12-49-46_preview.webp` `862.610 → 168.184` byte (4096×3072 → 960×720), `dokumentasi_12-49-47_preview.webp` `792.468 → 152.406` byte (4096×3072 → 960×720), dan `banner_01_baru_preview.webp` `696.291 → 191.476` byte (1777×592 tetap). Total sumber `23.155.287` byte menjadi `689.922` byte; penghematan `22.465.365` byte. |
| File asli | Kelima file sumber tetap di lokasi asal, tidak ditimpa/dihapus/dinamai ulang. Skrip konversi mencatat `sourceUnchanged=true` dari verifikasi SHA-256; dua hash Louis: `39fa1ff92af07522336dd5b1f1795bce84316fa04fd500e77f33bedd8a3ac70f` dan `412030cc4811d19d5e7188543b268a7f2c96cce3e8cd4343b1c3b6e7497d6494`. |
| Perubahan kode | `index.html`: lima `src` thumbnail mengarah ke turunan WebP dan mendapat atribut `data-full-image` berisi path asli. `js/main.js:86`: `lightboxImage.src = imageSrc || img.dataset.fullImage || img.currentSrc || img.src;`. `css/style.css` tidak diubah; tidak ada teks, metadata SEO, atau struktur section yang berubah. |
| Lightbox | 5/5 thumbnail membuka `#package-lightbox` dengan `src`, `alt`, dan dimensi natural file asli, bukan WebP. Escape, backdrop/close, fokus kembali, dan scroll lock tetap berfungsi. |
| Transfer | Initial image bytes turun `2.862.602 → 2.357.787` pada 360/390/768 px dan `2.972.303 → 2.467.488` pada 1280/1440 px (hemat `504.815` byte). After-scroll turun ke `3.037.829` (360/768), `3.578.791` (390), dan `4.207.662` (1280/1440). All-forced turun `4.189.911` (360/1280), `7.236.739` (390), `2.552.730` (768), dan `24.783.445` byte (1440); angka all-forced bervariasi karena lazy/carousel, jadi primary metric adalah ukuran file. |
| Geometri | `docOverflow=0`, `broken=[]`, `console=[]`, dan `failed=[]` pada kelima viewport sebelum/sesudah. Lebar/tinggi, `object-fit`, dan `object-position` kelima target identik; banner tetap `contain`, foto tetap `cover`. |
| Screenshot | 14 file ada dengan ukuran > 0. Viewport 360/390/1280/1440 px identik piksel (`rms=0`, `changedPixelsOver8=0`). Viewport 768 px `rms=0.315` dan `changedPixelsOver8=0` di batas `[205,322,563,770]`. Full page 1280 px identik; full page 390 px `rms=15.887`, `changedPixelsOver8=81.070` atau `0,7682%`, terletak hanya di area banner dan poster paket. |
| Investigasi diff | Dua band diff full page 390 px bertepatan dengan banner yang dioptimasi dan poster paket yang tidak diubah. Recapture after dua kali identik piksel; replay respons gambar asli di browser menghasilkan screenshot yang sama persis dengan after, sehingga perbedaan pada screenshot before awal adalah artefak capture, bukan pergeseran layout atau regresi konten. Tidak ada inspeksi visual manusia; kesimpulan berdasarkan piksel, DOM, dan geometri. |
| QA interaksi | Skrip `verify-image-revision.py` exit 0; 390 px (19/19) dan 1280 px (18/18) keduanya `pass=true`, `failedChecks=[]`, promo `true`. Cakupan: 25 tautan WhatsApp/katalog, anchor internal, Maps lazy, FAQ, nav mobile, 5 thumbnail dan 5 lightbox asli, carousel ulasan, console bersih, dan sessionStorage promo. |
| Pemeriksaan kode | `node --check js\main.js` lolos; `git diff --check` lolos dengan hanya warning LF→CRLF. Tidak ada commit/push. |

## Revisi SEO 02: technical SEO

Sumber: `docs/PRD.md`, `docs/QA-REPORT.md`, `README.md`, `.htaccess`, `index.html`, `robots.txt`, `sitemap.xml`, `C:\Users\DELL\AppData\Local\Temp\opencode\technical-seo-before.json`, `technical-seo-after.json`, `technical-seo-compare.json`, dan `screenshots/41-technical-seo/` (Playwright Python + Chrome headless). Validasi hosting untuk www/non-www memakai `curl.exe -I -L` pada 22 November 2026. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Audit awal | Situs statis satu halaman (`index.html`); `robots.txt` dan `sitemap.xml` belum ada; canonical dan `og:url` belum ada; meta robots `index, follow`; `README.md` hanya satu baris identitas repo; `.htaccess` hanya security headers/CSP dan tidak memuat rewrite/redirect/canonical. Struktur heading 1 `h1`, 17 `h2`, 34 `h3`. |
| Hosting/hostname | `http://garasiaqiqah.com/` → 301 HTTPS; `https://www.garasiaqiqah.com/` → 301 ke `https://garasiaqiqah.com/`; URL HTTPS non-www 200. Tidak ada aturan `.htaccess` yang ditambahkan. Produksi saat audit masih WordPress/PHP 8.1.34/LiteSpeed dan menyajikan halaman lama: `/robots.txt` balas HTML 200 dengan `X-Robots-Tag: noindex, follow`, `/sitemap.xml` 301 ke `/sitemap_index.xml` (Yoast). File statis baru masih perlu dipublish ke hosting. |
| Perubahan | `index.html:14` mendapat satu `<link rel="canonical" href="https://garasiaqiqah.com/" />`; `robots.txt` baru berisi `User-agent: *`, `Allow: /`, dan `Sitemap: https://garasiaqiqah.com/sitemap.xml`; `sitemap.xml` baru berisi satu `<loc>https://garasiaqiqah.com/</loc>` dengan `lastmod` 2026-11-22. Tidak ada perubahan CSS, JS, structured data, teks, section, atau aset. |
| Validasi file | XML dapat di-parse, root namespace sitemap benar, tepat satu URL dan sesuai canonical. Canonical muncul sekali. Robots tidak memuat `Disallow`, mengizinkan semua crawler/aset publik, dan menunjuk sitemap HTTPS non-www. |
| Audit browser | 73 URL lokal HTTP 200; 19 anchor internal tanpa target rusak; 72 gambar tanpa broken image; 25 tautan `wa.me` semuanya memakai `6287896102009` atau katalog `/c/6287896102009`; 10 tautan navbar; 7 FAQ; satu iframe Maps dengan `loading="lazy"`. 0 console error/warning, 0 page error, 0 failed request lokal, 0 response lokal ≥400, dan 0 overflow horizontal di 360/390/768/1280/1440 px. |
| Regresi DOM | Perbandingan before/after menunjukkan semua metrik DOM selain canonical dan keberadaan `robots.txt`/`sitemap.xml` identik di kelima viewport: title, description, meta robots, `og:url`, heading, anchor, gambar, WA, navbar, FAQ, Maps, promo hidden, `scrollWidth`, dan `clientWidth`. Interaksi nav mobile (10 tautan, `aria-expanded=true`), FAQ (7 item, toggle bekerja), Maps lazy, dan promo (muncul setelah jeda, Escape menutup) identik. |
| Screenshot | 14 file before/after ada dengan ukuran > 0. Lima screenshot viewport identik piksel (`rms=0`, `changedPixelsOver8=0`). Full page 390 px `rms=0,022313` dan 0 piksel >8; full page 1280 px `rms=0,057186` dan 198 piksel >8 dalam kolom 1 px di x=1044, y=14479–14733, pada kartu tetangga carousel YouTube di `#galeri`. Tidak ada perubahan geometri/DOM; perbedaan full page bersifat render carousel, bukan perubahan layout. Verifikasi visual manusia tidak tersedia. |
| Pemeriksaan kode | `node --check js\main.js` exit 0; `git diff --check` exit 0 dengan satu warning LF→CRLF pada `index.html`. Tidak ada commit/push. |

## Revisi SEO 03: local SEO dan Kontak mobile

Sumber: `docs/PRD.md`, `docs/QA-REPORT.md`, `docs/REVISION-REPORT-04.md`, `index.html`, `css/style.css`, `C:\Users\DELL\AppData\Local\Temp\opencode\seo03-contact-qa.json`, dan `screenshots/42-local-seo-contact/` (Playwright Python + Chrome headless, 22 November 2026). Tidak ada file spesifikasi SEO03 terpisah di `docs/markdown-file/`; prompt pemesan dipakai sebagai acuan. Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Perubahan | Satu `<script type="application/ld+json">` ditambahkan tepat setelah canonical di `index.html`. Di blok `@media (max-width: 640px)` pada `css/style.css`, `.social-row` diubah dari `column` menjadi `row` dengan `align-items: center`, lalu `.social-row .social-link[href^="https://wa.me/c/"]` diberi `width: 100%`. Tidak ada perubahan pada footer, URL sosial, label, teks, section, aset, `robots.txt`, atau `sitemap.xml`. |
| JSON-LD | Tepat satu script dan berhasil di-`JSON.parse`. Isinya `@type: LocalBusiness`, nama `Garasi Aqiqah & Catering`, telepon `+6287896102009`, `url`/canonical `https://garasiaqiqah.com/`, `address.addressLocality: "Neroktog"`, `areaServed: ["Tangerang","Jakarta"]`, dan `hasMap: https://maps.app.goo.gl/VGqLYMEUFWWNDA3L8`. Tidak ada field jam buka, rating, ulasan, alamat lengkap, postal code, geo, atau email. |
| Ejaan lokal | JSON-LD memakai `Neroktog` sesuai instruksi. Teks lama di `index.html` yang masih memakai `Nerogtog` tidak diubah karena di luar scope revisi ini. |
| Kontak ≤640 px | `flexDirection=row`, `flexWrap=wrap`. Empat ikon (IG/FB/YouTube/TikTok) berada di satu baris dengan lebar 52×44 px, tanpa teks label yang terlihat. Tautan Katalog WA turun ke baris berikutnya dengan lebar sama dengan `.social-row` (354 px di 390 px dan 324 px di 360 px). |
| Desktop/tablet >640 px | `flexDirection=row`, Katalog WA tetap auto (135,39 px) dan tidak memenuhi row (560 px di 1440 px; 712 px di 768 px). Footer dan aturan `.footer-links` tidak tersentuh. |
| Regresi browser | 4/4 viewport `all_pass=true`: 360×800, 390×844, 768×1024, dan 1440×1000. `overflow=0`, `brokenImages=[]`, `console=[]`, `page_errors=[]`, `local_failed=[]`, `mapsLoading=lazy`, 5 tautan sosial di `.social-row`, 5 referensi WebP, 7 FAQ, dan semua tautan WA/katalog memakai `6287896102009`. |
| Screenshot | Empat file di `screenshots/42-local-seo-contact/` ada dengan ukuran > 0 dan dimensi sesuai viewport/section: 1440×949, 768×1375, 390×1390, 360×1389. Screenshot diambil setelah scroll ke `#kontak` dan jeda 3,5 detik untuk iframe Maps lazy. |
| Batas verifikasi | Model QA tidak menerima input gambar, jadi isi screenshot tidak dinilai secara visual; kesimpulan didasarkan pada file screenshot nyata, dimensi file, geometri DOM, dan log browser. Penilaian estetika visual manusia tetap diperlukan. |
| Pemeriksaan kode | `node --check js\main.js` exit 0; `git diff --check` exit 0 dengan warning LF→CRLF. Tidak ada commit/push. |

## Revisi SEO 04: on-page SEO

Sumber: `docs/PRD.md`, `docs/QA-REPORT.md`, `index.html`, `C:\Users\DELL\AppData\Local\Temp\opencode\seo04-audit.json`, `seo04-browser-qa.json`, dan `screenshots/43-on-page-seo/` (Playwright Python + Chrome headless, 22 November 2026). Tidak ada file spesifikasi SEO04 terpisah di `docs/markdown-file/`; prompt pemesan dipakai sebagai acuan. Tidak ada build step; `node --check`, `git diff --check`, dan validator SEO 02 dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Audit awal | `<title>` satu tag namun 61 karakter dan tanpa keyword lokasi; meta description 155 karakter, baru menyebut Tangerang. Heading 1/17/34/18 (`h1`–`h4`) tanpa lompat atau duplikat. 72 gambar semuanya punya alt; 17 tautan internal di HTML tanpa target rusak; tidak ada ID duplikat. Teks tubuh memuat `aqiqah` 157×, `tangerang` 18×, `jakarta` 6×, tetapi frasa `jasa aqiqah`, `aqiqah tangerang`, dan `aqiqah jakarta` belum ada di metadata. |
| Perubahan | Hanya enam field di `<head>`: `<title>`, `meta[name=description]`, `og:title`, `og:description`, `twitter:title`, dan `twitter:description`. Title menjadi `Jasa Aqiqah Tangerang & Jakarta | Garasi Aqiqah & Catering` (58 karakter); deskripsi menjadi `Jasa aqiqah halal di Tangerang & Jakarta: paket aqiqah, catering, nasi box, dan ayam bakar. Konsultasi & pesan via WhatsApp ke Garasi Aqiqah & Catering.` (152 karakter setelah di-decode). Ampersand pada atribut baru ditulis `&amp;` di sumber dan terbaca `&` di DOM. Tidak ada perubahan CSS, JS, aset, teks tubuh, section, atau klaim baru. |
| Metadata duplikat | DOM memuat tepat satu `title`, satu `meta[name=description]`, satu canonical, satu JSON-LD, satu `og:title`/`og:description`, dan satu `twitter:title`/`twitter:description`. Canonical `https://garasiaqiqah.com/`, robots/sitemap, dan blok `LocalBusiness` SEO 03 tidak berubah. Tidak ada `og:url` baru karena di luar scope SEO 04. |
| Heading | Tidak ada perubahan heading. Audit browser: `h1=1`, `h2=17`, `h3=34`, `h4=18`, `h5=0`, `h6=0`; tidak ada lompat level atau duplikat. Satu `h3` kosong existing dengan `id="lightbox-heading"` tetap ada dan sengaja tidak diubah agar lightbox tidak berubah. |
| Alt text | 72/72 gambar memiliki atribut `alt` tidak kosong dan deskriptif; tidak ada alt generik seperti `image`/`foto`/`gambar`. Alt tidak diubah karena audit tidak menemukan masalah. |
| Internal link | 17 tautan anchor di sumber HTML dan 19 tautan internal di DOM (termasuk yang dibuat JS) semuanya menuju ID yang ada; `broken=[]`. Tidak ada ID duplikat. Tidak ada penambahan link karena navigasi yang ada sudah deskriptif dan lengkap. |
| Relevansi & keyword | Keyword `Jasa Aqiqah Tangerang & Jakarta` kini ada di title serta `jasa aqiqah halal di Tangerang & Jakarta` di deskripsi; keduanya didukung `areaServed` JSON-LD dan konten ongkir Jakarta/Tangerang yang sudah disetujui. Teks tubuh tidak diubah, sehingga tidak ada keyword stuffing baru. Layanan yang disebut (paket aqiqah, catering, nasi box, ayam bakar) seluruhnya sudah ada di website. |
| Regresi browser | 4/4 viewport `all_pass=true` di 1440×1000, 768×1024, 390×844, dan 360×800. `overflow=0`, `brokenImages=[]`, `console=[]`, `page_errors=[]`, `local_failed=[]`, `mapsLoading=lazy`, 5 referensi WebP, 7 FAQ, semua tautan WA/katalog memakai `6287896102009`, dan 72 gambar tanpa alt kosong. |
| Screenshot | Empat file di `screenshots/43-on-page-seo/` ada dengan ukuran > 0: 1440×1000 (588.395 byte), 768×1024 (416.704 byte), 390×844 (305.806 byte), dan 360×800 (293.221 byte). Karena perubahan hanya di `<head>`, tampilan tidak berubah secara visual. |
| Batas verifikasi | Model QA tidak menerima input gambar, jadi screenshot tidak dinilai secara visual; kesimpulan didasarkan pada file screenshot nyata, dimensi file, geometri DOM, metadata, dan log browser. Penilaian estetika visual manusia tetap diperlukan. Validasi HTML bersifat struktural via parser/DOM, bukan validator W3C eksternal. |
| Pemeriksaan kode | `node --check js\main.js` exit 0; `git diff --check` exit 0 dengan warning LF→CRLF; validator canonical/robots/sitemap SEO 02 exit 0. Teks tubuh identik dengan `HEAD` (21.818 karakter). Tidak ada commit/push. |

## Audit W3C HTML Validator

Sumber: `docs/PRD.md`, `docs/QA-REPORT.md`, `index.html`, `C:\Users\DELL\AppData\Local\Temp\opencode\w3c-before.json`, `w3c-after.json`, `w3c-qa-before.json`, `w3c-qa-after.json`, `w3c-promo-before.json`, `w3c-promo-after.json`, dan `screenshots/04-final/` (validator W3C Nu + Playwright Python/Chrome headless, 22 November 2026). Tidak ada build step; `node --check` dan `git diff --check` dijalankan terpisah.

| Pemeriksaan | Hasil |
| --- | --- |
| Baseline | W3C Nu mengembalikan HTTP 200 dengan **39 error** dan **89 info**. Error: 13 `div[aria-label]` tanpa `role` yang diizinkan, 25 `img[src]` dengan spasi, dan satu `aside[role=dialog]`. Empty `h3#lightbox-heading` muncul sebagai info, bukan warning. |
| Akar masalah | Git archaeology menunjukkan perubahan SEO04 (`8594fce`) hanya menyentuh enam field `<head>`. Semua temuan W3C sudah ada sebelumnya, bukan regresi SEO04 atau navbar. |
| Perubahan ARIA | `role="img"` ditambahkan pada `.slogan` dan 6 `.review-stars`; `role="group"` ditambahkan pada 6 `.coverflow-viewport`. Total 19 `div[aria-label]` di DOM kini memakai `img` atau `group`; tidak ada label ARIA yang dihapus. |
| Perubahan URL | 25 `img[src]` dan 3 referensi `data-full-image`/`data-lightbox-image` dengan spasi diubah memakai `%20`. Nama file, folder, alt, dimensi, dan `loading` tidak diubah; tidak ada aset yang dipindahkan atau diganti. |
| Perubahan promo | `<aside class="promo" id="promo-modal" role="dialog">` diganti `<div>` dengan `class`, `id`, `role`, `aria-labelledby`, `aria-describedby`, `tabindex`, dan `hidden` identik. CSS class-based dan JS id-based sehingga perilaku tidak berubah. |
| Perubahan heading | `h3#lightbox-heading` diisi fallback `Tampilan gambar`, teks netral yang sudah dipakai heading tersembunyi di lightbox. JS tetap menimpa `textContent` saat lightbox info dibuka. |
| W3C setelah perbaikan | HTTP 200, **0 error**, **0 warning**, **88 info**. Satu info empty heading hilang; 88 info tersisa adalah trailing slash pada elemen void dan tidak diubah karena bukan error/warning. |
| QA browser | `w3c-qa.py` **11/11 PASS** di 1440/768/390 px: 0 broken image, 0 overflow, 0 console error, 19 labeled div valid, 6 rating labels utuh, carousel next/keyboard, anchor, lightbox, Escape, dan 0 referensi gambar berspasi. `w3c-promo-qa.py` **6/6 PASS**: promo muncul setelah jeda, `DIV[role=dialog]`, ARIA linkage utuh, CTA `6287896102009`, Escape menutup, 0 console error. |
| Regresi navbar | `navbar-animation-qa.py` **27/27 PASS**, termasuk animasi Normal↔Floating, klik tanpa hash/scroll, breakpoint 1101/1100, tablet/mobile, reduced motion, dan 0 console/page error. |
| Screenshot | Lima screenshot baru di `screenshots/04-final/` ada dengan ukuran > 0: desktop 1440×1000, tablet 768×1024, mobile 390×844, promo 1440×1000, dan lightbox 1440×1000. SHA-256 desktop/mobile/promo/lightbox before dan after identik, sehingga perbaikan markup tidak mengubah tampilan. |
| Batas verifikasi | Validator melaporkan struktur HTML, bukan estetika. Model QA tidak menerima input gambar, jadi screenshot tidak dinilai visually; kesimpulan visual didasarkan pada perbandingan hash piksel dan file nyata. Penilaian manusia tetap diperlukan. |
| Pemeriksaan kode | `node --check js\main.js` exit 0; `git diff --check` exit 0 dengan warning LF→CRLF. Diff ejaan alamat `Nerogtog`→`Neroktog` sudah ada sebelum audit ini dan sengaja tidak disentuh. Tidak ada commit/push. |

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
30. **Peek kartu video revisi 17 tidak terlihat setelah slide diubah ke 84vw (revisi ini).** Viewport carousel berada di dalam `.container` yang memiliki padding 18 px, sehingga pada 320 px lebarnya hanya 284 px; dengan slide 268,8 px, kartu tetangga seluruhnya tertutup padahal `84vw` sudah sesuai. Diagnosis geometri menunjukkan `prev.right = 9,8 px` sedangkan `viewport.left = 18 px`. Viewport carousel video dibuat full-bleed (`width: 100vw; margin-left: calc(50% - 50vw)`) hanya pada ≤640 px, sehingga peek menjadi ≈10–26 px tanpa overflow. Skrip QA juga diperbaiki dari beberapa FAIL palsu: urutan Menu Catering/Paket, pseudo-element dibandingkan dengan `offsetWidth` bukan rect yang ter-`scale`, target sentuh memakai `min-height`, popup YouTube dinormalisasi ke ID video, lazy image ditunggu benar-benar termuat, dan penantian `load state` popup YouTube dihapus karena URL sudah tersedia dari `expect_popup` sehingga tidak bergantung pada jaringan eksternal. Uji ulang 770/770 PASS.
31. **Skrip QA revisi 18 interim: dua pemeriksaan awal salah.** Kicker lightbox dibaca dengan `inner_text()` sehingga kembali `LAYANAN`/`GALERI` karena CSS `text-transform: uppercase`, bukan teks DOM yang berubah; perbandingan diubah memakai `casefold()`. Selektor `.gallery-grid.coverflow-track` awalnya juga menghitung carousel Menu Catering, sehingga jumlah foto galeri terbaca salah; ditambahkan `:not(.menu-catering-track)`. Uji ulang interpretasi interim 328/328 PASS; implementasi tersebut kemudian diganti sesuai klarifikasi pemesan. Bukan bug website.
32. **Skrip QA revisi 18 koreksi: pemeriksaan Enter awal salah (revisi ini).** Skrip menekan `h4` yang tidak focusable, sehingga key Event dikirim ke kartu yang masih fokus dari pemeriksaan sebelumnya; aset lightbox dan fokus setelah Escape tampak salah walaupun Website benar. Skrip diubah menekan kartu ber-`tabindex="0"` dan ditambah pemeriksaan `src` pada jalur keyboard. Sebelum koreksi Website, QA gagal 57/300 sesuai target yang salah; setelah koreksi Website dan skrip, 312/312 PASS. Bukan bug website.
33. **Skrip QA revisi 19: tiga asumsi skrip salah (revisi ini).** Tombol nav carousel tersembunyi via CSS sampai ≤900 px, sehingga klik nav pada 320/640 px mengalami timeout; skrip diubah menjadi `width > 900`. Ekspektasi urutan kelima carousel juga tertukar, dan pemeriksaan tumpukan internal memakai urutan vertikal mobile pada desktop padahal kartu desktop dua kolom; keduanya disesuaikan dengan DOM dan CSS existing. Setelah koreksi skrip, QA 844/844 PASS. Bukan bug website.

34. **Skrip QA revisi 20: dua asumsi skrip salah (revisi ini).** Pemeriksaan CTA WhatsApp mengira 4 tautan katalog `https://wa.me/c/6287896102009` sebagai nomor salah; skrip diperbaiki dengan menerima pola katalog. Pemeriksaan anchor navbar membaca posisi `#ulasan` 300 ms setelah klik, sebelum smooth scroll selesai; skrip diganti menunggu kondisi sampai `getBoundingClientRect().top` mendekati 0. Uji ulang: 317/317 PASS. Bukan bug website.

35. **Foto bukti ulasan terkena gaya lightbox global (revisi ini).** Skrip lightbox global membungkus semua `main img` dengan `<button class="image-zoom">`, sehingga aturan umum `.image-zoom img` menimpa `.review-photo img`: `object-fit` kembali `contain` dan tinggi gambar melebihi kotak 4:3. Diperbaiki dengan aturan scoped `.review-photo .image-zoom` / `.review-photo .image-zoom img`; lightbox tetap berfungsi. Skrip QA awal juga salah mengukur toggle yang `hidden` (rect 0) dan membalik kondisi "no text clipped when toggle hidden"; setelah koreksi skrip, uji ulang 847/847 PASS.

36. **Teks ulasan mengandung whitespace indentasi dan skrip QA mengukur elemen terskala (revisi ini).** Lima `<p class="review-text">` masih memuat newline/indentasi HTML sehingga `textContent` tidak persis satu baris seperti Markdown; kelima teks dikembalikan ke satu baris tanpa mengubah isi. Skrip QA Revisi22 awal juga mengukur avatar via `getBoundingClientRect()` sehingga terkena `scale(0.88/0.93)` carousel, mengira lebar 40,48/42,78 px, serta membatasi lebar slide 400 px padahal 64vw di 640 px = 410 px. Pengukuran avatar diganti `offsetWidth`/`offsetHeight` dan batas proporsional memakai 75% lebar viewport. Uji ulang: 981/981 PASS. Bukan bug fungsi website setelah koreksi markup.

37. **Skrip QA koreksi `.price-copy`: tiga ekspektasi mengikuti baseline saat ini.** Perbandingan baris sumber memakai `casefold()` karena Markdown menulis judul huruf kapital sementara HTML memakai huruf judul. Perbandingan isi ulasan menormalkan whitespace indentasi karena `<p class="review-text">` saat ini kembali dibungkus beberapa baris; isi identik setelah normalisasi dan HTML tidak diubah. Pemeriksaan lama "mobile nav has 9 links" FAIL di enam viewport karena navbar aktif memuat 10 tautan termasuk `#beranda`; pada Revisi 35 ekspektasi QA dan dokumentasi diperbarui ke 10 tautan sesuai struktur aktif, tanpa menghapus tautan navbar.

Tidak ada bug fungsional yang tersisa pada scope `#harga`; seluruh 1225 pemeriksaan Revisi 35 lolos.

Catatan verifikasi Revisi 23 dan koreksinya: `git diff --check` pada seluruh working tree saat itu exit 2 karena `docs/markdown-file/REVISION-PRICE-CONTENT.md` memiliki baris kosong di akhir file. File sumber tersebut sudah dalam kondisi tersebut saat dibaca dan sengaja tidak diubah agar teks pemesan tetap utuh. Pemeriksaan yang dibatasi pada `css/style.css`, `index.html`, `docs/PRD.md`, dan `docs/QA-REPORT.md` exit 0; `node --check js\main.js` juga exit 0. Pemeriksaan ulang final Revisi 35 menghasilkan 1225/1225 PASS, scoped `git diff --check` exit 0, dan global `git diff --check` saat itu exit 2 hanya pada baris kosong EOF file sumber tersebut; verifikasi Revisi 38 menunjukkan global exit 0.

## Fitur yang belum selesai / tidak tersedia

- Teks asli WordPress untuk Tentang Kami tidak dapat dipulihkan karena folder `references/` tidak ada. Teks Tentang Kami lengkap sudah disediakan pemesan pada revisi 06.
- `docs/VISUAL-AUDIT.md` tidak tersedia di workspace.
- Screenshot tidak dapat dinilai secara visual oleh model yang menjalankan QA (tanpa dukungan input gambar), termasuk folder `16-image-lightbox-coverflow`, `17-service-card-carousel`, `18-price-list-package-image`, `19-menu-catering-section`, `20-menu-catering-social-footer`, `21-mobile-ui-ux-revision`, `22-contact-social-icons`, `23-galeri-dokumentasi`, `24-galeri-dua-kategori`, `25-dokumentasi-video-youtube`, `26-optimasi-mobile-youtube`, `27-service-photo-preview` (interpretasi interim), dan `28-koreksi-hyperlink-layanan`, serta `29-tambah-video-youtube`, `30-ulasan-google-maps`, `31-perbaikan-layout-ulasan`, `32-carousel-ulasan-google-maps`, `33-revisi-konten-harga`, `34-konsistensi-price-copy`, `35-layout-cta-harga`, `36-poster-satu-kolom`, dan `39-footer-polish`, serta `40-image-performance` dan `42-local-seo-contact`, serta `43-on-page-seo`. Validasi dilakukan secara programatis: file ada, ukuran > 0, geometri elemen diverifikasi melalui Playwright, dan dimensi screenshot dicek dengan Pillow; OCR Windows dipakai pada folder lama bila teks kunci perlu dicek, dan QR di-decode dengan zxing-cpp. Pada revisi 17, OCR Windows hanya mengenali teks 4/6 thumbnail pada crop DPR 2; dua lainnya juga gagal dikenali dari file asli sehingga keterbacaan teks tersebut tidak dapat dipastikan secara OCR, hanya dipastikan tidak terpotong oleh layout.
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
| `screenshots/04-final/` | `w3c-valid-desktop-1440.png` | 1440×1000 |
| `screenshots/04-final/` | `w3c-valid-tablet-768.png` | 768×1024 |
| `screenshots/04-final/` | `w3c-valid-mobile-390.png` | 390×844 |
| `screenshots/04-final/` | `w3c-valid-promo-1440.png` | 1440×1000 |
| `screenshots/04-final/` | `w3c-valid-lightbox-1440.png` | 1440×1000 |
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
| `screenshots/26-optimasi-mobile-youtube/` | `00-before-320px.png` | 320×1240 |
| `screenshots/26-optimasi-mobile-youtube/` | `00-before-390px.png` | 390×1289 |
| `screenshots/26-optimasi-mobile-youtube/` | `00-before-430px.png` | 430×1301 |
| `screenshots/26-optimasi-mobile-youtube/` | `00-before-1440px.png` | 1440×1557 |
| `screenshots/26-optimasi-mobile-youtube/` | `01-after-320px.png` | 320×1385 |
| `screenshots/26-optimasi-mobile-youtube/` | `01-after-390px.png` | 390×1483 |
| `screenshots/26-optimasi-mobile-youtube/` | `01-after-430px.png` | 430×1513 |
| `screenshots/26-optimasi-mobile-youtube/` | `01-after-1440px.png` | 1440×1557 |
| `screenshots/27-service-photo-preview/` | `00-before-320px.png` | 284×2271 |
| `screenshots/27-service-photo-preview/` | `00-before-390px.png` | 354×1918 |
| `screenshots/27-service-photo-preview/` | `00-before-768px.png` | 712×1094 |
| `screenshots/27-service-photo-preview/` | `00-before-1024px.png` | 968×1024 |
| `screenshots/27-service-photo-preview/` | `00-before-1440px.png` | 1184×952 |
| `screenshots/27-service-photo-preview/` | `01-after-320px.png` | 284×2751 |
| `screenshots/27-service-photo-preview/` | `01-after-390px.png` | 354×2398 |
| `screenshots/27-service-photo-preview/` | `01-after-768px.png` | 712×1501 |
| `screenshots/27-service-photo-preview/` | `01-after-1024px.png` | 968×1504 |
| `screenshots/27-service-photo-preview/` | `01-after-1440px.png` | 1184×1432 |
| `screenshots/27-service-photo-preview/` | `02-modal-kambing-390px.png` | 390×844 |
| `screenshots/27-service-photo-preview/` | `03-modal-souvenir-390px.png` | 390×844 |
| `screenshots/27-service-photo-preview/` | `02-modal-kambing-1440px.png` | 1440×1000 |
| `screenshots/27-service-photo-preview/` | `03-modal-souvenir-1440px.png` | 1440×1000 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `00-before-320px.png` | 284×2751 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `00-before-390px.png` | 354×2398 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `00-before-768px.png` | 712×1501 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `00-before-1024px.png` | 968×1504 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `00-before-1440px.png` | 1184×1432 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `01-after-320px.png` | 284×2271 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `01-after-390px.png` | 354×1918 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `01-after-768px.png` | 712×1094 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `01-after-1024px.png` | 968×1024 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `01-after-1440px.png` | 1184×952 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `02-modal-kambing-390px.png` | 390×844 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `03-modal-souvenir-390px.png` | 390×844 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `02-modal-kambing-1440px.png` | 1440×1000 |
| `screenshots/28-koreksi-hyperlink-layanan/` | `03-modal-souvenir-1440px.png` | 1440×1000 |
| `screenshots/29-tambah-video-youtube/` | `00-before-320px.png` | 320×474 |
| `screenshots/29-tambah-video-youtube/` | `00-before-390px.png` | 390×446 |
| `screenshots/29-tambah-video-youtube/` | `00-before-430px.png` | 430×490 |
| `screenshots/29-tambah-video-youtube/` | `00-before-1440px.png` | 1232×441 |
| `screenshots/29-tambah-video-youtube/` | `01-after-320px.png` | 320×474 |
| `screenshots/29-tambah-video-youtube/` | `01-after-390px.png` | 390×446 |
| `screenshots/29-tambah-video-youtube/` | `01-after-430px.png` | 430×490 |
| `screenshots/29-tambah-video-youtube/` | `01-after-1440px.png` | 1232×524 |
| `screenshots/30-ulasan-google-maps/` | `00-before-320px.png` | 320×1376 |
| `screenshots/30-ulasan-google-maps/` | `00-before-390px.png` | 390×1393 |
| `screenshots/30-ulasan-google-maps/` | `00-before-430px.png` | 430×1325 |
| `screenshots/30-ulasan-google-maps/` | `00-before-1440px.png` | 1440×861 |
| `screenshots/30-ulasan-google-maps/` | `02-after-320px.png` | 320×2715 |
| `screenshots/30-ulasan-google-maps/` | `02-after-390px.png` | 390×2658 |
| `screenshots/30-ulasan-google-maps/` | `02-after-430px.png` | 430×2765 |
| `screenshots/30-ulasan-google-maps/` | `02-after-1440px.png` | 1440×1475 |
| `screenshots/31-perbaikan-layout-ulasan/` | `00-before-320px.png` | 320×2715 |
| `screenshots/31-perbaikan-layout-ulasan/` | `00-before-390px.png` | 390×2658 |
| `screenshots/31-perbaikan-layout-ulasan/` | `00-before-430px.png` | 430×2765 |
| `screenshots/31-perbaikan-layout-ulasan/` | `00-before-1440px.png` | 1440×1475 |
| `screenshots/31-perbaikan-layout-ulasan/` | `02-after-320px.png` | 320×3071 |
| `screenshots/31-perbaikan-layout-ulasan/` | `02-after-390px.png` | 390×3118 |
| `screenshots/31-perbaikan-layout-ulasan/` | `02-after-430px.png` | 430×3220 |
| `screenshots/31-perbaikan-layout-ulasan/` | `02-after-1440px.png` | 1440×1620 |
| `screenshots/32-carousel-ulasan-google-maps/` | `00-before-320px.png` | 320×25682 |
| `screenshots/32-carousel-ulasan-google-maps/` | `00-before-390px.png` | 390×25031 |
| `screenshots/32-carousel-ulasan-google-maps/` | `00-before-430px.png` | 430×25109 |
| `screenshots/32-carousel-ulasan-google-maps/` | `00-before-768px.png` | 768×20389 |
| `screenshots/32-carousel-ulasan-google-maps/` | `00-before-1440px.png` | 1440×18194 |
| `screenshots/32-carousel-ulasan-google-maps/` | `02-after-320px.png` | 320×23609 |
| `screenshots/32-carousel-ulasan-google-maps/` | `02-after-390px.png` | 390×22860 |
| `screenshots/32-carousel-ulasan-google-maps/` | `02-after-430px.png` | 430×22855 |
| `screenshots/32-carousel-ulasan-google-maps/` | `02-after-768px.png` | 768×19302 |
| `screenshots/32-carousel-ulasan-google-maps/` | `02-after-1440px.png` | 1440×17695 |
| `screenshots/33-revisi-konten-harga/` | `00-before-320px.png` | 320×23609 |
| `screenshots/33-revisi-konten-harga/` | `00-before-390px.png` | 390×22860 |
| `screenshots/33-revisi-konten-harga/` | `00-before-430px.png` | 430×22855 |
| `screenshots/33-revisi-konten-harga/` | `00-before-768px.png` | 768×19302 |
| `screenshots/33-revisi-konten-harga/` | `00-before-1440px.png` | 1440×17695 |
| `screenshots/33-revisi-konten-harga/` | `01-after-320px.png` | 320×27057 |
| `screenshots/33-revisi-konten-harga/` | `01-after-390px.png` | 390×25868 |
| `screenshots/33-revisi-konten-harga/` | `01-after-430px.png` | 430×25628 |
| `screenshots/33-revisi-konten-harga/` | `01-after-768px.png` | 768×21126 |
| `screenshots/33-revisi-konten-harga/` | `01-after-1440px.png` | 1440×18805 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-320px.png` | 320×5640 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-360px.png` | 360×5524 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-390px.png` | 390×5497 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-430px.png` | 430×5462 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-640px.png` | 640×6109 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-768px.png` | 768×3387 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-1024px.png` | 1024×3567 |
| `screenshots/34-konsistensi-price-copy/` | `00-before-harga-1440px.png` | 1440×3270 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-320px.png` | 320×6674 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-360px.png` | 360×6596 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-390px.png` | 390×6589 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-430px.png` | 430×6472 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-640px.png` | 640×6916 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-768px.png` | 768×4713 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-1024px.png` | 1024×5048 |
| `screenshots/34-konsistensi-price-copy/` | `01-after-harga-1440px.png` | 1440×5363 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-320px.png` | 320×6674 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-360px.png` | 360×6596 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-390px.png` | 390×6589 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-430px.png` | 430×6472 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-640px.png` | 640×6916 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-768px.png` | 768×4713 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-1024px.png` | 1024×5048 |
| `screenshots/35-layout-cta-harga/` | `00-before-harga-1440px.png` | 1440×5363 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-320px.png` | 320×6734 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-360px.png` | 360×6656 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-390px.png` | 390×6649 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-430px.png` | 430×6532 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-640px.png` | 640×6977 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-768px.png` | 768×4773 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-1024px.png` | 1024×4022 |
| `screenshots/35-layout-cta-harga/` | `01-after-harga-1440px.png` | 1440×3947 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-320px.png` | 320×6734 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-360px.png` | 360×6656 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-390px.png` | 390×6649 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-430px.png` | 430×6532 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-640px.png` | 640×6977 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-768px.png` | 768×4773 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-1024px.png` | 1024×4022 |
| `screenshots/36-poster-satu-kolom/` | `00-before-harga-1440px.png` | 1440×3947 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-320px.png` | 320×6734 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-360px.png` | 360×6656 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-390px.png` | 390×6649 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-430px.png` | 430×6532 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-640px.png` | 640×6977 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-768px.png` | 768×7559 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-1024px.png` | 1024×4022 |
| `screenshots/36-poster-satu-kolom/` | `01-after-harga-1440px.png` | 1440×3947 |
| `screenshots/37-hero-poster-height/` | `before-hero-390px.png` | 390×1760 |
| `screenshots/37-hero-poster-height/` | `before-hero-1024px.png` | 1024×1392 |
| `screenshots/37-hero-poster-height/` | `before-hero-1280px.png` | 1280×1368 |
| `screenshots/37-hero-poster-height/` | `before-hero-1440px.png` | 1440×1386 |
| `screenshots/37-hero-poster-height/` | `after-hero-390px.png` | 390×1760 |
| `screenshots/37-hero-poster-height/` | `after-hero-1024px.png` | 1024×1392 |
| `screenshots/37-hero-poster-height/` | `after-hero-1280px.png` | 1280×1368 |
| `screenshots/37-hero-poster-height/` | `after-hero-1440px.png` | 1440×1386 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-320px.png` | 320×998 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-360px.png` | 360×971 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-390px.png` | 390×948 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-430px.png` | 430×966 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-640px.png` | 640×1003 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-768px.png` | 768×1010 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-1024px.png` | 1024×1032 |
| `screenshots/38-google-review-louis/` | `00-before-ulasan-1440px.png` | 1440×1122 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-320px.png` | 320×998 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-360px.png` | 360×971 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-390px.png` | 390×948 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-430px.png` | 430×966 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-640px.png` | 640×1003 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-768px.png` | 768×1010 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-1024px.png` | 1024×1032 |
| `screenshots/38-google-review-louis/` | `01-after-ulasan-1440px.png` | 1440×1122 |
| `screenshots/39-footer-polish/` | `before-footer-1280px.png` | 1280×511 |
| `screenshots/39-footer-polish/` | `before-footer-1100px.png` | 1100×511 |
| `screenshots/39-footer-polish/` | `before-footer-900px.png` | 900×773 |
| `screenshots/39-footer-polish/` | `before-footer-768px.png` | 768×773 |
| `screenshots/39-footer-polish/` | `before-footer-641px.png` | 641×806 |
| `screenshots/39-footer-polish/` | `before-footer-640px.png` | 640×908 |
| `screenshots/39-footer-polish/` | `before-footer-420px.png` | 420×908 |
| `screenshots/39-footer-polish/` | `before-footer-360px.png` | 360×930 |
| `screenshots/39-footer-polish/` | `before-fullpage-1280px.png` | 1280×19404 |
| `screenshots/39-footer-polish/` | `before-fullpage-360px.png` | 360×27298 |
| `screenshots/39-footer-polish/` | `after-footer-1280px.png` | 1280×488 |
| `screenshots/39-footer-polish/` | `after-footer-1100px.png` | 1100×488 |
| `screenshots/39-footer-polish/` | `after-footer-900px.png` | 900×658 |
| `screenshots/39-footer-polish/` | `after-footer-768px.png` | 768×658 |
| `screenshots/39-footer-polish/` | `after-footer-641px.png` | 641×691 |
| `screenshots/39-footer-polish/` | `after-footer-640px.png` | 640×947 |
| `screenshots/39-footer-polish/` | `after-footer-420px.png` | 420×947 |
| `screenshots/39-footer-polish/` | `after-footer-360px.png` | 360×969 |
| `screenshots/39-footer-polish/` | `after-fullpage-1280px.png` | 1280×19381 |
| `screenshots/39-footer-polish/` | `after-fullpage-360px.png` | 360×27337 |
| `screenshots/40-image-performance/before/` | `before-viewport-360x800.png` | 360×800 |
| `screenshots/40-image-performance/before/` | `before-viewport-390x844.png` | 390×844 |
| `screenshots/40-image-performance/before/` | `before-viewport-768x1024.png` | 768×1024 |
| `screenshots/40-image-performance/before/` | `before-viewport-1280x900.png` | 1280×900 |
| `screenshots/40-image-performance/before/` | `before-viewport-1440x1000.png` | 1440×1000 |
| `screenshots/40-image-performance/before/` | `before-fullpage-390px.png` | 390×27058 |
| `screenshots/40-image-performance/before/` | `before-fullpage-1280px.png` | 1280×19381 |
| `screenshots/40-image-performance/after/` | `after-viewport-360x800.png` | 360×800 |
| `screenshots/40-image-performance/after/` | `after-viewport-390x844.png` | 390×844 |
| `screenshots/40-image-performance/after/` | `after-viewport-768x1024.png` | 768×1024 |
| `screenshots/40-image-performance/after/` | `after-viewport-1280x900.png` | 1280×900 |
| `screenshots/40-image-performance/after/` | `after-viewport-1440x1000.png` | 1440×1000 |
| `screenshots/40-image-performance/after/` | `after-fullpage-390px.png` | 390×27058 |
| `screenshots/40-image-performance/after/` | `after-fullpage-1280px.png` | 1280×19381 |
| `screenshots/41-technical-seo/before/` | `before-viewport-360x800.png` | 360×800 |
| `screenshots/41-technical-seo/before/` | `before-viewport-390x844.png` | 390×844 |
| `screenshots/41-technical-seo/before/` | `before-viewport-768x1024.png` | 768×1024 |
| `screenshots/41-technical-seo/before/` | `before-viewport-1280x900.png` | 1280×900 |
| `screenshots/41-technical-seo/before/` | `before-viewport-1440x1000.png` | 1440×1000 |
| `screenshots/41-technical-seo/before/` | `before-fullpage-390px.png` | 390×27058 |
| `screenshots/41-technical-seo/before/` | `before-fullpage-1280px.png` | 1280×19381 |
| `screenshots/41-technical-seo/after/` | `after-viewport-360x800.png` | 360×800 |
| `screenshots/41-technical-seo/after/` | `after-viewport-390x844.png` | 390×844 |
| `screenshots/41-technical-seo/after/` | `after-viewport-768x1024.png` | 768×1024 |
| `screenshots/41-technical-seo/after/` | `after-viewport-1280x900.png` | 1280×900 |
| `screenshots/41-technical-seo/after/` | `after-viewport-1440x1000.png` | 1440×1000 |
| `screenshots/41-technical-seo/after/` | `after-fullpage-390px.png` | 390×27058 |
| `screenshots/41-technical-seo/after/` | `after-fullpage-1280px.png` | 1280×19381 |
| `screenshots/42-local-seo-contact/` | `01-desktop-1440-kontak.png` | 1440×949 |
| `screenshots/42-local-seo-contact/` | `02-tablet-768-kontak.png` | 768×1375 |
| `screenshots/42-local-seo-contact/` | `03-mobile-390-kontak.png` | 390×1390 |
| `screenshots/42-local-seo-contact/` | `04-mobile-360-kontak.png` | 360×1389 |
| `screenshots/43-on-page-seo/` | `01-desktop-1440.png` | 1440×1000 |
| `screenshots/43-on-page-seo/` | `02-tablet-768.png` | 768×1024 |
| `screenshots/43-on-page-seo/` | `03-mobile-390.png` | 390×844 |
| `screenshots/43-on-page-seo/` | `04-mobile-360.png` | 360×800 |
| `screenshots/44-navbar-desktop-split/` | `01-desktop-1440-normal.png` | 1440×1000 |
| `screenshots/44-navbar-desktop-split/` | `02-desktop-1440-split.png` | 1440×1000 |
| `screenshots/44-navbar-desktop-split/` | `03-desktop-1440-restored.png` | 1440×1000 |
| `screenshots/44-navbar-desktop-split/` | `04-desktop-1101-split.png` | 1101×900 |
| `screenshots/44-navbar-desktop-split/` | `05-tablet-768-scroll.png` | 768×1024 |
| `screenshots/44-navbar-desktop-split/` | `06-mobile-390-scroll.png` | 390×844 |
| `screenshots/45-navbar-floating-logo/` | `01-desktop-1440-normal.png` | 1440×1000 |
| `screenshots/45-navbar-floating-logo/` | `02-desktop-1440-split.png` | 1440×1000 |
| `screenshots/45-navbar-floating-logo/` | `03-desktop-1440-click-normal.png` | 1440×1000 |
| `screenshots/45-navbar-floating-logo/` | `04-desktop-1101-split.png` | 1101×900 |
| `screenshots/45-navbar-floating-logo/` | `05-tablet-768-scroll.png` | 768×1024 |
| `screenshots/45-navbar-floating-logo/` | `06-mobile-390-scroll.png` | 390×844 |
| `screenshots/46-navbar-animated-modes/` | `01-desktop-1440-normal.png` | 1440×1000 |
| `screenshots/46-navbar-animated-modes/` | `02-desktop-1440-floating.png` | 1440×1000 |
| `screenshots/46-navbar-animated-modes/` | `03-desktop-1440-click-normal.png` | 1440×1000 |
| `screenshots/46-navbar-animated-modes/` | `04-desktop-1440-cycle-split.png` | 1440×1000 |
| `screenshots/46-navbar-animated-modes/` | `05-desktop-1101-floating.png` | 1101×900 |
| `screenshots/46-navbar-animated-modes/` | `06-tablet-768-scroll.png` | 768×1024 |
| `screenshots/46-navbar-animated-modes/` | `07-mobile-390-scroll.png` | 390×844 |

Folder `44` adalah bukti historis desain Split full-width lama (desktop 1440 normal/split/restored, batas 1101, tablet 768, mobile 390). Folder `45` adalah bukti revisi navbar Split floating (desktop 1440 normal/split/saat klik logo, batas 1101, tablet 768, mobile 390) sesuai hasil QA 24/24 PASS. Folder `46` adalah bukti revisi animasi navbar (desktop 1440 normal/floating/saat klik/siklus ke-3, batas 1101, tablet 768, mobile 390); ketujuh screenshot diambil dari website yang dijalankan dan state halaman sesuai hasil QA 27/27 PASS.

Folder `33` adalah before/after revisi 23 konten harga dan petunjuk kartu layanan (320/390/430/768/1440 px), dengan `01-after` menangkap halaman setelah teks baru, tiga deskripsi paket, tiga CTA harga, dan empat petunjuk "Klik untuk melihat detail" diterapkan. Folder `34` adalah before/after koreksi konsistensi `.price-copy` (delapan viewport 320–1440 px), dengan `00-before` dan `01-after` menangkap hanya elemen `#harga` tanpa mengubah section lain. Folder `35` adalah before/after revisi 35 layout Flexbox teks-kiri/poster-kanan dan CTA **Tanya Paket Heboh** (delapan viewport 320–1440 px), juga hanya memotong elemen `#harga`. Folder `36` adalah before/after revisi 36 poster satu kolom dengan urutan Harga Kambing → Hemat → Spesial → Heboh (delapan viewport 320–1440 px), juga hanya memotong elemen `#harga`. Folder `37` adalah before/after perbaikan tinggi `.hero-poster` desktop (390/1024/1280/1440 px) dengan pemotongan hanya elemen `#beranda`. Folder `38` adalah before/after penambahan kartu ulasan Louis Hasashi dengan dua foto lokal (delapan viewport 320–1440 px), dengan pemotongan hanya elemen `#ulasan`. Folder `39` adalah before/after kerapian footer (delapan viewport 360–1280 px) dengan pemotongan elemen `footer.site-footer`, ditambah screenshot halaman penuh 360/1280 px untuk perbandingan regresi. Folder `40` adalah before/after optimasi performa gambar (viewport 360/390/768/1280/1440 px serta full page 390/1280 px); turunan WebP dipakai sebagai thumbnail, file asli tetap dipertahankan untuk lightbox. Folder `41` adalah before/after technical SEO (viewport 360/390/768/1280/1440 px serta full page 390/1280 px); canonical, `robots.txt`, dan `sitemap.xml` tidak mengubah tampilan, sehingga kelima screenshot viewport identik piksel. Folder `42` adalah bukti after revisi SEO 03 (section `#kontak` pada 360/390/768/1440 px); JSON-LD tidak terlihat, perubahan yang terlihat hanya baris ikon sosial dan Katalog WA penuh lebar di ≤640 px. Folder `43` adalah bukti after revisi SEO 04 (viewport 360/390/768/1440 px); hanya metadata di `<head>` yang berubah, sehingga tampilan viewport identik dengan kondisi setelah SEO 03.

Semua file diverifikasi ada dengan ukuran > 0 dan dihasilkan dari browser sungguhan via Playwright + Chrome headless. Folder `30` adalah before/after revisi 20 Ulasan Pelanggan Google Maps (320/390/430/1440 px), dengan `02-after` menangkap section `#ulasan` secara penuh. Folder `31` adalah before/after revisi 21 perbaikan layout `#ulasan` (320/390/430/1440 px), dengan `02-after` menangkap section setelah avatar inisial, foto bukti 4:3, dan toggle diterapkan. Folder `32` adalah before/after revisi 22 carousel `#ulasan` (320/390/430/768/1440 px), dengan `02-after` menangkap halaman setelah kelima kartu memakai Coverflow, indikator `3 / 5`, dan teks toggle yang menggulir di dalam kartu. Folder `06` adalah bukti historis sebelum maskot dipindahkan; folder `07` setelah pemindahan; folder `08` setelah badge halal dan QR terpisah di hero dihapus; folder `09` setelah Maps, navbar, dan favicon direvisi; folder `10` adalah presentation set dari GitHub Pages sebelum revisi copy ini; folder `12` adalah kondisi setelah revisi identitas usaha, copy hero, dan posisi banner hadits; folder `13` adalah kondisi setelah revisi 06 Tentang Kami, banner, produk, dan QR katalog; folder `14` adalah kondisi setelah revisi 07 layout Menu, card Paket ke-6, dan lightbox; folder `15` adalah kondisi setelah revisi 08 hardening lightbox; folder `16` adalah kondisi setelah revisi 09 lightbox global dan carousel Coverflow; folder `17` adalah kondisi setelah revisi 10 carousel terpusat dan kartu layanan terhubung ke detail; folder `18` adalah kondisi setelah revisi 11 price list dan gambar Paket Hemat; folder `19` adalah kondisi setelah revisi 12 Menu Catering; folder `20` adalah kondisi setelah revisi 12.1 koreksi 6 gambar Menu Catering dan sosial media footer; folder `21` adalah kondisi setelah revisi 13 kerapian hero mobile dan card Paket; folder `22` adalah kondisi setelah koreksi pemindahan ikon YouTube/TikTok dari FAQ ke Kontak Kami; folder `23` adalah kondisi setelah revisi 14 penggantian seluruh foto Galeri dengan dokumentasi asli; folder `24` adalah kondisi setelah revisi 15 penambahan kategori penyembelihan dan thumbnail 4:3 `cover`; folder `25` adalah kondisi setelah revisi 16 penambahan kategori video YouTube dengan card landscape dan deskripsi expandable; folder `26` adalah before/after revisi 17 optimasi mobile kategori video YouTube (320/390/430/1440 px); folder `27` adalah bukti historis interpretasi interim revisi 18 berupa foto kartu layanan (320/390/768/1024/1440 px) dan preview lightbox 390/1440 px; folder `28` adalah before/after koreksi final revisi 18 untuk dua hyperlink teks layanan (320/390/768/1024/1440 px) serta preview lightbox tanpa info/CTA 390/1440 px; folder `29` adalah before/after revisi 19 penambahan 3 video YouTube (320/390/430/1440 px). Total 202 screenshot. QA revisi ini dijalankan di `http://127.0.0.1:8000/index.html` karena perubahan belum dipublikasikan ke GitHub Pages.
