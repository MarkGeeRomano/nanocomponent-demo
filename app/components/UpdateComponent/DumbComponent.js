import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class Dumb extends Nanocomponent {
  props = { emoji: ''}

  update = (props) => {
    const [{ emoji: oldEmoji }] = this._arguments
    return props.emoji !== oldEmoji
  }

  // update = () => true

  createElement({ emoji, index, changeEmoji }) {
    return (html`
      <span style="cursor: pointer;" onclick=${() => changeEmoji(index)}>${emoji.repeat(10)}</span>
    `)
  }
}

export default Dumb