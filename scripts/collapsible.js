var coll = document.getElementsByClassName("collapsible");
var i;

var path1 = "images/layout/menuarrowright.gif";
var path2 = "images/layout/menuarrowdown.gif";

function imageCollapse() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    var imgElem = this.querySelector("img");

    if (content.style.display === "block" || content.style.display === "") {
        imgElem.src = path1;
        content.style.display = "none";
    } else {
        imgElem.src = path2;
        content.style.display = "block";
    }
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", imageCollapse);

    coll[i].nextElementSibling.style.display = "none";

    var imgElem = coll[i].querySelector("img");

    if (imgElem) {
        imgElem.src = path1;
    }
}