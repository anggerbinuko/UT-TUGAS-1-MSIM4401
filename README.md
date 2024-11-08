
# Tugas Pemrograman TypeScript dan Vue.js

Repository ini berisi tugas pemrograman menggunakan TypeScript dan Vue.js, dengan fokus pada implementasi perulangan dan tampilan data di web.

## Daftar Isi

1. [Deskripsi Tugas](#deskripsi-tugas)
2. [Struktur Folder](#struktur-folder)
3. [Cara Menjalankan Program](#cara-menjalankan-program)
4. [Catatan Pengumpulan Tugas](#catatan-pengumpulan-tugas)

## Deskripsi Tugas

### 1. Perulangan Ganjil Genap (POIN 50)

Buat program TypeScript yang melakukan perulangan dari 1 sampai 100 dengan aturan berikut:

- **Perulangan 10 pertama**: Menampilkan bilangan ganjil (1, 3, 5, 7, 9).
- **Perulangan 10 kedua**: Menampilkan bilangan genap (12, 14, 16, 18, 20).
- Pola ini berlanjut hingga mencapai nilai 100.
- Pada setiap kelompok 10 angka, tampilkan jumlah dari angka yang ditampilkan.

**Contoh Output:**
```
Perulangan 10 ke-1:
1
3
5
7
9 -------------------------- Jumlah: 25
Perulangan 10 ke-2:
12
14
16
18
20 -------------------------- Jumlah: 80
...
```

**Source Code:** Lihat pada file `soal1.ts`.

### 2. Perulangan Berdasarkan NIM (POIN 30)

Buat program TypeScript yang menampilkan nilai dari 1 sampai 20, dimulai dari dua angka terakhir NIM Anda.

- Jika dua angka terakhir NIM **ganjil**, gunakan `while loop`.
- Jika dua angka terakhir NIM **genap atau 0**, gunakan `do..while loop`.

**Contoh Kasus:**
- Jika NIM adalah `xxxxxxx13`, perulangan dimulai dari 13 menggunakan `while loop`.
- Jika NIM adalah `xxxxxxx00`, perulangan dimulai dari 0 menggunakan `do..while loop`.

**Source Code:** Lihat pada file `soal2.ts`.

### 3. Vue.js Looping (POIN 20)

Implementasikan Vue.js untuk menampilkan nilai dari 1 sampai 50 di halaman web.

**Source Code:** Lihat pada file `App.vue` dalam folder `src/components`.

## Struktur Folder

```
.
├── soal1.ts   # Kode TypeScript untuk tugas 1
├── soal2.ts           # Kode TypeScript untuk tugas 2
└── soal3
    └── src
        └── App.vue            # Kode Vue.js untuk tugas 3
```

## Cara Menjalankan Program

### Menjalankan TypeScript di Node.js
1. Pastikan Node.js sudah terpasang.
2. Untuk menjalankan tugas pertama dan kedua, gunakan perintah berikut:
   ```bash
   tsc soal1.ts
   node soal1.js
   ```
   ```bash
   tsc soal2.ts
   node soal2.js
   ```

### Menjalankan Vue.js di Browser
1. Instal dependensi Vue.js:
   ```bash
   npm install
   ```
2. Jalankan server Vue.js:
   ```bash
   npm run serve
   ```
3. Buka browser dan akses `http://localhost:8080` untuk melihat hasil.


