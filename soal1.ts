function loopOddEven() {
    let jumlah = 0;
    for (let i = 1; i <= 100; i++) {
      // Setiap 10 angka, tampilkan "Perulangan 10 ke-n"
      if ((i - 1) % 10 === 0) {
        console.log(`Perulangan 10 ke-${Math.ceil(i / 10)}:`);
        jumlah = 0; // Reset jumlah di awal setiap kelompok
      }
  
      // Cek apakah kelompok ini ganjil atau genap
      const isOddGroup = Math.floor((i - 1) / 10) % 2 === 0;
  
      if (isOddGroup) {
        // Jika kelompok ganjil, tampilkan bilangan ganjil
        if (i % 2 !== 0) {
          console.log(i);
          jumlah += i;
        }
      } else {
        // Jika kelompok genap, tampilkan bilangan genap
        if (i % 2 === 0) {
          console.log(i);
          jumlah += i;
        }
      }
  
      // Setiap akhir kelompok 10, tampilkan jumlah total
      if (i % 10 === 0) {
        console.log("--------------------------");
        console.log(`Jumlah: ${jumlah}`);
      }
    }
  }
  
  loopOddEven();
  