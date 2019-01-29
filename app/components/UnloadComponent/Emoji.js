import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'
import randomEmoji from 'random-emoji'

class Emoji extends Nanocomponent {
  state = { emoji: '🐈', timer: null }

  load = () => {
    this.timer = setInterval(() => {
      const [emoji] = randomEmoji.random({ count: 1 })
      this.state.emoji = emoji.character
      this.rerender()
    }, 1000)
  }

  unload = () => {
    clearInterval(this.timer)
  }

  createElement() {
    return (html`
      <div style="font-size: 50px;">${this.state.emoji}</div>
    `)
  }
}

export default Emoji