class Tool {
  //添加css属性观察者 MutationObserver对象
  static observer(el, func, filter) {
    var observer = new MutationObserver(function (mutations, observer) {
      mutations.forEach(function (mutation) {
        func(mutation)
      })
    })
    var config = {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: filter
    }

    observer.observe(el, config)
  }

  //秒转化为00:00:00格式
  static formatSeconds(value) { 
    var theTime = parseInt(value) // 秒
    var theTime1 = 0 // 分
    var theTime2 = 0 // 小时

    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)

      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60)
        theTime1 = parseInt(theTime1 % 60)
      }
    }

    theTime1 = theTime1 < 10 ? `0${theTime1}` : theTime1
    theTime2 = theTime2 < 10 ? `0${theTime2}` : theTime2
    theTime = theTime < 10 ? `0${theTime}` : theTime

    var result = `00:00:${theTime}`

    if (theTime1 > 0) {
      result = `00:${theTime1}:${theTime}`
    }

    if (theTime2 > 0) {
      result = `${theTime2}:${theTime1}:${theTime}`
    }

    return result
  }
}