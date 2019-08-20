import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee, faInstagram, faFacebook)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}