const express = require('express');
const Todo = require('./todo');
const app = express();
const PORT = 8000;

const {
  addItem,
  middleware,
  clearItems,
  deleteItem,
  editHeading,
  changeStatus,
  serveHeading,
  resetHeading,
  serveTodoItems
} = require('./handler');

app.locals.todo = new Todo();

app.use(express.json());

app.use(middleware);

app.get('/api/heading', serveHeading);
app.get('/api/clearItems', clearItems);
app.get('/api/resetHeading', resetHeading);
app.get('/api/getAllItems', serveTodoItems);
app.post('/api/addItem', addItem);
app.post('/api/editHeading', editHeading);
app.post('/api/deleteItem', deleteItem);
app.post('/api/changeStatus', changeStatus);

app.listen(PORT, () => console.log('listening at port :', PORT));
