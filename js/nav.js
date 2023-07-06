// Create a new XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  // Define the function to be executed when the state changes
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Insert the response (navigation bar code) into the 'navigation' div
      document.getElementById("nav-placeholder").innerHTML = this.responseText;
    }
  };

  // Make a GET request to fetch the contents of nav.html
  xhttp.open("GET", "../html_snippets/nav.html", true);
  xhttp.send();