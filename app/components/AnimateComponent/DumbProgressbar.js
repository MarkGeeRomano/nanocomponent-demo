import html from 'nanohtml'

export default (percent) => {
  return (html`
    <div style="width: 100%; height: 10px; background-color: grey;">
      <div style="width:${percent}%; height: 100%; background-color: red; transition: all 100ms;"></div>
    </div>
  `)
}