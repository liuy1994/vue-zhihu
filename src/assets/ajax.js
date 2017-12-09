(function () {
  var ajax = new XMLHttpRequest()
  ajax.onreadystatechange = function (res) {
    if (ajax.readyState === 4 && ajax.status === 200) {
      console.log(JSON.parse(ajax.responseText))
      console.log('成功')
    }
  }
  ajax.open('GET', 'http://173.213.88.44:8080/api/4/news/latest')
  ajax.send()
  console.log(123)
})()
