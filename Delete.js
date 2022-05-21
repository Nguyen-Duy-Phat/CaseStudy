//Hàm xóa sản phẩm

const deleteProduct = (index) => {
  let confirmDeleteProduct = confirm(`Bạn có chắc chắn muốn xóa ${newarrayproduct[index].name} ?`);
  console.log(newarrayproduct[index]);
  if (confirmDeleteProduct){
    newarrayproduct.splice(index,1);
    ShowListProduct();
  }
}