function debounce(fn, wait = 500) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, wait);
  };
}

const a = debounce(function() {
  console.log(this.test);
});
a.test = 1;
a();
