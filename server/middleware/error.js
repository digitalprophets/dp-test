module.exports = function(err, req, res, next){
  // TODO logging, mozda i ne mora
  console.log(err);
  res.status(500).send('Something failed.');
}