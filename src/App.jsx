import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import ItemContext from './context/itemContext'


function App() {

  return (
    <div>
      <ItemContext>
        <RouterProvider router={routes} />
      </ItemContext>
    </div>
  )
}

export default App
