$(function(){
  $('#pageRegisterForm, #contactForm').on('submit',function(e){
    e.preventDefault();
    alert('Thanks! We will contact you as soon as possible.');
    this.reset();
  });
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-nav').classList.toggle('show');
});
