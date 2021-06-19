// Create two unordered lists on the page.
    
// Create a function that selects the second list and applies a class that sets some background color to it.

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

// Create one more unordered list and one more function
// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.


document.addEventListener("DOMContentLoaded", function () {
    console.log(document.querySelectorAll("li"));
    document.querySelectorAll("ul")[1].classList.add("secondList");
  
    var new2 = document.querySelectorAll("li"); // if body=>ul , then child list
    change(new2);
    var new3 = document.querySelectorAll("ul")[2];
    changeLi(new3);
  })();
  
  function change(li) {
    for (var i = 0; i < li.length; i++) {
      var element = li[i];
      element.className = "allLists";
    }
  }
  
  function changeLi(ul) {
    var len = ul.children.length;
    for (var i = 0; i < len; i++) {
      var list = ul.children[i];
      list.className = "thirdList";
      var text = list.innerHTML;
      if (text) {
        list.innerHTML = text.toUpperCase();
      }

    }
  }
  