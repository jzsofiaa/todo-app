const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const TodoTask = require('./models/schema.js');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

// DB connection
mongoose.connect('mongodb://localhost:27017/TODO', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
    }, () => {
    console.log('Connected to db!');
 });

// GET
app.get('/', (req, res) => {
    TodoTask.find((err, tasks) => {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {
                todotasks: tasks
          });
        }
    })
});

// POST
app.post('/', async (req, res) => {
     const todoTask = new TodoTask({
         content: req.body.content
     });
     try {
        await todoTask.save();
        res.redirect('/');
     } catch (err) {
        res.redirect('/');
     }
});

// DELETE
app.route('/remove/:id').get((req, res) => {
     TodoTask.findByIdAndRemove(req.params.id, err => {
         if (err) {
             return res.send(500, err);
         } else {
             res.redirect('/');
         }
     });
});

// SERVER start
app.listen(PORT, () => {
    console.log('Running at Port 5000')
});