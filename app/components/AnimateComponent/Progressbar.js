import html from 'nanohtml'
import Nanocomponent from 'nanocomponent'

class ProgressBar extends Nanocomponent {
  update = () => true
  createElement(percent) {
    return (html`
      <div style="width: 100%; height: 10px; background-color: grey;">
        <div style="width:${percent}%; height: 100%; background-color: red; transition: all 100ms;"></div>
      </div>
    `)
  }
}

export default ProgressBar