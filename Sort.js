const Sort = () => {
    let data = JSON.parse(localStorage.getItem('newArrayProduct'));

    let sizearr = data.length;
    for (let i = 0; i < sizearr; i++) {
        for (let j = i + 1; j < sizearr; j++) {
            if (parseInt(data[i].price) > parseInt(data[j].price)) {
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    localStorage.setItem('newArrayProduct', JSON.stringify(data));
    console.log(data);
    ShowListProduct();
}