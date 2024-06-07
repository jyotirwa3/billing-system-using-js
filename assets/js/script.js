/// *** prices *** ///
const prices = {
    snack1: 10, snack2: 15, snack3: 20, snack4: 12, snack5: 30, snack6: 60, snack7: 5,
    grocery1: 40, grocery2: 50, grocery3: 60, grocery4: 70, grocery5: 20, grocery6: 35, grocery7: 45,
    beauty1: 25, beauty2: 35, beauty3: 45, beauty4: 55, beauty5: 65, beauty6: 10, beauty7: 20
};

// Product names
const productNames = {
    snack1: 'Nutella Choco Spread', snack2: 'Noodles (1 Pack)', snack3: 'Lays (10 Rs)', snack4: 'Oreo (20 Rs)',
    snack5: 'Chocolate Muffin', snack6: 'Dairy Milk Silk (60 Rs)', snack7: 'Muskmeelon (5 Rs)',
    grocery1: 'Aashirvaad Atta (1 kg)', grocery2: 'Pasta (1 kg)', grocery3: 'Basmati Rice (1 kg)', grocery4: 'Sunflower Oil (1 ltr)',
    grocery5: 'Refined Sugar (1 kg)', grocery6: 'Daal (1 kg)', grocery7: 'Tea Powder (1 kg)',
    beauty1: 'Bathing Soap', beauty2: 'Shampoo (1 ltr)', beauty3: 'Body Lotion (1 ltr)', beauty4: 'Face Cream',
    beauty5: 'Shaving Foam', beauty6: 'Face Mask (1 piece)', beauty7: 'Hand Sanitizer (50 ml)'
};

function generateBill() {
    let snacksTotal = 0, groceryTotal = 0, beautyTotal = 0;

    document.querySelector('#billDetails').innerHTML = '';

    // Calculate Snacks total
    for (let i = 1; i <= 7; i++) {
        let quantity = document.getElementById(`snack${i}`).value;
        if (quantity >= 0 && quantity <= 3) {
            snacksTotal += prices[`snack${i}`] * quantity;
            addToBill(productNames[`snack${i}`], quantity, prices[`snack${i}`]);
            console.log(snacksTotal)
            document.querySelector(`#error_snack${i}`).innerHTML = ""
        }
        else {
            document.querySelector(`#error_snack${i}`).innerHTML = "only maximum 3 qty"
        }
    }

    // Calculate Grocery total
    for (let i = 1; i <= 7; i++) {
        let quantity = document.getElementById(`grocery${i}`).value;
        if (quantity >= 0 && quantity <= 3) {
            groceryTotal += prices[`grocery${i}`] * quantity;
            addToBill(productNames[`grocery${i}`], quantity, prices[`grocery${i}`]);
            document.querySelector(`#error_grocery${i}`).innerHTML = ""
        } else {
            document.querySelector(`#error_grocery${i}`).innerHTML = "only maximum 3 qty"
        }
    }

    // Calculate Beauty & Hygiene total
    for (let i = 1; i <= 7; i++) {
        let quantity = document.getElementById(`beauty${i}`).value;
        if (quantity >= 0 && quantity <= 3) {
            beautyTotal += prices[`beauty${i}`] * quantity;
            addToBill(productNames[`beauty${i}`], quantity, prices[`beauty${i}`]);
            document.querySelector(`#error_beauty${i}`).innerHTML = ""
        } else {
            document.querySelector(`#error_beauty${i}`).innerHTML = "only maximum 3 qty"
        }
    }

    // Calculate and display tax and total bill


    let snacksTax = snacksTotal * 0.1;
    let groceryTax = groceryTotal * 0.1;
    let beautyTax = beautyTotal * 0.1;

    let totalBill = snacksTotal + groceryTotal + beautyTotal + snacksTax + groceryTax + beautyTax;

    document.querySelector('#snacksTotal').innerText = snacksTotal.toFixed(2);
    document.querySelector('#snacksTax').innerText = snacksTax.toFixed(2);
    document.querySelector('#groceryTotal').innerText = groceryTotal.toFixed(2);
    document.querySelector('#groceryTax').innerText = groceryTax.toFixed(2);
    document.querySelector('#beautyTotal').innerText = beautyTotal.toFixed(2);
    document.querySelector('#beautyTax').innerText = beautyTax.toFixed(2);
    document.querySelector('#totalBill').innerText = totalBill.toFixed(2);
}

function addToBill(product, quantity, price) {
    if (quantity > 0) {
        document.querySelector('.output').style.display = "block"
        document.querySelector('#empty').innerHTML = " "

        const billDetails = document.querySelector('#billDetails');
        const row = document.createElement('tr');
        const productCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const totalCell = document.createElement('td');

        productCell.textContent = product;
        quantityCell.textContent = quantity;
        priceCell.textContent = price;
        totalCell.textContent = price * quantity;

        row.appendChild(productCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(totalCell);

        billDetails.appendChild(row);

    }else{
        document.querySelector('#empty').innerHTML = "please select once anyone item"
    }

}
