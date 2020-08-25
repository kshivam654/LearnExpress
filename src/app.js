const path = require('path')
const express = require('express')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handlebar engine views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'From A Static File From HBS (2)',
        name: 'Shivam Sharma'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Page'
    })
})

app.get('/weather', (req, res)=>{
    res.render('weather')
})

app.get('/help', (req, res)=>{
    res.render('help')
})

app.get('*', (req, res)=>{
    res.send('Eror 404 Page not Found')
})

app.listen(3000, ()=>{
    console.log('Server is Live at port: 3000')
})