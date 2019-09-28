const getHomePage = (req, res) => {
  res.render('home');
}

const getTest = (req, res) => {
  res.render('test');
}

module.exports = {
  getHomePage,
  getTest
}