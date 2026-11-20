# Laporan Revisi 09 — Garasi Aqiqah & Catering

Tanggal: 20 November 2026
Status: selesai, siap ditinjau; belum dipublikasikan.

## 1. Ringkasan

Revisi ini menambahkan lightbox global untuk gambar konten dan carousel Coverflow pada `#paket` serta `#galeri`. Lightbox paket/galeri kini menampilkan info dari HTML existing dalam layout dua kolom di desktop dan tumpuk vertikal di mobile, dengan CTA WhatsApp kontekstual ke `6287896102009`. Tidak ada aset, teks paket, harga, testimoni, atau section lain yang diubah.

## 2. File yang Diubah

| File | Perubahan |
| --- | --- |
| `index.html` | Pembungkus `.coverflow` pada paket dan galeri; markup lightbox generik dengan `.lightbox-media` dan panel `#lightbox-info`. |
| `css/style.css` | Gaya `.image-zoom`, Coverflow, slide aktif/tetangga, nav, panel lightbox dua kolom, dan breakpoint ≤900/≤640 px. |
| `js/main.js` | Inisialisasi 23 trigger lightbox, info paket/galeri, WA dinamis, focus trap/scroll lock, dan kontrol carousel. |
| `docs/PRD.md` | Status revisi 09, struktur paket/galeri, lightbox global, Coverflow, responsive, aksesibilitas, pengujian, dan kriteria penerimaan. |
| `docs/QA-REPORT.md` | Hasil QA revisi 09, 21 tautan WA, 90 screenshot saat revisi 09, dan catatan skrip QA swipe. |
| `docs/REVISION-REPORT-09.md` | Laporan ini. |
| `screenshots/16-image-lightbox-coverflow/` | 10 screenshot desktop, tablet, dan mobile dari website yang dijalankan. |

Tidak ada file di `assets/` yang diubah, ditimpa, atau dihapus. Tidak ada library, CDN, framework, backend, atau font eksternal yang ditambahkan.

## 3. Keputusan Implementasi

- Lightbox memakai satu dialog existing `#package-lightbox`; tidak dibuat dialog kedua agar fokus, Escape, scroll lock, dan konflik promo tetap punya satu jalur logika.
- Gambar konten yang tidak berada di dalam `<a>` atau `.lightbox` dibungkus tombol `.image-zoom` dengan `aria-label`. QR katalog di dalam anchor tetap membuka katalog WhatsApp Business, bukan lightbox.
- Info paket diambil dari `.package-tag`, `h3`, `.package-tagline`, `.package-meta`, dan `.btn` pada kartu. Info galeri diambil dari `figcaption`. Tidak ada teks baru yang dikarang.
- Pesan WA paket memakai href CTA kartu yang sudah ada; pesan WA galeri dibuat dari caption: `Halo Garasi Aqiqah, saya ingin bertanya terkait foto <caption>.`
- Carousel memakai native scroll-snap plus JS untuk kelas aktif/tetangga, tombol nav, keyboard Arrow, dan recenter saat resize. Urutan 6 item paket dan 6 item galeri tidak diubah.
- Hardening revisi 08 dipertahankan: scroll lock, fokus kembali, `loading="eager"` pada gambar dialog, dan Escape lightbox lebih dulu sebelum promo.

## 4. QA Ulang

QA dijalankan di `http://127.0.0.1:8000/index.html` dengan Playwright Python + Chrome headless.

| Pemeriksaan | Hasil |
| --- | --- |
| 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px | 0 horizontal overflow; 27/27 gambar siap; 0 broken; 0 console error; 0 request gagal; 0 response ≥400 |
| Trigger lightbox | 23 gambar konten, 0 gambar konten tanpa wrapper di luar anchor/lightbox |
| Lightbox generik | `object-fit: contain`; gambar dalam viewport; close/backdrop/Escape; fokus masuk dan kembali; scroll lock pulih |
| Lightbox paket | 6/6 sesuai judul, tagline, meta, dan CTA kartu; label "Tanyakan terkait paket ini" |
| Lightbox galeri | 6/6 sesuai caption; label "Tanyakan terkait foto ini"; WA berisi caption |
| Focus trap | Tab dari close → CTA WA → close; Shift+Tab tetap di dialog |
| Coverflow desktop | Nav next/prev, ArrowLeft/ArrowRight, offset pusat 0 px, tetangga diskalakan ~0,93 dan opasitas ~0,78 |
| Coverflow mobile/tablet | Nav tersembunyi; swipe/scroll mengubah item aktif; offset pusat 0 px |
| Layout lightbox | Desktop dua kolom; mobile `column`, info di bawah gambar, CTA dalam viewport |
| Promo vs lightbox | Escape pertama menutup lightbox; promo tetap tampil; Escape kedua menutup promo |
| Regresi | Nav mobile, FAQ, Maps lazy, anchor, dan 21 tautan WA lolos |
| Pemeriksaan kode | `node --check js/main.js` lolos; `git diff --check` lolos |

Satu masalah pada skrip QA diperbaiki: simulasi sentuh awal dikirim sebelum carousel berada di viewport, sehingga swipe dilaporkan gagal. Setelah carousel discroll ke dalam layar, swipe berhasil. Ini bukan bug website.

## 5. Screenshot

Folder: `screenshots/16-image-lightbox-coverflow/`

- `01-desktop-top.png`, `02-desktop-paket-coverflow.png`, `03-desktop-paket-lightbox.png`
- `04-desktop-galeri-coverflow.png`, `05-desktop-galeri-lightbox.png`
- `06-tablet-paket-coverflow.png`
- `07-mobile-top.png`, `08-mobile-paket-coverflow.png`, `09-mobile-galeri-lightbox.png`, `10-mobile-promo.png`

Semua file diverifikasi ada dan ukurannya > 0. Total screenshot proyek: 90. Model QA tidak memiliki input gambar, sehingga penilaian visual langsung tidak dilakukan; validasi screenshots bersifat programatis (file ada, ukuran > 0, dan geometri diverifikasi di browser).

## 6. Status Akhir

Revisi 09 selesai secara implementasi, QA, screenshot, dan dokumentasi. Website tetap statis, vanilla, dan tanpa perubahan aset. Perubahan belum di-commit, di-push, atau dipublikasikan.

## 7. Risiko

- `index.html` dan `css/style.css` sudah memiliki perubahan formatting besar sebelum revisi 09; tinjau diff dengan `git diff --ignore-all-space` jika ingin memisahkan perubahan format dari perubahan fungsi.
- Lightbox sekarang memuat gambar yang sama dari poster/card; tidak ada aset eksternal baru, tetapi jumlah elemen `img`/tombol di `main` bertambah karena pembungkus dinamis.
- Tata letak Coverflow mengandalkan scroll-snap native. Safari iOS tidak diuji secara langsung di lingkungan ini; Chrome/Chromium yang diuji lolos di semua viewport.
