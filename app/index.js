
import * as components from './components'

const root = document.createElement('div')
document.body.appendChild(root)

//***** Basic component
// const basicComponent = new components.BasicComponent
// const renderedCompy = basicComponent.render()
// root.appendChild(renderedCompy)

//***** Rerender component
const rerenderComponent = new components.RerenderComponent
root.appendChild(rerenderComponent.render())

//***** Load component
// const loadComponent = new components.LoadComponent
// root.appendChild(loadComponent.render())

//***** Unload component
// const unloadComponent = new components.UnloadComponent
// root.appendChild(unloadComponent.render())

//***** Update component
// const updateComponent = new components.UpdateComponent
// root.appendChild(updateComponent.render())

//Animate component
// const animateComponent = new components.Animate
// root.appendChild(animateComponent.render())

//***** Emoji app 5000
// const app = new components.App
// root.appendChild(app.render())
