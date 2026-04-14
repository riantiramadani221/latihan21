// array gelobal untuk menyimpan data barang 
// sekarang akan menyimpan 
// [nama,harga],[nama,harga], dst...
let dataBarang = [] 

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// fungsi untuk menambah barang ke dalam keranjang
function tambah() {
  //mengambil data nama dari elemen input dengan id "namabaranginput"
    let nama =document.getElementById("namabaranginput").value
    
  //mengambil data harga dari elemen input dengan id "hargainput"
  //dan mengubah menjadi angka
  let harga = Number(document.getElementById("hargainput").value)
  
  //masukkan data harga ke dalam array databarang
  dataBarang.push([nama,harga]) 
  
  // kosongkan input harga setelah ditambahkan
  document.getElementById("namabaranginput").value = ""
  
   // kosongkan input harga setelah ditambahka
  document.getElementById("hargainput").value = ""
  
  //tampilkan data harga barang
  tampilkan()
}

function tampilkan() {
  let total = 0
  let output = ""
  
  //loop input harga barang dari array global data barang
  for (let i = 0; i < dataBarang.length; i++) {
    //dataBarang[i][0] adalah nama barang
    //dataBarang[i][1] adalah haraga barang
    let nama = dataBarang[i][0]
     let harga = dataBarang[i][1]
    total += harga
    
    output +=(i + 1) + "."+ nama + ": RP "+rupiah(harga)
    +"<button onclick='hapusindex("+ i +")'class='hapus2'>Hapus</button>"
    + "<br>"
  }
  
  output += "<hr>Total: Rp" + rupiah(total)
  
  document.getElementById("hasil").innerHTML = output
}
// fungsi untuk mengahapus barang terakhir dari keranjang
function hapus() {
  dataBarang.pop()
  tampilkan()
}
// fungsi untuk mereset keranjang
function reset() {
  dataBarang = []
  tampilkan()
}
// fungsi untuk mengedit harga barang berdasarkan nomer barang 
function edit() {
  
  // ubah nomor barang menjadi index array dengan mengurangi 1
  let index = Number(document.getElementById("nomor").value)-1
  
  // Ambil nama edit dari input 
  let nama = document.getElementById("namabarangedit").value
    // Ambil harga edit dari input 
  let harga= Number (document.getElementById("hargaedit").value)
  
  // periksa apakah index valid
  if (index >= 0 && index < dataBarang.length) {
    //update harga barang di array dataBarang
    dataBarang[index][0]= nama
    dataBarang[index][1]= harga 
    
  } else {
    //jika nomer barang tidak valid, tampilan alert
    alert("Nomor barang tidak valid ")
  }
    tampilkan()
    
    //kosongkan input nomor dan harga edit setelah diedit 
    document.getElementById("nomor").value =""
    document.getElementById("hargaedit").value=""
    document.getElementById("namabarangedit").value=""
}

//fungsi untuk menghapus barang berdasarkan nomor barang 
function hapusNomer() {
// ubah nomor barang menjadi index array dengan mengurangi 1
let index = Number(document.getElementById("nomerHapus"). value)-1

  // periksa apakah index valid
  if (index >= 0 && index < dataBarang.length) {

  //hapus barang dari array dataBarang menggunakan splice 
  dataBarang.splice(index,1)
  
  } else {
    //jika nomer barang tidak valid, tampilan alert
    alert("Nomor barang tidak valid ")
  }
  
  tampilkan()
  //kosongkan input nomor hapus setelah dihapus 
  document.getElementById("nomerHapus").value=""
  
}

// fungsi untuk menghapus barang index 
function hapusindex(index){
    // periksa apakah index valid
  if (index >= 0 && index < dataBarang.length) {
  //hapus barang dari array dataBarang menggunakan splice 
  dataBarang.splice(index,1)
  } else {
    //jika nomer barang tidak valid, tampilan alert
    alert("Nomor barang tidak valid ")
  }
  
  tampilkan()
}
