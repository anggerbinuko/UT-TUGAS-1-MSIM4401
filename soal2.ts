function perulanganNim(nim: string) {
  // Mengambil 2 angka terakhir dari NIM sebagai angka awal
  const angkaAwal = parseInt(nim.slice(-2)); 
  // Mengambil angka terakhir dari NIM untuk menentukan jenis perulangan
  const angkaAkhir = parseInt(nim.slice(-1)); 
  let i = angkaAwal; // Inisialisasi nilai i dengan angka awal

  // Memeriksa apakah angka terakhir dari NIM adalah ganjil atau genap
  if (angkaAkhir % 2 !== 0) {
      // Jika angka terakhir ganjil, gunakan while loop
      console.log("Menggunakan while loop karena angka terakhir NIM ganjil.");
      
      // Perulangan while untuk mencetak nilai dari angka awal hingga (angkaAwal + 20)
      while (i <= angkaAwal + 20) {
          console.log(i); // Menampilkan nilai i saat ini
          i++; // Menaikkan nilai i
      }
  } else {
      // Jika angka terakhir genap, gunakan do..while loop
      console.log("Menggunakan do..while loop karena angka terakhir NIM genap.");
      
      // Perulangan do..while untuk mencetak nilai dari angka awal hingga (angkaAwal + 20)
      do {
          console.log(i); // Menampilkan nilai i saat ini
          i++; // Menaikkan nilai i
      } while (i <= angkaAwal + 20); // Kondisi perulangan do..while
  }
}

// Contoh penggunaan dengan NIM "xxxxxxx11"
// Angka awal adalah 11, dan angka akhir adalah 1 (ganjil)
perulanganNim("xxxxxxx11");

// Angka awal adalah 20, dan angka akhir adalah 0 (genap)
perulanganNim("xxxxxxx20");
