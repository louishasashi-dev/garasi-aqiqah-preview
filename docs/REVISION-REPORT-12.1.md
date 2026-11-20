# Revision Report 12.1 — Koreksi Gambar Menu Catering & Sosial Media Footer

Tanggal: 20 November 2026  
Status: Selesai, QA PASS  
Lingkungan: `python -m http.server 8000 --bind 127.0.0.1`, Playwright Python + Chrome 157 headless.

## Tujuan & koreksi terhadap Revisi 12

Revisi 12 sebelumnya memakai tiga poster sementara pada `#menu-catering`: `banner_02.jpeg`, `garasi_paket_ayambakar.jpg`, dan `garasi_paket_snackbox.jpg`. Revisi 12.1 mengganti seluruh sumber tersebut dengan enam poster asli dari folder khusus `assets/img/menu_catering/`, memakai salinan bernama deskriptif yang byte-nya identik dengan file asli; file asli tetap dipertahankan di folder.

Revisi 12.1 juga menambahkan tautan YouTube dan TikTok pada footer utama dengan ikon dan gaya yang selaras dengan Instagram/Facebook yang sudah ada. Tidak ada section, navbar, kartu layanan, price list, FAQ, promo, atau Maps yang dihapus/disusun ulang.

## Perubahan kode

| File | Perubahan |
| --- | --- |
| `index.html` | Enam figure baru pada `#menu-catering`, urutan `sampul_atau_awal.jpeg`, `1.jpeg`, `2.jpeg`, `3.jpeg`, `4.jpeg`, `5.jpeg`; caption/alt diperbarui. Footer IG/FB diberi ikon inline SVG dan ditambah YouTube/TikTok dengan `target="_blank" rel="noopener noreferrer"` serta aria-label tab baru. |
| `js/main.js` | Inisialisasi Coverflow `#menu-catering` diubah ke indeks 0 agar sampul menjadi tampilan awal; carousel lain tetap indeks tengah. |
| `css/style.css` | Style `.footer-links a.footer-social-link` dan `.footer-social-link svg` untuk ikon 16 px, inline-flex, `gap: 8px`, dan target sentuh minimal 44 px. |
| `docs/PRD.md` | Status, aset, struktur, fungsi, pengujian, dan kriteria penerimaan diperbarui untuk Revisi 12.1. |
| `docs/QA-REPORT.md` | Ringkasan, fitur, hasil QA, bug skrip, catatan keterbatasan, dan daftar screenshot diperbarui; total 127 screenshot. |
| `docs/REVISION-REPORT-12.1.md` | Laporan ini. |

## Aset yang dipakai

Semua file yang dipakai adalah JPEG asli 1080×1350; byte identik dengan file asli dan file asli tetap tersedia:

| Urutan | File | Ukuran | Caption |
| --- | --- | --- | --- |
| 1 | `sampul_atau_awal.jpeg` | 181449 bytes | Sampul Menu Catering |
| 2 | `1.jpeg` | 183404 bytes | Nasi & Pelengkap |
| 3 | `2.jpeg` | 175618 bytes | Ayam & Olahan Ayam |
| 4 | `3.jpeg` | 191195 bytes | Ikan & Tempe Tahu |
| 5 | `4.jpeg` | 173515 bytes | Kambing & Sapi |
| 6 | `5.jpeg` | 176640 bytes | Sapi, Sambal & Pelengkap |

## Hasil QA

Sumber: `C:\Users\DELL\AppData\Local\Temp\opencode\revision-12-1-qa.json` dan popup test `C:\Users\DELL\AppData\Local\Temp\opencode\debug-social-links.py`.

- PASS di 10 viewport: 320, 360, 390, 600, 601, 768, 900, 901, 1024, 1440 px.
- 0 horizontal overflow, 0 console error, 0 page error, 0 broken image, 0 anchor rusak, 0 respons HTTP ≥400.
- Request gagal eksternal Google Maps iframe dikecualikan karena iframe `loading="lazy"` dan tidak stabil di server lokal; embed tetap terverifikasi di QA sebelumnya.
- 6/6 gambar Menu Catering termuat dalam urutan benar, `object-fit: contain`, dibungkus tombol lightbox.
- Carousel: awal indeks 0 dengan prev disabled; nav desktop next→1/prev→0; swipe mobile→indeks 2; keyboard dan reduced motion tetap didukung.
- Lightbox 6/6: file, kicker "Menu Catering", caption, CTA WA, fokus kembali, dan Escape benar.
- CTA WA tidak berubah: 22 tautan `wa.me/6287896102009` dengan pesan "Halo Garasi Aqiqah, saya ingin bertanya tentang Menu Catering dan Nasi Box."
- Footer: IG/FB/YouTube/TikTok memakai ikon, target/rel aman, dan popup YouTube/TikTok membuka URL yang diminta.
- Regresi: navbar 8 tautan, 4 kartu layanan (3 lightbox + 1 scroll), 6+6 item carousel paket/galeri di indeks 2, 4 price list, 7 FAQ, Maps lazy, promo/Escape PASS.
- Trigger lightbox gambar konten naik dari 29 menjadi 32; gambar di DOM naik dari 33 menjadi 36.
- `node --check js/main.js` lolos; `git diff --check` lolos.

## Bug skrip QA yang diperbaiki

Lima kegagalan awal berasal dari skrip QA, bukan website: lazy image belum discroll saat metrik diambil, fontSize komputasi dibaca `14.56px`, carousel tidak di-reset setelah uji lightbox, ekspektasi `prevDisabled` terbalik pada indeks 0, dan request Maps ikut dihitung. Skrip diperbaiki dan diuji ulang hingga PASS.

## Screenshot

Folder: `screenshots/20-menu-catering-social-footer/`

1. `01-desktop-section.png` — 1440×988
2. `02-desktop-lightbox.png` — 1440×1000
3. `03-desktop-footer.png` — 1440×511
4. `04-tablet-section.png` — 768×910
5. `05-mobile-section.png` — 390×777
6. `06-mobile-lightbox.png` — 390×844
7. `07-mobile-after-swipe.png` — 390×844
8. `08-mobile-footer.png` — 390×873
9. `09-mobile-promo.png` — 390×844

Semua file diverifikasi ada dengan ukuran > 0. Total screenshot proyek: 127.

## Catatan akhir

Tidak ada commit atau push. Byte gambar tidak diubah; enam file asli `WhatsApp Image 2026-11-20 ...` tetap dipertahankan di `assets/img/menu_catering/` dan enam salinan bernama deskriptif dipakai oleh HTML (kesamaan byte diverifikasi dengan hash blob Git). Risiko yang tersisa hanya screenshot tidak dinilai secara visual oleh model, sehingga validasi mengandalkan Playwright, OCR, dan pemeriksaan dimensi file.
