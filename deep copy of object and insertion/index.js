'use strict';

const set = (obj, path, value) => {
  let newObj = copy(obj);

  return path.split('.').reduce((acc, key, index, array) => {
    if(index === array.length - 1) {
      acc[key] = value;

      return newObj;
    }

    if(!acc[key])
      acc[key] = {};

    return acc[key];
  }, newObj);
};

const copy = (obj) => {
  let newObj = {...obj};

  let links = [newObj];

  while(links.length) {
    let link = links.pop();

    for(let [key, value] of Object.entries(link)) {
      if(link[key] !== null && typeof link[key] === 'object') {
        link[key] = {...value};
        links.push(link[key]);
      }
    }
  }

  return newObj;
};

console.log(set({}, 'a.b.c', 4));