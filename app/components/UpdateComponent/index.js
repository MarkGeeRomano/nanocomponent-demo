import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'
import randomEmoji from 'random-emoji'
import DumbComponent from './DumbComponent'

class UpdateComponent extends Nanocomponent {
  state = { emojiList: [] }

  load = () => {
    const emojiList = [
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
      ...randomEmoji.random({ count: 1000 }).map(({ character }) => [new DumbComponent, character]),
    ]
    console.log('Number of emojsters rendered:' + emojiList.length)
    this.state.emojiList = emojiList
    this.rerender()
  }

  changeEmoji = (index) => {
    console.time('time to changeEmoji')
    const emojiComponent = this.state.emojiList[index]
    const [{character}] = randomEmoji.random({ count: 1 })
    emojiComponent[1] = character
    this.rerender()
    console.timeEnd('time to changeEmoji')
  }

  createElement() {
    const { changeEmoji, state } = this
    return (html`
      <div style="width: 100%; border: 1px solid;">
        <button onclick=${this.makeRandoEmoji}>click meh</button>
        ${state.emojiList.length 
          ? html`
            <div>
              ${state.emojiList.map(([component, emoji], index) => component.render({ emoji, index, changeEmoji }))}
            </div>`
          : html`<div>loading...</div>`}
      </div>
    `)
  }
}

export { UpdateComponent }