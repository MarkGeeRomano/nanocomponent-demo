import Nanocomponent from 'nanocomponent'
import html from 'nanohtml'

class LoadComponent extends Nanocomponent {
  state = { posts: [] }

  load = async () => {
    await new Promise(_=> setTimeout(_, 4500))

    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    this.state.posts = posts
    this.rerender()
  }

  renderPosts = () => {
    return this.state.posts.length
      ? this.state.posts.map(({ title }) => html`<div>${title}</div>`)
      : html`<div>Loading....</div>`
  }

  createElement() {
    return (html`
      <div>${this.renderPosts()}</div>
    `)
  }
}
export { LoadComponent }