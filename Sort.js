//Sắp xếp
function sortProduct() {
    let price = document.getElementById(`mySelect`).value;
    if (price === "SortPrice") {
        const SortPrice = () => {
            let data = JSON.parse(localStorage.getItem('DataProduct'));
            console.log(data);
            let sizearr = data.length;
            console.log(sizearr);
            for (let i = 0; i < sizearr; i++) {
                for (let j = i + 1; j < sizearr; j++) {
                    if (parseInt(data[i].price) > parseInt(data[j].price)) {
                        let temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
            localStorage.setItem('DataProduct', JSON.stringify(data));
            console.log(data);
            ShowListProduct();
        }
        SortPrice();
    } else if (price === "SortQuantity") {
        const SortQuantity = () => {
            let data1 = JSON.parse(localStorage.getItem('DataProduct'));
            console.log(data1);
            let sizearr = data1.length;
            console.log(sizearr);
            for (let i = 0; i < sizearr; i++) {
                for (let j = i + 1; j < sizearr; j++) {
                    if (parseInt(data1[i].quantity) > parseInt(data1[j].quantity)) {
                        let temp = data1[i];
                        data1[i] = data1[j];
                        data1[j] = temp;
                    }
                }
            }
            localStorage.setItem('DataProduct', JSON.stringify(data1));
            console.log(data1);
            ShowListProduct();
        }
        SortQuantity();
    } else if (price === "SortName") {
        let data2 = JSON.parse(localStorage.getItem('DataProduct'));
        console.log(data2);
        function compare(a, b) {
            let nameA = a.name.toUpperCase();
            console.log(nameA);
            let nameB = b.name.toUpperCase();
            console.log(nameB);
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        data2.sort(compare);
        console.log(data2);
        localStorage.setItem('DataProduct', JSON.stringify(data2));
        ShowListProduct();

    }
}