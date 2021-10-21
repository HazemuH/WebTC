//script untuk tanggal di header
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("set_date").innerHTML = d + "/" + m + "/" + y;


//script untuk dropdown_profile
const selectbox = document.querySelector(".selectbox");
const selectboxDisplay = document.querySelector(".selectbox__displayWord");


selectboxDisplay.addEventListener("click", (e) => {
  e.stopPropagation();
  selectbox.classList.toggle("selectbox--active");
});

$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});
