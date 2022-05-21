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
    // newarrayproduct.push(object);

    // Cách 2
    let q = document.querySelectorAll(`.newProduct`);
    let object = new ClotherProduct(q[0].value,q[1].value,q[2].value,q[3].value,q[4].value);
    console.log(object);
    newarrayproduct.push(object);
    ShowListProduct();
}