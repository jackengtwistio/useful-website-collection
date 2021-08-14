// const navInstruction = document.getElementById('navInstruction');

// function showElement(navInstruction){
//   navInstruction.textContent.push('Click them for more resources');
// }
// setInterval(showElement, 1000);

// // ---------------------------------------------------------------

// const emailInput = document.getElementById('exampleFormControlInput1')
// const textArea = document.getElementById('exampleFormControlTextarea1')

// emailInput.addEventListener('click', event =>{
//   event.target.className = 'form-control highlight';
// });
// textArea.addEventListener('click', event =>{
//   event.target.className = 'form-control highlight';
// });
// ----------------------------------------------------------
// $('nav').hide()
$('#sug-submit').click(function(){
  const sug=$('#sug-input').val();
  $('#sug').text(sug);
  // $('nav').fadeIn().delay(3000).slideUp();
});
$('.dropdown-toggle').addEventListener('click',
  ()=>{
    $('.dropdown-menu').style.display = 'blok';
    // if($('.dropdown-menu').style.display == 'none'){
    //   $('.dropdown-menu').style.display = 'blok'
    // }else{
      // $('.dropdown-toggle').textContent = 'hide list';
      // $('.dropdown-menu').style.display = 'none'
    // }
  }
)
