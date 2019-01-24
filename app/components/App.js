import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class App extends Nanocomponent {
  state = { a: 5 }

  onClick = console.log
  createElement() {
    return html`
      <div onclick=${this.onClick}>
        heya world
      </div>
    `
  }
}

export default App