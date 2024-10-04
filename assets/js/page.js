$(function () {
  $('.sidebar button').on('click',function (){
    $('.sidebar button').removeClass('active');
    $(this).addClass('active');
  });
})

function readmore() {
  var element = document.getElementById("text-collapse");
  element.classList.toggle("show");
}
