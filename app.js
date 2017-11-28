let g = G$('Marcin', 'Krauzowicz');

g.greet().setLang('en').greet(true).log();

$('.greeting').hide();

$('#login').on('click', () => {

  let loginGrtr = G$('Marcin', 'Krauzowicz');

  $('#longdiv').hide();

  $('.greeting').toggle();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('.greeting h1', true).log();
});
