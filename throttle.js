function throttle(fn, wait) {
  let timer;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        fn(args);
      }, wait);
    }
  };
}
z