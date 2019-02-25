function deepClone(obj) {
  function isObject(o) {
    return typeof o === "object" && o !== null;
  }

  if (!isObject(obj)) {
    return obj;
  }

  let isArray = Array.isArray(obj);
  let newObj = isArray ? [...obj] : { ...obj };
  for (const key in newObj) {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  }
  return newObj;
}

let obj = {
  a: [1, 2, 3],
  b: {
    c: function() {
      console.log(1);
    },
    d: 3
  }
};
let newObj = deepClone(obj);
obj.b.c = 1;
console.log(newObj); // 2
