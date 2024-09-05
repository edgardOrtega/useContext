# UseContext

1. *primeros pasos es crear una carpeta en src llamada Context y crear un componente llamado MyContext.jsx con el siguiente codigo:*

```
import{ createContext } from "react"
export const MyContext = createContext({})
export default MyContext

```
*asi se crea un Context*

2. *Proveer el Context en el app.jsx => Se importa el contexto creado a App.jsx y se envuelve la aplicacion en el componente Provider*

### ejemplo

```
import MyContext from "../Context/MyContext";
 import Component1 from "./Component1"
 import Component2 from "./Component2"
 function App() {
 return (
   <>
     <MyContext.Provider value={/* Aquí agregaremos el valor */}>
       <Component1 />
       <Component2 />
     </MyContext.Provider>
   </>
 )
 }
 export default App
 ```
 3. *proveer el Contexto creando estados con useState y agregarle esos datos a sharedState para darle valor al Provider por el atributo value*

```
import MyContext from "./my_context"
 import Component1 from "./Component1"
 import Component2 from "./Component2"
 import { useState } from "react"
 function App() {
 const [data, setData] = useState(0)
 const sharedState = {data, setData}
 return (
   <>
     <MyContext.Provider value={ sharedState}>
       <Component1 />
       <Component2 />
     </MyContext.Provider>
   </>
 )}
 export default App

```

4. *Consumir un Contexto*

```
/* Componente1.jsx */
 import { useContext } from "react"
 import MyContext from "./my_context"
 const Component1 = () => {
 const { data, setData } = useContext(MyContext)
 return (
   <button onClick={e => setData(data + 1)}> + 
</button>
 );
 }
 export default Component1
 ```

