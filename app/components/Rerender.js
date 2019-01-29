import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class RerenderComponent extends Nanocomponent {
  state = { count: '🐈 ' }
  
  onClick = () => {
    this.state.count += '🐈 '
    this.rerender()
  }

  createElement() {
    return (html`
      <div>
        <div style="font-size: 40px;">${this.state.count}</div>
        <button onclick=${this.onClick}>click me</button>
      </div>
    `)
  }
}

export { RerenderComponent }