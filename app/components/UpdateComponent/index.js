import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'
import randomEmoji from 'random-emoji'

class UpdateComponent extends Nanocomponent {
  state = { emojiLists: [] }

  update = () => {
    const emojiLists = randomEmoji.random({ count: 100 }).map(({ character }))
  }
}

export default UpdateComponent