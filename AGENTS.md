# AGENTS.md — Garasi Aqiqah & Catering

Aturan untuk setiap pengerjaan lanjutan di proyek ini.

## Wajib dibaca dahulu

1. `docs/PRD.md` — sumber kebenaran untuk struktur, konten, batasan, dan daftar `[KONFIRMASI]`.
2. `docs/QA-REPORT.md` — status terakhir, bug, dan daftar screenshot.
3. `index.html`, `css/style.css`, `js/main.js` — kode yang sudah berjalan.

## Aturan perubahan

- Selalu baca PRD sebelum mengubah HTML, CSS, atau JS.
- Pertahankan semua section dan fitur yang sudah selesai. Jangan menghapus atau menyusun ulang struktur tanpa alasan yang terdokumentasi.
- Jangan mengubah, menimpa, atau menghapus file apa pun di `assets/`. Semua gambar harus tetap memakai path lokal `assets/img/...`.
- Jangan menambahkan WordPress, PHP, database, backend, framework, CDN, font eksternal, atau library besar.
- Jangan mengarang harga, isi paket, testimoni, atau klaim bisnis. Jika informasi tidak ada, tandai `[KONFIRMASI]` di PRD dan QA report, jangan dibuat-buat.
- Semua CTA pemesanan/konsultasi harus memakai `6287896102009`. Katalog memakai `https://wa.me/c/6287896102009`.
- Poster dan sertifikat adalah gambar asli yang mengandung teks: jangan dipotong (`object-fit: contain`), jangan dibuatkan tabel harga dari tebakan.
- Pertahankan aksesibilitas: semantic HTML, alt teks, label ARIA, fokus keyboard, `prefers-reduced-motion`, dan touch target minimal 44 px.
- Pertahankan perilaku promo: muncul setelah jeda, `sessionStorage`, tombol close, Escape, tidak menutupi konten di layar kecil.

## Cara menjalankan

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Buka `http://127.0.0.1:8000/index.html`.

## Screenshot wajib setelah setiap perubahan

- Screenshot harus berasal dari website yang benar-benar dijalankan (Playwright + Chrome yang terpasang), bukan mockup.
- Simpan ke folder tahapan yang sesuai:
  - `screenshots/01-initial-design/`
  - `screenshots/02-development/`
  - `screenshots/03-responsive/`
  - `screenshots/04-final/`
- Ambil minimal desktop dan mobile. gunakan nama file deskriptif dan terurut.
- Verifikasi file benar-benar ada dan memiliki ukuran > 0 sebelum mengklaim berhasil.
- Perbarui `docs/QA-REPORT.md` dengan daftar screenshot terbaru dan hasil QA.

## QA minimum sebelum selesai

Jalankan pemeriksaan browser untuk: broken image, console error, horizontal overflow di 360/390 px, tautan anchor, semua CTA WhatsApp, navigasi mobile, FAQ, promo modal, dan Google Maps embed (embed baru dimuat saat section kontak terlihat karena `loading="lazy"`).
