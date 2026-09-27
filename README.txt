# Anniversary Website — Bubu ♡

Website anniversary sederhana menggunakan:
- HTML
- CSS
- JavaScript vanilla

## Struktur

anniversary-bubu/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── photos/
│       ├── photo-1.jpg
│       ├── photo-2.jpg
│       ├── photo-3.jpg
│       ├── photo-4.jpg
│       ├── photo-5.jpg
│       └── photo-6.jpg
└── little-bubu/
    ├── 1.png
    ├── 2.png
    └── ... 16.png

## Cara menjalankan

1. Masukkan foto kalian ke `assets/photos/`.
2. Rename foto menjadi:
   photo-1.jpg
   photo-2.jpg
   ...
   photo-6.jpg
3. Masukkan 16 gambar dekorasi Bubu ke folder `little-bubu/`.
4. Buka `index.html` di browser.

## Yang bisa diedit

Love letter ada di `index.html`, bagian:

<section class="letter-section" id="letter">

Foto utama Hero menggunakan:
assets/photos/photo-1.jpg

Warna utama ada di bagian `:root` pada `style.css`:
--blue
--blue-dark
--yellow

Tidak membutuhkan framework atau build tool.
