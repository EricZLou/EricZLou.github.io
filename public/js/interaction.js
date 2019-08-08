function copy(elementToCopy, element) {
  // COPY THE EMAIL
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(elementToCopy).text()).select();
  document.execCommand("copy");
  $temp.remove();

  // ANIMATION
  var property = document.getElementById("email-button");
  property.style.backgroundColor = "green";
  property.text = "Copied!";
}

function closeAll() {
  for (i = 0; i < coll.length; i++) {
    var content = coll[i].nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      coll[i].classList.toggle("active");
    }
  }
}
