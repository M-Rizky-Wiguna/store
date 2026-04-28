const daftarProduk = [
    {
        id: 1,
        nama: "laptop",
        harga: 20000
    }
]
let produk = daftarProduk.map((item) =>{
    return`
    <h1>${item.nama}<h2>
    <h1>${item.harga}<h2>`
})
console.log(produk.join(""))
