exports.onInitialClientRender = () => {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date()
  ;(function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/6091f715b1d5182476b5a922/1f4t2qb7l"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0.parentNode.insertBefore(s1, s0)
  })()
}
