var data_bill = [125,555,44];

// tien boa 15% / tong bill <=> 50 <= val_hoadon >= 300 
// gia tri khac <=> tien boa 20% / tong bill
function calcTip(val_hoadon) {
    return (val_hoadon >= 50 && val_hoadon <= 300) ? (val_hoadon * 0.15) : (val_hoadon * 0.2);
}

// tao bien tip de chua tip cho du lieu hoa don
var tips = [];
for (var i = 0; i < data_bill.length; i++) {
    tips.push(calcTip(data_bill[i]));
}


console.log(tips);

// tinh tien hoa don
var total = [];
for (var i = 0; i < data_bill.length; i++) {
    total.push(data_bill[i] + tips[i]);
}
console.log(total);

