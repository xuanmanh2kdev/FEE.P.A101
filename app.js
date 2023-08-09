  // Click view content button event
  document.getElementById("view-btn").addEventListener("click", function() {
    document.getElementById("main-content").innerHTML = "<h1>Loading</h1>";
    setTimeout(function(){
    window.location.href = "./view.html";
    }, 5000); 
    });
  
  
    // Click form content button event
    document.getElementById("form-btn").addEventListener("click", function() {
      window.location.href = "./add.html"; 
    });
  
  