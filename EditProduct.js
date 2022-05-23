// Button Edit and Upddte
const editProduct = (index) => {
    let flag;
    for (let i = 0; i < data.length; i++) {
        if (index === i) {
            flag = i;
        }
    }
    return flag;
}

// Button Update cả mảng
const updateProduct = (index) => {
    // let o = document.querySelectorAll(`.updateProduct`);

    let k = confirm(`Bạn có muốn cập nhật ?`)
    if (k) {
        let o1 = document.getElementsByClassName("updateProduct");
        console.log(o1[index].value);
        let data1 = JSON.parse(localStorage.getItem('DataProduct'));
        data1[index].name = o1[0].value;
        data1[index].setPrice(o1[1].value);
        data1[index].setQuantity(o1[2].value);
        data1[index].setSize(o1[3].value);
        data1[index].setColor(o1[4].value);
        localStorage.setItem('DataProduct', JSON.stringify(data1[index]));

        ShowListProduct();
    }

}