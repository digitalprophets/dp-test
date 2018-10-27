module.exports = function(err, req, res, next){
  // TODO logging, mozda i ne mora
  
  res.status(500).send('Something failed.');
}