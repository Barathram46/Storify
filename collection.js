
var procon = document.getElementById("procontainer");
var search = document.getElementById("search");
var productlist = procon.querySelectorAll(".probox"); // Fix: Use querySelectorAll to get all elements

search.addEventListener("keyup", function (event) { // Fix: Add event parameter to function
    var entered = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) { // Fix: Declare count with var
        var proname = productlist[count].querySelector("p").textContent;

        if (proname.toUpperCase().indexOf(entered) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
