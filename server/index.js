const express = require('express');
const app = express();
app.get('/', (req, res) => {
   res.send({hi: 'there'});
})
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});