/* 1. Mała ilośc parametrów, najlepiej max dwa! */

function getTotalSpeed(powerHorses, avgSpeed, maxSpeed, minSpeed, weight, wheels) {
    const factorOne = powerHorses * avgSpeed;
    const factorTwo = maxSpeed / minSpeed;
    const factorThree = weight + wheels;
    return factorOne + factorTwo + factorThree;
}

/* 2. wykorzystuj funkcje strzałkowe */

const powNumbers = [1, 2, 3].map(function(N) {
    return N * N;
});

function getBruttoPrice(price) {
    return price * 1.23;
}

/* 3. Nazywaj poprawnie parametry */

const getStrength = (value1, value2) => value1 * value2;
const getStrength = (m, a) => m * a;

/* 4. Unikaj flag we funkcjach */
let data = [1, 2, 3];

function resetData(all) {
    if (all) {
        data = [];
    } else {
        data = [1];
    }
}

/* 5 Nie duplikuj funkcji o tej samej implementacji */

const isProductBtnDisabled = () => product.disabled && user.hasAdminRole;
const isOrderBtnDisabled = () => order.disabled && user.hasAdminRole;
const isBasketBtnDisabled = () => basket.disabled && user.hasAdminRole;

