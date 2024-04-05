let products = {
    data: [
        {
            name: "Samsung Galaxy Gear S2",
            price: "7.990.000 ₫ - 10.999.000đ",
            image: "https://img.upanh.tv/2024/03/22/GearS2.png"
        },

        {
            name: "Samsung Galaxy Watch Active 2",
            price: "10.999.000 đ - 12.799.000 đ",
            image: "https://img.upanh.tv/2024/03/22/Watch4.png"
        },

        {
            name: "Samsung Galaxy Gear S3",
            price: "6.490.000đ - .490.000đ",
            image: "https://img.upanh.tv/2024/03/22/GearS3-Classic.png"
        },

        {
            name: "Samsung Galaxy Gear S3 Frontier",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/GearS3Frontier.png"
        },

        {
            name: "Samsung Galaxy Fit3",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Ftit3.png"
        },

        {
            name: "Samsung Galaxy Watch5",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Concecpt1.png"
        },

        {
            name: "Samsung Galaxy Watch5 Pro",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Watch5pro.png"
        },


        {
            name: "Samsung Galaxy Watch6",
            price: "780.000đ - 1.470.000đ",
            image: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/10/637957702824459868_samsung-galaxy-watch5-lte-40mm-bac-4.jpg5.jpg"
        },

        {
            name: "Samsung Galaxy Watch Concept 2022",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Concecpt1.png"
        },
        {
            name: "Samsung Galaxy Watch Concept 2023",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Gear1.png"
        },
        {
            name: "Samsung Galaxy Watch Concept 2024",
            price: "780.000đ - 1.470.000đ",
            image: "https://img.upanh.tv/2024/03/22/Concecpt2.png"
        },
        {
            name: "Samsung Galaxy Fit2",
            price: "780.000đ - 1.470.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/7077/231312/samsung-galaxy-fit2-den-01.jpeg"
        },
    ]
}

for ( let items of products.data)
{
    let sanpham = document.createElement("div")
    sanpham.classList.add("sanpham");

    let img_sanpham = document.createElement("div")
    img_sanpham.classList.add("img_sanpham")

    let anh_sanpham = document.createElement("img")
    anh_sanpham.setAttribute("src", items.image)
    img_sanpham.appendChild(anh_sanpham)
    sanpham.appendChild(img_sanpham)
    let thongtinsanpham = document.createElement("div")
    thongtinsanpham.classList.add("thongtinsanpham")
    let tensp = document.createElement("div")
    tensp.classList.add("tensp")
    tensp.innerHTML =  items.name;
    thongtinsanpham.appendChild(tensp)
    let gia_sanpham = document.createElement("h6")
    gia_sanpham.classList.add("giasanpham")
    gia_sanpham.innerHTML = "<b>Giá : </b>" + items.price;
    thongtinsanpham.appendChild(gia_sanpham);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.classList.add("btn")
    btn.innerHTML = "Thêm vào giỏ hàng"
    thongtinsanpham.appendChild(btn);
    sanpham.appendChild(thongtinsanpham);
    document.getElementById("product").appendChild(sanpham);
}