const footerContainer = document.getElementById("footer-container");
      const footerFilePath = "footer.html"; // Adjust the path to your footer.html
    
      fetch(footerFilePath)
        .then(response => response.text())
        .then(footerContent => {
          footerContainer.innerHTML = footerContent;
        })
        .catch(error => {
          console.error("Error loading footer:", error);
        });

var divHeight = document.body.clientHeight;
var windowHeight = window.innerHeight;
console.log(windowHeight);
document.getElementById('expander').clientHeight = windowHeight - divHeight;
