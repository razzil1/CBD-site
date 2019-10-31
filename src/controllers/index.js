const languages = require('../public/languages');

const getHomePage = (req, res) => {
  const lang = req.params.language || 'sr';
  const supportedLanguages = ['en', 'de', 'sr'];
  
  if(!supportedLanguages.includes(lang)) {
    // TODO make 404 page
    return res.json({message: '404 page'});
  }

  res.render('home', {lang: languages[lang]});
}

const getTest = (req, res) => {
  res.render('test');
}

const sendMessage = (req, res) => {
  console.log('eee', req.body);
  res.sendStatus(200);
}

module.exports = {
  getHomePage,
  getTest,
  sendMessage
}