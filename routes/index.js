var express = require('express');
var router = express.Router();
var resultado=[];
var misDatos={
  cuenta:"0801199219353",
  nombre:"Jose Alberto Ponce Valladares",
  correo:"japv1992@gmail.com"
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/suma', function(req, res, next) {
res.render('suma',{});
});
router.get('/0801199219353',function(req,res,next){
  res.json(misDatos);

});
router.post('/suma',function(req,res,next){
  console.log(req.body);
  var newSuma = Object.assign({},resultado);
  newSuma.numero1 = req.body.txtN1;
  newSuma.numero2 = req.body.txtN2;
  newSuma.resultado = parseInt(req.body.txtN1)+parseInt(req.body.txtN2);
  resultado.push(newSuma);
  console.log(resultado);
  var data =Object.assign({}, req.body);
  data.resultado = resultado;
  res.render('suma',data);
});

module.exports = router;
