var nilai = 86;

if (nilai >= 90) {
    console.log("Grade A");
    if (nilai > 95) {
      console.log("Lulus dengan Pujian");
    }
  } else if (nilai >= 80) {
    console.log("Grade B");
  } else if (nilai >= 70) {
    console.log("Grade C");
  } else if (nilai >= 60) {
    console.log("Grade D");
  } else {
    console.log("Grade E");
  }