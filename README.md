# CineFinder

CineFinder adalah aplikasi web untuk menemukan film populer, mencari film, melihat informasi detail, dan menyimpan film favorit. Data film diperoleh dari TMDB API, sedangkan daftar favorit disimpan secara lokal di browser.

## Fitur

- Menampilkan daftar film trending.
- Mencari film berdasarkan judul.
- Menampilkan poster, tahun rilis, rating, genre, durasi, dan sinopsis film.
- Menampilkan halaman detail untuk setiap film.
- Menambah dan menghapus film dari daftar favorit.
- Menyimpan daftar favorit menggunakan `localStorage` agar tetap tersedia setelah halaman dimuat ulang.
- Tampilan responsif dengan Tailwind CSS.
- Penanganan kondisi loading, data kosong, dan kegagalan request API.

## Teknologi

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)
- [TMDB API](https://developer.themoviedb.org/docs/getting-started)
- React Context dan Web Storage API

## Prasyarat

Pastikan perangkat sudah memiliki:

- Node.js
- pnpm
- API key TMDB

## Instalasi

1. Clone repository:

   ```bash
   git clone https://github.com/NugrahaAdani/CineFinder.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd CineFinder
   ```

3. Instal dependency:

   ```bash
   pnpm install
   ```

4. Buat file `.env` di root proyek:

   ```env
   VITE_TMDB_API_KEY=masukkan_api_key_tmdb
   ```

5. Jalankan development server:

   ```bash
   pnpm run dev
   ```

6. Buka URL yang ditampilkan Vite di terminal. Dengan konfigurasi base proyek ini, aplikasi tersedia melalui path `/CineFinder/`.

> Jangan commit file `.env` atau membagikan API key ke repository publik.

## Perintah

| Perintah | Kegunaan |
| --- | --- |
| `pnpm run dev` | Menjalankan development server Vite |
| `pnpm run lint` | Memeriksa source code menggunakan ESLint |
| `pnpm run build` | Membuat production build di direktori `dist` |
| `pnpm run preview` | Menjalankan preview production build |

## Halaman Aplikasi

Karena aplikasi menggunakan `HashRouter`, route ditampilkan setelah karakter `#`.

| Route | Keterangan |
| --- | --- |
| `#/` | Beranda dan daftar film trending |
| `#/search?q=judul` | Hasil pencarian film |
| `#/favorites` | Daftar film favorit |
| `#/movie/:id` | Detail film berdasarkan ID TMDB |

## Struktur Proyek

```text
src/
├── assets/       # Gambar dan aset lokal
├── components/   # Komponen antarmuka dan fitur film
├── context/      # Context dan provider favorites
├── pages/        # Komposisi halaman berdasarkan route
├── services/     # Integrasi TMDB API
├── App.jsx       # Konfigurasi route aplikasi
├── index.css     # Style global dan Tailwind CSS
└── main.jsx      # Entry point React
```

## Penyimpanan Favorit

State favorit dibagikan ke seluruh halaman melalui React Context. Setiap perubahan daftar favorit disimpan sebagai JSON di `localStorage` dengan key `FavoriteMovies`. Data tersebut dibaca kembali ketika aplikasi dibuka sehingga favorit tidak hilang setelah refresh.

Penyimpanan ini hanya berlaku pada browser dan perangkat yang sama. Menghapus data situs pada browser juga akan menghapus daftar favorit.

## Sumber Data

Data film dan gambar disediakan oleh [The Movie Database (TMDB)](https://www.themoviedb.org/).

Proyek ini menggunakan TMDB API, tetapi tidak didukung atau disertifikasi oleh TMDB.
