const { app, port } = require('./src/index.js');
require('dotenv').config();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
