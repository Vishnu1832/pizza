menu_list_array =
[ "Veg Margherita Pizza",
  "Chicken Tandoori Pizza",
  "Chicken Supreme Pizza",
  "Paneer Tikka Pizza",
  "Golden Delight",
  "Garlick Bread",
  "Cold Drinks"
];

function getmenu()
{
    var htmldata;
    htmldata = "<ol class = 'menulist' >"
    menu_list_array.sort();
    for(var i = 0; i<menu_list_array.length; i++)
    {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '<li>';
    }
    htmldata = htmldata + "<ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item()
{
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();

    var item = document.getElementById("add_item").value;
    menu_list_array.push();

    for (var i = 0; i<menu_list_array.length; i++)
    {
        htmldata = htmldata + '<div class = "card">'
        + '<img src = "<images/pizzaImg.png"/>'
        +menu_list_array [i] + '</div>'
    }
    htmldata = htmldata+"</section>"
    document.getElementById("display_addmenu").innerHTML= htmldata;
}

function add_top()
{
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}