let g = G$('Marcin', 'Krauzowicz');

g.greet().setLang('en').greet(true).log();

$('#login').on('click', () => {

  let loginGrtr = G$('Marcin', 'Krauzowicz');

  $('#longdiv').hide();

  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
