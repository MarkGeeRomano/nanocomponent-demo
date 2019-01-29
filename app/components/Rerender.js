import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class RerenderComponent extends Nanocomponent {
  state = { cats: '🐈 ' }
  
  onClick = () => {
    this.state.cats += '🐈 '
    this.rerender()
  }

  createElement() {
    return (html`
      <div>
        <div style="font-size: 40px;">${this.state.cats}</div>
        <button onclick=${this.onClick}>click me</button>
      </div>
    `)
  }
}

export { RerenderComponent }