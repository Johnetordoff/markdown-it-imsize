  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true
  }).use(require('../lib'));

  console.log(md.render('![dsds](dsdsads =fill )'));
