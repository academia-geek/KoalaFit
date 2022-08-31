import { Provider } from 'react-redux'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <div>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
    </div>
  )
}

export default App
