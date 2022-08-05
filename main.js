let numbers = [];
// Thêm Số
function number() {
  let number = +document.getElementById("numberx1").value;
  numbers.push(number);
  let mang = ""
  mang = " ♓ " + numbers + " ♓ " 
  console.log(numbers);
  let divResult = document.getElementById("result1");
  divResult.style.display = "block";
  divResult.innerHTML = mang;
};
// Câu 1:
function total() {
  let total = numbers.reduce((total, value) => {
    return value > 0 ? total + value : total;
  }, 0);

  console.log(total);
  let divResult = document.getElementById("result2");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Tổng các số dương: " + total + " ♓ ";
};

// Câu 2:
function totalduong() {
  let total1 = numbers.reduce((totals, value) => {
    return value > 0 ? totals + 1 : totals;
  }, 0);
  console.log(total1);
  let divResult = document.getElementById("result3");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Số Lượng Số Dương: " + total1 + " ♓ ";
};

// Câu 3:
function totalmin() {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
  let divResult = document.getElementById("result4");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Tìm Số Nhỏ Nhất: " + min + " ♓ ";
};

// Câu 4:
function totalmax() {
  let mins = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      mins.push(numbers[i]);
    }
  }
  let minsmax = "";
  if (mins.length === 0) {
    minsmax = "Không có số dương trong mảng";
  } else {
    let min1 = mins[0];
    for (let i = 0; i < mins.length; i++) {
      if (mins[i] < min1) {
        min1 = mins[i];
      }
    }
    minsmax = " ♓ " + "Tìm Số dương nhỏ nhất: " + min1 + " ♓ ";
  }

  let divResult = document.getElementById("result5");
  divResult.style.display = "block";
  divResult.innerHTML = minsmax;
};

// Câu 5:
function totalmap() {
  let sochan = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sochan = numbers[i];
    }
  }

  console.log(sochan);
  let divResult = document.getElementById("result6");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Tìm Số chẵn cuối cùng: " + sochan + " ♓ " ;
};

// Câu 6:
function change() {
  let sothu1 = +document.getElementById("numberx2").value;
  let sothu2 = +document.getElementById("numberx3").value;

  let change = numbers[sothu1];
  numbers[sothu1] = numbers[sothu2];
  numbers[sothu2] = change;
  console.log(numbers);

  let divResult = document.getElementById("result7");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Mảng sau khi đổi: " + numbers + " ♓ " ;
};

// Câu 7:
function totalup (){
  numbers.sort((a, b) => a - b);
  let divResult = document.getElementById("result8");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Mảng sau khi sắp xếp: " + numbers + " ♓ " ;
};

// Câu 8:
function kiemtraSNT(n) {
  let kiemtra = true;
  if(n < 1) {
    kiemtra = false;
  };
  for (let i = 2; i < n ; i++) {
    if (n % i == 0){
      kiemtra = false;
      break;
    }
    
  }
return kiemtra;
};

function timSNT () {
 let ketqua = "";
  for (let i = 0; i < numbers.length; i++) {
     let kiemtra = kiemtraSNT(numbers[i]);
     if(kiemtra === true){
      ketqua = "Số Nguyên Tố Đầu Tiên: " + numbers[i]  ;
      break;
     } else {
      ketqua = "Không có số nguyên tố: -1";
     }
  }
  let divResult = document.getElementById("result9");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + ketqua + " ♓ " ;
};

// Câu 9:

let arrNumbers = [];

function ThemSNT() {
  let arrNumber = +document.getElementById("numberx4").value;
  arrNumbers.push(arrNumber)

  let divResult = document.getElementById("result10");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + arrNumbers + " ♓ " ;
};

function DemSNT () {
  let count = arrNumbers.reduce((count, value) => {
    return Number.isInteger(value) ? count + 1 : count
  }, 0);
  let divResult = document.getElementById("result11");
  divResult.style.display = "block";
  divResult.innerHTML = " ♓ " + "Số Nguyên: " + count + " ♓ " ;
}

// Câu 10:
function SosanhSNT () {
  let Duong = 0;
  let Am = 0;
  let kqua = "";
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      Duong++
    } else if (numbers[i] < 0) {
      Am++
    }
  }
  if (Duong > Am) {
     kqua = "Số Dương > Số Âm ";
  } else if (Duong < Am) {
    kqua = "Số Dương < Số Âm ";
  }else {
    kqua = "Số Dương = Số Âm"
  }
  let divResult = document.getElementById("result12");
  divResult.style.display = "block";
  divResult.innerHTML = ' ♓ ' +  kqua + ' ♓ ';
}