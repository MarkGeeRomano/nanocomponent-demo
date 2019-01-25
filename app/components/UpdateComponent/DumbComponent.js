import Nanocomponent from 'nanocomponent'
import html from 'html'

class Dumb extends Nanocomponent {
  createElement(emoji) {
    return (html`
      <div>${emoji.repeat(10)}</div>
    `)
  }
}

export default Dumb