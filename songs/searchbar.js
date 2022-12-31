function myFunction() {
    var input, filter, ul, list, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("songItemContainer");
    list = ul.getElementsByTagName("li");
    for (i = 0; i < list.length; i++) {
        a = list[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        console.log(txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}