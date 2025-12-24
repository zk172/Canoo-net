var coll = document.getElementsByClassName("collapsible");
var i;

// imgElem.style.marginLeft = '-15px';  
path1 = 'images/layout/menuarrowright.gif';
path2 = 'images/layout/menuarrowdown.gif';


function imageCollapse() {

  this.classList.toggle("active");
    var content = this.nextElementSibling;
    var imgElem = document.createElement("img");
    if (content.style.display === "block" || content.style.display === "") {
      if(this.previousElementSibling.tagName == "IMG") this.previousElementSibling.remove();
      
      imgElem.src = path1;
      this.parentElement.insertBefore(imgElem,this);

      content.style.display = "none";
      
    } 

    else {
      if(this.previousElementSibling.tagName == "IMG") this.previousElementSibling.remove();
      
      imgElem.src = path2;
      this.parentElement.insertBefore(imgElem,this);
      content.style.display = "block";
      
    }
  
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", imageCollapse)
    
}