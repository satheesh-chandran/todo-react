const express = require('express');
const Todo = require('./todo');
const app = express();
const PORT = 8000;

const middleware = (req, res, next) => {
  console.log(req.method, req.path);
  req.todo = req.app.locals.todo;
  next();
};
const serveHeading = (req, res) => res.json({ heading: req.todo.getHeading() });
const serveTodoItems = (req, res) => res.json(req.todo.getAllItems());
const resetHeading = (req, res) => {
  req.todo.resetHeading();
  res.send('OK');
};
const clearItems = (req, res) => {
  req.todo.clearItems();
  res.send('OK');
};
const editHeading = (req, res) => {
  req.todo.editHeading(req.body.heading);
  res.send('OK');
};
const addItem = (req, res) => {
  req.todo.addItem(req.body.title);
  res.send('OK');
};
const deleteItem = (req, res) => {
  req.todo.deleteItem(req.params.id);
  res.send('OK');
};
const changeStatus = (req, res) => {
  req.todo.changeStatus(+req.params.id);
  res.send('OK');
};

app.locals.todo = new Todo();

app.use(express.json());

app.use(middleware);

app.get('/api/heading', serveHeading);
app.get('/api/clearItems', clearItems);
app.get('/api/resetHeading', resetHeading);
app.get('/api/getAllItems', serveTodoItems);
app.post('/api/addItem', addItem);
app.post('/api/editHeading', editHeading);
app.post('/api/deleteItem/:id', deleteItem);
app.post('/api/changeStatus/:id', changeStatus);

app.listen(PORT, () => console.log('listening at port :', PORT));
