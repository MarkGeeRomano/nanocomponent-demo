import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class Dumb extends Nanocomponent {
  props = { emoji: ''}

  update = (newProps) => {
    if (newProps.emoji !== this.props.emoji) {
      Object.assign(this.props, newProps)
      return true
    }
    return false
  }

  createElement({ emoji, index, changeEmoji }) {
    emoji = emoji || this.props.emoji
    return (html`
      <span style="cursor: pointer;" onclick=${() => changeEmoji(index)}>${emoji.repeat(10)}</span>
    `)
  }
}

export default Dumb