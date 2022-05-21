// Button Edit and Upddte
const editProduct = (index) => {
    let flag;
    for (let i = 0; i < newarrayproduct.length; i++) {
        if (index === i) {
            flag = i;
        }
    }
    console.log(flag);
    return flag;
}

// Button Update
const updateProduct = () => {

    let k = confirm(`Bạn có muốn cập nhật sản phẩm không ?`);
    if (k) {
        let l = document.querySelectorAll(`.updateProduct`);
    }
    let object = new ClotherProduct(l[0].value,l[1]);

    console.log(object);
    newarrayproduct.push(object);
    ShowListProduct();
}