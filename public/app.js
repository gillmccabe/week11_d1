var app = function() {
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  addCat("Barnaby", "Tuna", "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg");

  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  addCat("Archie", "Mice", "https://upload.wikimedia.org/wikipedia/commons/1/1e/Large_Siamese_cat_tosses_a_mouse.jpg");
}

var addCat = function(name, food, imageUrl){
  var ul = createUnorderedList();
  var listItem1 = createListItem(name);
  var listItem2 = createListItemTwo(food);
  var image = createImage(imageUrl);
  var cats = document.querySelector('#cats');
  appendElements(cats, ul, listItem1, listItem2, image);
}
  
var createUnorderedList = function() {
var ul = document.createElement('ul');
ul.classList.add('cat');
return ul;
}

var createListItem = function(name) {
  var list1 = document.createElement('li');
  list1.innerText = "Name: " + name;
  return list1;
}

var createListItemTwo = function(food) {
  var list2 = document.createElement('li');
  list2.innerText = "Favourite food: " + food;
  return list2;
}

var createImage = function(imageUrl) {
  var image = document.createElement('img');
  image.width = 500;
  image.src = imageUrl;
  return image;
}

var appendElements = function(cats, ul, listItem1, listItem2, image) {
  ul.appendChild(listItem1);
  ul.appendChild(listItem2);
  ul.appendChild(image);
  cats.appendChild(ul);

}

window.onload = app;