import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'
import defaultView from './defaultView'
import Emoji from './Emoji'

class UnloadComponent extends Nanocomponent {
  state = { view: 'default' }

  children = { default: defaultView, emoji: new Emoji }

  switchView = (e, view) => {
    e.preventDefault()
    this.state.view = view
    this.rerender()
  }

  createElement() {
    const { state, children } = this
    return (html`
      <div>
        <div>
          <a onclick=${e => this.switchView(e, 'default')} href="#">
            Home
          </a>
          <a onclick=${e => this.switchView(e, 'emoji')} href="#">
            Emoji Screen
          </a>
        </div>
        ${state.view === 'default' ? children.default : children.emoji.render()}
      </div>
    `)
  }
}

export { UnloadComponent }