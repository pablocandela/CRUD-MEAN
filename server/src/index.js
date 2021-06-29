require('./database');
const app = require('./app');
const port = app.get('port');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})