import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class BasicComponent extends Nanocomponent {
  createElement() {
    return (html`
      <div>hiya world ^^</div>
    `)
  }
}

export { BasicComponent }

