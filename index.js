const express = require("express");
const app = express();
const db = require('./firebase');
const isbot = require('isbot');
const path = require("path");
const fs = require("fs");

app.get('/product/:pid', (req, res) => {
  const productId = req.params.pid;

  if (isbot(req.get('user-agent'))) {
    db.doc(`products/${productId}`)
      .get()
      .then(doc => {
        const product = doc.data();
        const filePath = path.resolve(__dirname, "index.html");        // get html template
        
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            return console.log(err);
          }
      
          data = data                                                   // replace placeholders in template
            .replace(/__TITLE__/g, product.title)
            .replace(/__DESCRIPTION__/g, product.description)
            .replace(/__IMAGE__/g, product.images[0])
            .replace(/__ID__/g, productId);

          res.send(data)
        });
      })
      .catch(err => console.log(err.message));
  } else {
    return res.redirect(`https://speedwagoan.web.app/product/${productId}`)
  }
})


// PORT (Environment Variable)
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.....`));
