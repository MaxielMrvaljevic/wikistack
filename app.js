const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
const wiki = require('./routes/wiki');
const users = require('./routes/users');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/wiki', wiki);

app.use('/users', users);

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send(layout(''));
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
});

const PORT = 1337;

const init = async () => {
    try {
      await db.sync();

      app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
      });
    } catch (e) {
      console.log('Woops, my window broke', e);
    }
};
  
init();




