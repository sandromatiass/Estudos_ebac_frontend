$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault();

    const novaTarefa = $('input').val();
    const addNovaTarefa = $(`<li> ${novaTarefa} </li>`);
    $(addNovaTarefa).appendTo(`ul`);
    $('input').val('');

    if(addNovaTarefa){
      $(addNovaTarefa).click(function(){
        $(this).css('text-decoration', 'line-through');
      });
    }
  });
});