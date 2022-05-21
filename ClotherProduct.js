//Khởi tạo thuộc tính
class ClotherProduct {
    constructor(name, price, quantity, size, color) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.color = color;
    }

    //Thuộc tính
    getname() {
        return this.name;
    }

    getprice() {
        return this.price;
    }

    getquantity() {
        return this.quantity;
    }

    getsize() {
        return this.size;
    }

    getcolor() {
        return this.color;
    }

    //
    setName(newName) {
        this.name = newName;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    setQuantity(newQuantity) {
        this.quantity = newQuantity;
    }

    setSize(newSize) {
        this.size = newSize;
    }

    setColor(newColor) {
        this.color = newColor;
    }
}


//Khởi tạo đối tượng-Test
let a = new ClotherProduct("Quần",45000,1,42,"Black");
let b = new ClotherProduct("Áo",45000,1,42,"White");

let newarrayproduct = [];
newarrayproduct.push(a);
newarrayproduct.push(b);
// console.log(Array.isArray(newarrayproduct));
// console.log(newarrayproduct);