//Hàm hiển thị sản phẩm

const ShowListProduct = (index) => {
    console.log(index);
    let sizearr = newarrayproduct.length;
    // console.log(newarrayproduct.length);
    let result = '';
    for (let i = 0; i < sizearr; i++) {
        if (index === i) {
            result +=
                `<tr>
            <td>No.${i}</td>
            <td><input type="text" name="addNewProduct" placeholder="Input Product Name"></td>
            <td><input type="number" name="addNewProduct" placeholder="Input Product Price"></td>
            <td><input type="number" name="addNewProduct" placeholder="Input The Number Of Product"></td>
            <td><input type="number" name="addNewProduct" placeholder="Input Product Size"></td>
            <td><input type="text" name="addNewProduct" placeholder="Input Product Color"></td>
            <td><button type="submit" class="edit" onclick="editProduct(${i})">Update</button></td>
            <td><button type="submit" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
        }
        result +=
            `<tr>
            <td>No.${i}</td>
            <td>${newarrayproduct[i].name}</td>
            <td>${newarrayproduct[i].price} VNĐ</td>
            <td>${newarrayproduct[i].quantity}</td>
            <td>${newarrayproduct[i].size}</td>
            <td>${newarrayproduct[i].color}</td>
            <td><button type="submit" class="edit" onclick="ShowListProduct(${i})">Edit</button></td>
            <td><button type="submit" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`

    }
    document.getElementById(`tableBody`).innerHTML = result;

}

ShowListProduct();