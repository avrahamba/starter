const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.resolve(__dirname, 'public')));
// } else {
  const corsOptions = {
      origin: ['http://127.0.0.1:5173', 'http://localhost:5173', 'http://127.0.0.1:3030', 'http://localhost:3030'],
      credentials: true
  };
  app.use(cors(corsOptions));
// }

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})