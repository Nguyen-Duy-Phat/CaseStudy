// Button Edit and Upddte
const editProduct = (index) => {
    let data = document.getElementsByClassName("DataProduct");

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

    let k = confirm(`Bạn có muốn cập nhật ?`)
    if (k) {
        let data1 = JSON.parse(localStorage.getItem('DataProduct'));
        let idproduct = editProduct();
        console.log(editProduct());
        if (data1[index] === idproduct){
            data1[index].name = document.getElementById(`fixvalue0`).value;
            data1[index].price = document.getElementById(`fixvalue1`).value;
            data1[index].quantity = document.getElementById(`fixvalue2`).value;
            data1[index].size = document.getElementById(`fixvalue3`).value;
            data1[index].color = document.getElementById(`fixvalue4`).value;
        }
        console.log(data1);

        // data1[index].name = document.getElementById(`fixvalue0`).value;
        // data1[index].size = document.getElementById(`fixvalue1`).value;
        // data1[index].quantity = document.getElementById(`fixvalue2`).value;
        // data1[index].size = document.getElementById(`fixvalue3`).value;
        // data1[index].color = document.getElementById(`fixvalue4`).value;

        // localStorage.removeItem('DataProduct');
        localStorage.setItem('DataProduct', JSON.stringify(data1[index]));
        ShowListProduct();
    }

}