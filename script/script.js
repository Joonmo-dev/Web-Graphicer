window.onload = function() {
    
    // accordion
    
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
      }
    }
    
    // tabs
    
    var tabLink = document.getElementsByClassName("tabLink");
    var crtbar = document.getElementById("currentbar");
    tabLink[0].onclick = function() {
        document.getElementById("view").style.display = "block";
        document.getElementById("cssCode").style.display = "none";
        this.classList.add("active");
        tabLink[1].classList.remove("active");
        crtbar.style.left = "0";
    }
    tabLink[1].onclick = function() {
        document.getElementById("cssCode").style.display = "block";
        document.getElementById("view").style.display = "none";
        this.classList.add("active");
        tabLink[0].classList.remove("active");
        crtbar.style.left = "50%";
    }
    
    // text box
    
    var textBox = document.getElementById("textBox");
    var opcBg = document.getElementById("opacityBg");
    textBox.onclick = function() {
        if ( this.classList.contains("ptr") ) {
            this.classList.remove("ptr");
            this.style.top = "50vh";
            opcBg.style.display = "block";
            opcBg.classList.add("opcOn");
        }
    }
    opcBg.onclick = function() {
        textBox.classList.add("ptr");
        textBox.style.top = "90vh";
        this.style.display = "none";
        this.classList.remove("opcOn");
    }
    
    // inputContents
    
    var contents = document.getElementById("inputContents");
    contents.onkeyup = function() {
        document.getElementById("view").innerHTML = contents.value;
    }
    
    var inputRange = document.querySelectorAll("input[type='range']");
    for(i=0; i<inputRange.length; i++) {
        inputRange[i].oninput = function() {
            this.parentNode.previousElementSibling.querySelector("input[type='number']").value = this.value;
        }
    }
}