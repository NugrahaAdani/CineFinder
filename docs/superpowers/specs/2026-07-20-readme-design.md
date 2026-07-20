# Rancangan README CineFinder

## Tujuan

Mengganti README kosong dengan dokumentasi berbahasa Indonesia yang membantu pengunjung memahami proyek dan membantu pengembang menjalankannya secara lokal.

## Audiens

- Pengunjung repository yang ingin melihat fitur dan teknologi proyek.
- Pengembang yang ingin memasang dan menjalankan CineFinder.

## Struktur

README akan memuat:

1. Nama proyek dan ringkasan singkat.
2. Daftar fitur utama: trending, pencarian, detail film, dan favorit persisten.
3. Teknologi yang digunakan.
4. Prasyarat instalasi.
5. Langkah instalasi menggunakan pnpm.
6. Konfigurasi `VITE_TMDB_API_KEY` melalui `.env`.
7. Perintah development, lint, build, dan preview.
8. Daftar halaman/rute aplikasi.
9. Struktur folder sumber secara ringkas.
10. Penjelasan penyimpanan favorit dengan Context dan `localStorage`.
11. Atribusi data kepada TMDB.

## Batasan

- Tidak menampilkan screenshot karena belum ada aset screenshot repository.
- Tidak memasang badge yang memerlukan layanan eksternal.
- Tidak mengklaim adanya test suite karena belum tersedia script test.
- Tidak menampilkan API key atau nilai rahasia.

## Kriteria Selesai

- Semua command dan nama environment variable cocok dengan `package.json` dan source code.
- README dapat dipahami tanpa membaca implementasi.
- Instruksi instalasi tidak membocorkan kredensial.
- Markdown tersusun ringkas dan mudah dipindai.
