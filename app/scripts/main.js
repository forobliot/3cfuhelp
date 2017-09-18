// labspo,agraria,scienzeerboristiche,ctf,managmentpubblico,scienzebiologiche,sie,scienzegeologiche,farmacia,studiumanistici,medicina,odontoiatria
var sel = $('body').data('selected');
const variables = {
  address: {
    labspo: 'http://3cfuinformatica.unimi.it/labspo',
    agraria: 'http://3cfuinformatica.unimi.it/agraria',
    scienzeerboristiche: 'http://3cfuinformatica.unimi.it/scienzeerboristiche',
    ctf: 'http://3cfuinformatica.unimi.it/ctf',
    managmentpubblico: 'http://3cfuinformatica.unimi.it/managmentpubblico',
    scienzebiologiche: 'http://3cfuinformatica.unimi.it/scienzebiologiche',
    sie: 'http://3cfuinformatica.unimi.it/sie',
    scienzegeologiche: 'http://3cfuinformatica.unimi.it/scienzegeologiche',
    farmacia: 'http://3cfuinformatica.unimi.it/farmacia',
    studiumanistici: 'http://3cfuinformatica.unimi.it/studiumanistici',
    medicina: 'http://3cfuinformatica.unimi.it/medicina',
    odontoiatria: 'http://3cfuinformatica.unimi.it/odontoiatria'
  },
  lab: {
    labspo: 'facoltativi',
    agraria: 'facoltativi',
    scienzeerboristiche: 'facoltativi',
    ctf: 'facoltativi',
    managmentpubblico: 'facoltativi',
    scienzebiologiche: 'facoltativi',
    sie: 'facoltativi',
    scienzegeologiche: 'facoltativi',
    farmacia: 'facoltativi',
    studiumanistici: 'obbligatori',
    medicina: 'obblgatori',
    odontoiatria: 'obbligatori'
  }
};
$('.var').each(function() {
  let variable = variables[$(this).data('select')];
  if (variable) {
    $(this).html(variable[sel]);
  }
});
$('.select').each(function() {
  let items = $(this).data('if');
  if (items.includes(sel)) {
    $(this).show();
  }
  else {
    $(this).hide();
  }
})
