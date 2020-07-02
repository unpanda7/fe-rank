const debounce = (fn, wait = 500) => {
  let timer = null
  return () => {
    timer && clearTimeout(timer)
    timer = setTimeout(fn, wait)
  }
}

const throttle = (fn, wait = 500) => {
  let lastTime = 0
  return () => {
    let currentTime = Date.now()
    if (currentTime - lastTime > wait) {
      fn()
      lastTime = currentTime
    }
  }
}