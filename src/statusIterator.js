const DONE = 'done';
const WORKING = 'working';
const UNDONE = 'undone';
const toggle = { [DONE]: UNDONE, [UNDONE]: WORKING, [WORKING]: DONE };
module.exports = {
  getDefault: () => UNDONE,
  toggleStatus: currentStatus => toggle[currentStatus]
};
