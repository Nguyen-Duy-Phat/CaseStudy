//Hàm hiển thị sản phẩm

const ShowListProduct = (index) => {

    let data = JSON.parse(localStorage.getItem('DataProduct'));

    let size1 = data.length;
    let result = '';
    for (let i = 0; i < size1; i++) {
        if (index === i) {
            result +=
                `<tr>
            <td>Update${i}</td>
            <td><input id="fixvalue0" type="text" class="updateProduct" name="addNewProduct" placeholder="Input Product Name"></td>
            <td><input id="fixvalue1" type="number" class="updateProduct" name="addNewProduct" placeholder="Input Product Price"></td>
            <td><input id="fixvalue2" type="number" class="updateProduct" name="addNewProduct" placeholder="Input The Number Of Product"></td>
            <td><input id="fixvalue3" type="number" class="updateProduct" name="addNewProduct" placeholder="Input Product Size"></td>
            <td><input id="fixvalue4" type="text" class="updateProduct" name="addNewProduct" placeholder="Input Product Color"></td>
            <td colspan="2"><button style= "background-color: Blue;color: white" type="submit" class="edit" onclick="updateProduct(${i})">Update</button></td>
            </tr>`
        }
        result +=
            `<tr>
            <td>No.${i}</td>
<!--            <td><img src="pikachu.png" alt="pikachu"></td>-->
            <td>${data[i].name}</td>
            <td>${data[i].price} VNĐ</td>
            <td>${data[i].quantity}</td>
            <td>${data[i].size}</td>
            <td>${data[i].color}</td>
            <td><button style="background-color: green;color: white" type="submit" class="edit" onclick="ShowListProduct(${i})">Edit</button></td>
            <td><button style="background-color: orangered;color: white" type="submit" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    }
    localStorage.setItem('DataProduct', JSON.stringify(data));
    document.getElementById(`tableBody`).innerHTML = result;
}
ShowListProduct();