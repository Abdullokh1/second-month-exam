let openBtn = document.getElementById('btnOpen');
let hide = document.getElementById('hideVersion');
let closebtn = document.getElementById('closeBtn');
openBtn.addEventListener('click', function(){
   hide.classList.add('show');
})
closebtn.addEventListener('click', function(){
  hide.classList.remove('show');
})