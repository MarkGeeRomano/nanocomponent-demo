import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class RerenderComponent extends Nanocomponent {
  state = { count: 1 }

  onClick = () => {
    this.state.count = ++this.state.count
    this.rerender()
  }

  createElement() {
    return (html`
      <div>
        <div>${this.state.count}</div>
        <button onclick=${this.onClick}>🐈</button>
      </div>
    `)
  }
}

export { RerenderComponent }