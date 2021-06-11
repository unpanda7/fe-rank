const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / 2) }, (v, i) => arr.slice(i * size, i * size + size))

const countOccurentces = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

const difference1 = (a, b) => a.filter(x => !b.includes(x))

const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr.shift()
  return arr
}

const groupBy = (arr, func) => {
  arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})
}

const intersection = (a, b) => [...new Set(a)].filter(x => b.includes(x))

const mapObject = (arr, n = 0) => (arr, fn) => {
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr)
    return acc
  }, {})
}

const pick = (obj, arr) => 
  arr.reduce((acc, cur) => (cur in obj && (acc[cur] = obj[cur]), acc), {})
