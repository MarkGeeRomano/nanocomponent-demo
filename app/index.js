
import * as components from './components'

const root = document.createElement('div')
document.body.appendChild(root)

//***** Basic component
// const basicComponent = new components.BasicComponent
// root.appendChild(basicComponent.render())

//***** Rerender component
// const rerenderComponent = new components.RerenderComponent
// root.appendChild(rerenderComponent.render())

//***** LoadComponent component
// const loadComponent = new components.LoadComponent
// root.appendChild(loadComponent.render())

//***** UnloadComponent component
const unloadComponent = new components.UnloadComponent
root.appendChild(unloadComponent.render())