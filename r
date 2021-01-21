const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/test', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  res.status(200).json({
    status: 'succes',
    data: req.body,
  })
});
app.listen(4000, () => {
  console.log('Server live');
});



for (var i = 0; i < students.length;  i++) {
       <tr>
         <td>students[i].ID</td>
         <td><%= students[i].name %></td>
       </tr>    
      }