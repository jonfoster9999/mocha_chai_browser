function add(a, b) {
  return a + b;
}


function willBeAsync(cb) {
  setTimeout(() => {
    cb("hello");
  }, 1500)
}


willBeAsync(function(data) {
  return data;
})
