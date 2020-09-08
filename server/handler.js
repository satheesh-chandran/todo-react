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
  req.todo.deleteItem(req.body.id);
  res.send('OK');
};

const changeStatus = (req, res) => {
  req.todo.changeStatus(req.body.id);
  res.send('OK');
};

module.exports = {
  addItem,
  middleware,
  clearItems,
  deleteItem,
  editHeading,
  changeStatus,
  serveHeading,
  resetHeading,
  serveTodoItems,
};
