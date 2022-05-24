//Button add product and cancel
const CreateListProduct = () => {
    let a = document.getElementById(`addProduct`);
    if (a.innerHTML === 'Cancel') {
        a.innerHTML = `Add Product`;
    } else {
        a.innerHTML = `Cancel`;
    }
    document.querySelector('.addCreateForm').classList.toggle(`cancelCreateForm1`);
}


// Hàm thêm sản phẩm
function addNewProduct() {
    // Cách 1
    // let name = document.getElementsByClassName(`newProduct`)[0].value;
    // let price = document.getElementsByClassName(`newProduct`)[1].value;
    // let number = document.getElementsByClassName(`newProduct`)[2].value;
    // let size = document.getElementsByClassName(`newProduct`)[3].value;
    // let color = document.getElementsByClassName(`newProduct`)[4].value;
    // let object = new ClotherProduct(name,price,number,size,color);
    // newArrayProduct.push(object);

    // Cách 2
    let inputData = document.querySelectorAll(`.newProduct`);
    console.log(inputData);

    let object = new ClotherProduct(inputData[0].value, inputData[1].value, inputData[2].value, inputData[3].value, inputData[4].value);
    console.log(object);
    let data = JSON.parse(localStorage.getItem('DataProduct')) ? JSON.parse(localStorage.getItem('DataProduct')) : [];
    if (!data) {
        data = [];
    }
    data.push(object);

    localStorage.setItem('DataProduct', JSON.stringify(data));

    ShowListProduct();
}