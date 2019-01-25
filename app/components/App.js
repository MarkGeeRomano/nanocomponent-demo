import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'
import randomEmoji from 'random-emoji'

class App extends Nanocomponent {
  state = { emoji: [] }

  load = async () => {
    await new Promise(_ => setTimeout(_, 3000))
    this.getAndSetEmoji()
  }

  getAndSetEmoji = () => {
    const emoji = randomEmoji.random({ count: 208 }).map(this.makeEmojiSpan)
    this.state = { emoji }
    this.rerender()
  }

  makeEmojiSpan = ({ character }) => html`<span style=${styles.emojiSpan}>${character}</span>`

  renderEmoji = () => html`
    <div style=${styles.container}>
      ${this.state.emoji.length ? this.state.emoji : 'loading'}
    </div>`

  createElement() {
    return html`
      <div style="${styles.container}">
        <marquee>Emoji App 5000: the future is <b>now</b></marquee>
        ${this.state.emoji.length ? html`<button onclick=${this.getAndSetEmoji}>click me</button>` : null}
        ${this.renderEmoji()}
      </div>
    `
  }
}

const styles = {
  container: `width: 400px;`,
  emojiSpan: `padding: 0 10px;`
}

export { App }