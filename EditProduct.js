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
        let a = document.getElementById(`fixvalue0`);
        a.value = data[index].name;
        let b = document.getElementById(`fixvalue1`);
        b.value = data[index].price
        let c = document.getElementById(`fixvalue2`);
        c.value = data[index].quantity
        let d = document.getElementById(`fixvalue3`);
        d.value = data[index].size
        let e = document.getElementById(`fixvalue4`);
        e.value = data[index].color

        let k = confirm(`Bạn có muốn cập nhật ?`)
        if (k) {
            localStorage.setItem('DataProduct', JSON.stringify(data[index].name));
        }
        ShowListProduct();
    }

}