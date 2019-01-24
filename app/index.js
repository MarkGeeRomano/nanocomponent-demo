import App from './components/App'

const root = document.createElement('div')
document.body.appendChild(root)

const app = new App
root.appendChild(app.render())