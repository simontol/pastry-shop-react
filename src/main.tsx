import ReactDOM from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={ store }>
        <App />
    </Provider>
)
