var dealsList = document.getElementById('deals');
var item = document.getElementById('item');
var price = document.getElementById('price');
var link = document.getElementById('item-link');
var i = 0;
var total = 0;

function addDeal() {
  if ( item.value !== '' && price.value !== '' && link.value !== '') {
    dealsList.innerHTML += '<li id="' + i + '"><label class="control control--checkbox">' + item.value + "(" + link.value + ")" + '<input type="checkbox"/><div class="control__indicator"></div></label> <span class="price">' + price.value + '<button class="removeBtn" onclick="removeDeal(' + i + ')">x</button></span></li>';
    i += 1;
    item.value = "";
    price.value = "";
  }
}

function removeDeal(index) {
  var removed = document.getElementById(index.toString()).remove();
};
