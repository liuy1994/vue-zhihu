(function () {
  var ajax = new XMLHttpRequest()
  ajax.onreadystatechange = function (res) {
    if (ajax.readyState === 4 && ajax.status === 200) {
      console.log(JSON.parse(ajax.responseText))
      console.log('成功')
    }
  }
  ajax.open('GET', '/api/4/news/latest')
  ajax.send()
  console.log(123)
})()
