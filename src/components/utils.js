const sendRequest = (url, callback, options = { method: 'GET' }) =>
  fetch(url, options)
    .then(res => res.json())
    .then(callback);

const getPostOptions = body => ({
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body)
});

export { sendRequest, getPostOptions };
