// let tableOutput = document.getElementById("him");
let count = 0;
// let Name;
// let Price;
// let Qty;

// alert("${Qty}");
// let products = [
//   {
//     Name: "Milk",
//     Price: 1095,
//   },
//   {
//     Name: "Bread",
//     Price: 470,
//   },
//   {
//     Name: "Dettol soap",
//     Price: 120,
//   },
//   {
//     Name: "Milo",
//     Price: 2300,
//   },
//   {
//     Name: "Hypo",
//     Price: 770,
//   },
//   {
//     Name: "Detergent",
//     Price: 970,
//   },
//   {
//     Name: "Ice-Cream",
//     Price: 1200,
//   },
//   {
//     Name: "Diapers",
//     Price: 4000,
//   },
//   {
//     Name: "Noodles",
//     Price: 230,
//   },
//   {
//     Name: "Salt",
//     Price: 70,
//   },
//   {
//     Name: "Flour",
//     Price: 7000,
//   },
//   {
//     Name: "Sugar",
//     Price: 350,
//   },
// ];
let iden = false;
figure = false;
quan = false;
let multiply = (a, b) => a * b;

function displaySerialNumber(params) {
  count++;
  him.innerHTML += `    <table><tr>
            <td id="cream" class="text-center">${count}</td>
           <td><input type="text" id="identity" class="form-control"  onkeyup="addingUp(this)"/></td>
            <td><input type="number" id="amount" class="form-control" onkeyup="addingUp(this)"/></td>
           <td> <input type="number" id="num" class="form-control" onkeyup="addingUp(this)"/></td>
           <td></td>
           <td></td>
        </tr></table>`;
}

function del(params) {
  document.reload();
}
function change(params) {
  alert();
}
function addingUp(params) {
  if (params.id == "identity") {
    iden = params.value;
    console.log(iden);
  } else if (params.id == amount) {
    figure = params.value;
    console.log(figure);
  } else {
    quan = params.value;
    console.log(quan);
  }
}

function input(params) {
  if (iden != "" && figure != "" && quan != "") {
    if (Number.isSafeInteger(figure, quan)) {
      displaySerialNumber();
    }
  } else {
    alert("input whole numbers");
  }
}

function calculate(params) {
  displaySerialNumber();
  addingUp();
  figure = true;
  quan = true;
  iden = true;
  multiply(figure, quan);
}
