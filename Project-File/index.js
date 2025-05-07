document.getElementById("branchselect").onclick = function() {
    const menu = document.getElementById("Dropdown");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};


document.getElementById("searchbar").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll(".options");
  
    items.forEach(function(item) {
      const itemText = item.textContent.toLowerCase();
      if (itemText.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none"; 
      }
    });
  });


menu = document.getElementById("Dropdown")

let pune = document.getElementById("pune")
let bc = document.getElementById("branchselect")
pune.onclick = function(){
    bc.textContent = " 📌  Location: Pune        🡣"
    menu.style.display = "none";
}

function Mumbai(){
    bc.textContent = " 📌  Location: Mumbai        🡣"
    menu.style.display = "none";
}
  
function PCMC(){
    bc.textContent = " 📌  Location: PCMC        🡣"
    menu.style.display = "none";
}

function Thane(){
    bc.textContent = " 📌  Location: Thane        🡣"
    menu.style.display = "none";
}

function JP(){
    bc.textContent = " 📌  Location: Jaipur        🡣"
    menu.style.display = "none";
}

function EC(){
    bc.textContent = " 📌  Location: Electronic City        🡣"
    menu.style.display = "none";
}

function KN(){
    bc.textContent = " 📌  Location: Kalyan Nagar        🡣"
    menu.style.display = "none";
}

function GM(){
    bc.textContent = " 📌  Location: Garuda Mall        🡣"
    menu.style.display = "none";
}

function PM(){
    bc.textContent = " 📌  Location: Pheonix Mall        🡣"
    menu.style.display = "none";
}