import html from 'nanohtml'
import Nanocomponent from 'nanocomponent'
import Progressbar from './Progressbar'
import dumProgressbar from './DumbProgressbar'

class Animate extends Nanocomponent {
  constructor() {
    super()
    setInterval(() => {
      const { state } = this
      state.percent = state.percent >= 100 ? 0 : state.percent += 20
      this.rerender.bind(this)()
    }, 1000)
  }

  state = { percent: 0 }

  progressbar = new Progressbar
  dumProgressbar = dumProgressbar

  update = () => true

  createElement() {
    return (html`
      <div style="width: 200px; height: 50px; border: 1px solid;  display: flex; flex-direction: column; justify-content: center; align-items: center;">
        ${this.progressbar.render(this.state.percent)}
        <div style="margin: 5px 0;"></div>        
        ${this.dumProgressbar(this.state.percent)}
      </div>
    `)
  }
}

export { Animate }