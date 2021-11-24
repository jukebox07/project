"use strict";
$(function () {
	let theRow;
	let theData1;
	let theData2;
	let theData3;
	let theData4;
	let theData5;
	let theData6;
	let seen = false;
	let theItemInput;
	let theQtyInput;
	let theBtnDiv;
	let theAddBtn;
	let theDelBtn;
	let itemNm;
	let itemName;
	let itemQty;
	let itemPrice;
	const storeRecord = [
		{ product: "milk", price: 1400 },
		{ product: "chocolate", price: 3800 },
		{ product: "milo", price: 1200 },
		{ product: "cheese ball", price: 100 },
		{ product: "bread", price: 400 },
		{ product: "geisha", price: 750 },
		{ product: "", price: 345 },
	];
	let order = [];
	let ordering = false;
	let orderDetail = {
		orderproduct: "",
		orderquantity: 0,
		orderPrice: 0,
		orderSubTotal: 0,
	};

	let theTable = document.createElement("table");
	theTable.setAttribute("id", "myTable");
	theTable.setAttribute("class", "col-sm-12");
	displayDiv.appendChild(theTable);

	$(document).on("click", "#newItem", function newItem() {
		theRow = document.createElement("tr");
		theRow.setAttribute("id", "theRowId");
		// theRow.setAttribute("class", "col-sm-12");
		// theRow.setAttribute("class", "row");
		theTable.appendChild(theRow);

		theData1 = document.createElement("td");
		theData1.setAttribute("id", "myData1");
		// theTable.setAttribute("class", "col-sm-5");
		theRow.appendChild(theData1);

		theData2 = document.createElement("td");
		theData2.setAttribute("id", "myData2");
		theRow.appendChild(theData2);

		theItemInput = document.createElement("input");
		theItemInput.setAttribute("id", "itemNm");
		theItemInput.setAttribute("type", "text");
		theItemInput.setAttribute("placeholder", "Item Name");
		theData2.appendChild(theItemInput);

		theData3 = document.createElement("td");
		theData3.setAttribute("id", "myData3");
		theRow.appendChild(theData3);

		theQtyInput = document.createElement("input");
		theQtyInput.setAttribute("id", "itemQty");
		theQtyInput.setAttribute("type", "number");
		theQtyInput.setAttribute("min", 1);
		theQtyInput.setAttribute("placeholder", "Quantity");
		theData3.appendChild(theQtyInput);

		theData4 = document.createElement("td");
		theData4.setAttribute("id", "myData4");
		theRow.appendChild(theData4);

		theData5 = document.createElement("td");
		theData5.setAttribute("id", "myData5");
		theRow.appendChild(theData5);

		theData6 = document.createElement("td");
		theData6.setAttribute("id", "myData6");
		theRow.appendChild(theData6);

		theBtnDiv = document.createElement("div");
		theBtnDiv.setAttribute("id", "btnDiv");
		theBtnDiv.setAttribute("class", "d-flex");
		theBtnDiv.setAttribute("class", "justify-content-around");

		theData6.appendChild(theBtnDiv);

		theAddBtn = document.createElement("button");
		theAddBtn.setAttribute("id", "addBtn");
		theBtnDiv.appendChild(theAddBtn);
		theAddBtn.innerHTML = `Edit`;
		// theAddBtn.style.backgroundColor = "blue";
		// theAddBtn.style.color = "white";
		// theAddBtn.style.borderRadius = "20px";

		theDelBtn = document.createElement("button");
		theDelBtn.setAttribute("id", "delBtn");
		// theTable.setAttribute("class", "col-sm-6");
		theBtnDiv.appendChild(theDelBtn);
		theDelBtn.innerHTML = `Delete`;
		// theDelBtn.style.backgroundColor = "red";
		// theDelBtn.style.color = "white";
		// theDelBtn.style.borderRadius = "20px";
		collector(theData4, theQtyInput);
	});
	// $(document).on("blur", "#itemNm", function inputting() {
	function inputting() {
		itemNm = theItemInput.value;
		collector(itemNm);
		console.log(itemName);
		itemChecker();
	}

	$("body").on("blur", "#itemNm", inputting);

	function collector() {
		itemName = itemNm;
	}

	function itemChecker() {
		collector();
		console.log(itemName);

		for (let i = 0; i < storeRecord.length; i++) {
			if (itemName == storeRecord[i].product) {
				console.log("Looking for price");
				console.log(storeRecord[i].price);
				theData4.innerHTML = `${storeRecord[i].price}`;
				itemPrice = storeRecord[i].price;
				console.log(itemPrice);
				collector(itemPrice);
				seen = true;
				setTimeout(() => {
					seen = false;
				}, 1000);
				return;
			} else if (i == storeRecord.length - 1 && seen == false) {
				theItemInput.hidden = true;
				theData2.innerHTML = `Item not Available...!!`;
				console.log("unfound item");
			}
		}
	}
	function jackie(params) {
		collector();
		alert("i am here");
		itemQty = theQtyInput.value;
		orderDetail.orderproduct = itemName;
		orderDetail.orderquantity = Number(itemQty);
		orderDetail.orderPrice = Number(itemPrice);
		orderDetail.orderSubTotal =
			orderDetail.orderquantity * orderDetail.orderPrice;
		order.push(orderDetail);
		console.log(order, orderDetail);
		collector(itemQty, order, orderDetail);
		resultDisplay();
	}
	$(document).on("blur", "#itemQty", jackie);

	function resultDisplay() {
		collector();
		for (let index = 0; index < order.length; index++) {
			if (order[index + 1]) {
				ordering = false;
				console.log("i am at result display");
				theItemInput.hidden = true;
				theQtyInput.hidden = true;
				theData1.innerHTML = `${index}`;
				theData2.innerHTML = `${order[index].orderproduct}`;
				theData3.innerHTML = `${order[index].orderquantity}`;
				theData4.innerHTML = `${order[index].orderPrice}`;
				theData5.innerHTML = `${order[index].orderSubTotal}`;
			}
		}
	}
});
