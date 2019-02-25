function _Promise(fn) {
  let state = "pending";
  function resolve() {
      
  }
}

const demo = new _Promise(function(resolve, reject) {
  setTimeout(resolve(1), 500);
});

async function test() {
  const result = await demo();
  console.log(result);
}

test();
