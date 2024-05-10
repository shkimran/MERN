// const indexController = {};

// Controller for the '/' route
getHome = (req, res) => {
  res.status(200).json({data:req.body});
//   res.status(200).send('this is home page!');
};

// Controller for the '/about' route
getAbout = (req, res) => {
  res.status(200).send('About Us');
};

module.exports = {getHome,getAbout};
