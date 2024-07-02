import express from 'express'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (req, res) => {
    console.log('ping!')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})