import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizzProvider } from './context/QuizzContext.jsx'

createRoot(document.getElementById('root')).render(

    <QuizzProvider>
      <App/>
    </QuizzProvider>

)
