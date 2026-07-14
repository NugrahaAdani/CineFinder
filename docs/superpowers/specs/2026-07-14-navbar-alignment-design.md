# Navbar alignment

## Tujuan

Menata navbar CineFinder dengan logo di kiri, menu Home dan Favorites tepat di tengah layar, dan ikon di kanan.

## Rancangan

- Kontainer navbar memakai `relative`, `flex`, dan `justify-between`.
- Grup logo tetap menjadi elemen alur normal di sisi kiri.
- Grup menu diposisikan absolut pada 50% lebar navbar, lalu digeser setengah lebarnya sendiri agar pusatnya tetap tepat di tengah.
- Grup ikon tetap menjadi elemen alur normal di sisi kanan.
- Jarak antar menu memakai satu utilitas `gap`.

## Batasan

Perubahan hanya pada markup dan kelas Tailwind navbar di `src/App.jsx`; tidak menambah dependensi atau perilaku baru.

## Verifikasi

Navbar harus menampilkan logo di kiri, menu di tengah, dan ikon di kanan pada lebar desktop.
