const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('./startup/database')


app.get('/api/v1/users', async (req, res) => {
    const user = await user.find()
    res.send(user)
})

app.listen(port, () => {
    console.log(`Server listening to the port ${port}`)
})