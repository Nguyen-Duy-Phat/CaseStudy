// Edit UpDate
const updateProduct = (id) => {
    //Lấy ra vị trí
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    if (data.length > 0) {
        let sizedata = data.length;
        let index;
        for (let i = 0; i < sizedata; i++) {
            if (id === i) {
                index = i;
            }
        }
        let a = document.getElementById(`fixvalue0`).value;
        data[index].name = (a == ""? data[index].name : a);
        let b = document.getElementById(`fixvalue1`).value;
        data[index].price = (b== ""? data[index].price : b);
        let c = document.getElementById(`fixvalue2`).value;
        data[index].quantity = (c== ""? data[index].quantity : c);
        let d = document.getElementById(`fixvalue3`).value;
        data[index].size = (d== ""? data[index].size : d);
        let e = document.getElementById(`fixvalue4`).value;
        data[index].color = (e== ""? data[index].color : e);
        console.log(data[index])
        localStorage.removeItem('DataProduct');
        let k = confirm(`Bạn có muốn cập nhật ?`)
        if (k) {
            localStorage.setItem('DataProduct', JSON.stringify(data));
        }
        ShowListProduct();
    }

}