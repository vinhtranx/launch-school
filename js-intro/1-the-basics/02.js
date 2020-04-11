let bigNum = 4936;
let onesPlace = bigNum % 10;
let tensPlace = ((bigNum - bigNum % 10) / 10) % 10;
let hundredsPlace = ((bigNum - bigNum % 100) / 100) % 10;
let thousandsPlace = ((bigNum - bigNum % 1000) / 1000) % 10;
