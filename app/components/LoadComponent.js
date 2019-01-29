import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class LoadComponent extends Nanocomponent {
  state = { posts: [], dots: 1 }

  load = async () => {
    await new Promise(_=> setTimeout(_, 6500))

    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    this.state.posts = posts
    this.rerender()
  }

  renderPosts = () => {
    return this.state.posts.length
      ? this.state.posts.map(({ title }) => html`<div>${title}</div>`)
      : html`<div>Getting posts, please wait${'.'.repeat(this.state.dots)}</div>`
  }

  createElement() {
    return (html`
      <div style="font-family: Comic Sans MS;">${this.renderPosts()}</div>
    `)
  }

  constructor() {
    super()
    setInterval(() => {
      this.state.dots === 5 
        ? this.state.dots = 0
        : ++this.state.dots
      this.rerender()
    }, 300)
  }
}

export { LoadComponent }