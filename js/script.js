let configuration = {
    totalPrice: 0,
    products: {
        product1: { price: 25, isSelected: false },
        product2: { price: 35, isSelected: false },
        product3: { price: 125, isSelected: false },
        product4: { price: 40, isSelected: false },
        product5: { price: 75, isSelected: false },
        product6: { price: 200, isSelected: false },
    },
};

const updateTotal = () => {
    document.getElementById("totalPrice").innerHTML = configuration.totalPrice;
};

const init = () => {
    updateTotal();
    for(const property in configuration.products) {
        document.getElementById(`${property}Price`).innerHTML = configuration.products[property].price;
    }

    // document.getElementById('vase').style.display = 'inline'
};

const isAllSelected = () => {
    for(const property in configuration.products) {
        if (!configuration.products[property].isSelected) {
            return false;
        }
    }
    return true;
}

const onProductClick = (product) => {
    const price = configuration.products[product].price;
    const isSelected = configuration.products[product].isSelected;

    isSelected
        ? document.getElementById(`${product}Layer`).style.display = 'none'
        : document.getElementById(`${product}Layer`).style.display = 'inline';

    configuration.totalPrice = isSelected
      ? configuration.totalPrice - price
      : configuration.totalPrice + price;

    configuration.products[product].isSelected = !isSelected;

    const isAllSelectedBool = isAllSelected();

    isAllSelectedBool
        ? document.getElementById(`thanks`).style.display = 'inline'
        : document.getElementById(`thanks`).style.display = 'none';

    updateTotal();
};

const getPrivatBankUrl = () => {
    const totalPrise = configuration.totalPrice;
    const cardNumber = '5363542012484144';
    return `https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%22${cardNumber}%22%2C%22amt%22%3A%22${totalPrise}%22%2C%22ccy%22%3A%22UAH%22%7D`;
};

const onDonateClick = () => {
    const url = getPrivatBankUrl();
    window.location.href = url;
};

init();
