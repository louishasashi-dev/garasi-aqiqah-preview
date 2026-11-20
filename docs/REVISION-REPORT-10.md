# Laporan Revisi 10 — Garasi Aqiqah & Catering

Tanggal: 20 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan

Revisi ini menyempurnakan carousel Coverflow Revisi 09 dan menghubungkan keempat kartu **Layanan & Pilihan Paket Kami** di `#tentang` ke detail paket/galeri yang sudah ada. Kartu kini langsung membuka lightbox Revisi 09 bergambar, bukan hanya mengscroll ke section. Tidak ada aset, teks paket, harga, atau section lain yang diubah.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Atribut `data-detail-target` pada 4 kartu layanan dan `id` pada 4 target detail (1 paket, 3 galeri). |
| `css/style.css` | Ukuran slide carousel lebih ringkas/seragam, track `max-content`, alignment stretch, gaya fokus/hover kartu layanan, breakpoint 900/640 px. |
| `js/main.js` | Indeks tengah dinamis saat init, perhitungan posisi dari `offsetLeft`, pemicu lightbox untuk kartu layanan dengan fokus kembali ke kartu. |
| `docs/PRD.md` | Status revisi 10, mapping kartu layanan, carousel terpusat, kriteria penerimaan, dan `[KONFIRMASI]` baru. |
| `docs/QA-REPORT.md` | Hasil QA revisi 10, bug nav carousel, screenshot folder `17`, dan total 101 screenshot saat revisi 10. |
| `docs/REVISION-REPORT-10.md` | Laporan ini. |
| `screenshots/17-service-card-carousel/` | 11 screenshot desktop, tablet, dan mobile dari website yang dijalankan. |

Tidak ada file di `assets/` yang diubah, ditimpa, atau dihapus. Tidak ada library/CDN/framework/backend baru.

## 3. Pemetaan Kartu Layanan

| Kartu di `#tentang` | Target detail | Dasar pemetaan |
| --- | --- | --- |
| 1. Paket Aqiqah Nasi Box | `#detail-pilihan-terbaik` → Paket Pilihan Aqiqah Terbaik di `#paket` | Kartu menyebut Heboh, Hemat, dan Spesial; poster target merangkum ketiganya. |
| 2. Spesialis Kambing Masak | `#detail-olahan-kambing` → galeri "Olahan kambing" | Gambar dan caption galeri sesuai dengan olahan kambing pada kartu. |
| 3. Souvenir Super Lengkap | `#detail-souvenir` → galeri "Hadiah souvenir & sertifikat aqiqah" | Gambar Souvenir sesuai contoh pada permintaan. |
| 4. Catering & Nasi Box Acara | `#detail-ayam-bakar` → galeri "Paket Ayam Bakar" | Ayam Bakar disebut eksplisit pada teks kartu. Tidak ada foto katering/nasi box khusus di galeri; ditandai `[KONFIRMASI]`. |

Semua judul, caption, dan pesan WhatsApp berasal dari HTML existing. Tidak ada data baru yang dikarang.

## 4. Perubahan Teknis

- Carousel: `index` awal = `Math.floor((items.length - 1) / 2)` dihitung dari jumlah item, lalu `centerOn(index, false)` dipanggil sebelum dan sesudah frame pertama.
- Posisi scroll dihitung dari `offsetLeft`/`offsetWidth` dan `viewport.offsetLeft`, bukan bounding box yang berubah akibat `scale`.
- `.coverflow-track` memakai `width: max-content; min-width: 100%` agar padding kanan ikut memperpanjang area scroll; ini memperbaiki item terakhir yang berhenti 47 px dari tengah.
- Slide: desktop `min(360px, 32vw)`, tablet `min(320px, 46vw)`, mobile `64vw`; `align-items: stretch` menyamakan tinggi per carousel.
- Kartu layanan memakai `role="button"`, `tabindex="0"`, `aria-haspopup="dialog"`, `aria-controls`, dan `aria-label`; mouse/tap, Enter, dan Space memanggil `openLightbox` dengan fokus dikembalikan ke kartu.

## 5. QA Ulang

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless, device scale factor 1 (zoom 100%).

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 27/27 gambar siap; 0 broken; 0 console error; 0 request gagal; 0 response ≥400 |
| Posisi awal carousel | Kedua carousel aktif di indeks 2/6 dengan offset pusat 0 px di semua viewport |
| Ukuran & efek | Lebar seragam 360 px desktop, ≤320 px tablet, 64vw mobile; tinggi seragam per carousel; samping terlihat 22–335 px; transisi/opasitas tetap |
| Navigasi | Next/prev dan ArrowLeft/ArrowRight terpusat sampai indeks 5; disabled state benar; swipe mobile mengubah aktif ke indeks 3 |
| Kartu layanan | 4/4 mouse/tap dan keyboard membuka target tepat; gambar siap; kicker/WA sesuai; fokus kembali ke kartu; scroll lock pulih |
| Regresi Revisi 09 | 23 trigger gambar, 6 paket + 6 galeri, lightbox dua kolom, promo/Escape, nav mobile, FAQ, Maps lazy, anchor, 21 tautan WA lolos |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

Bug yang ditemukan dan diperbaiki pada revisi ini: nav carousel kedua tidak terpusat (47 px) karena lebar track dan perhitungan bounding box; diperbaiki seperti pada bagian 4. Satu FAIL awal pada QA promo juga terjadi karena skrip membaca status terlalu cepat, bukan bug website; setelah diberi jeda, Escape pertama menutup lightbox dan Escape kedua menutup promo.

## 6. Screenshot

Folder: `screenshots/17-service-card-carousel/`

- `01-desktop-top.png`, `02-desktop-service-cards.png`, `03-desktop-paket-carousel.png`
- `04-desktop-service-to-paket-lightbox.png`, `05-desktop-galeri-carousel.png`, `06-desktop-service-to-galeri-lightbox.png`
- `07-tablet-paket-carousel.png`
- `08-mobile-top.png`, `09-mobile-paket-carousel.png`, `10-mobile-service-to-galeri-lightbox.png`, `11-mobile-promo.png`

Semua file diverifikasi ada dan ukurannya > 0. Total screenshot proyek: 101. Model QA tidak memiliki input gambar, sehingga penilaian visual langsung tidak dilakukan; validasi screenshots bersifat programatis (file ada, ukuran > 0, dan geometri diverifikasi di browser).

## 7. Status Akhir

Revisi 10 selesai secara implementasi, QA, screenshot, dan dokumentasi. Website tetap statis, vanilla, dan tanpa perubahan aset. Perubahan belum di-commit, di-push, atau dipublikasikan.

## 8. Risiko & `[KONFIRMASI]`

- Belum ada foto katering/nasi box khusus di galeri; kartu ke-4 memakai detail Ayam Bakar yang memang disebut pada kartu. Perlu konfirmasi jika tersedia aset yang lebih tepat.
- Safari iOS tidak diuji langsung; Chrome/Chromium lolos di seluruh viewport.
- `index.html` dan `css/style.css` masih membawa perubahan formatting besar dari sesi sebelumnya; gunakan `git diff --ignore-all-space` saat meninjau diff fungsi.
