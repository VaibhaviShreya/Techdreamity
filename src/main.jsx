import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
import { store } from "./redux/store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <GoogleOAuthProvider clientId="551265700952-rjunchl12c5h9p6e1l6tgfq4cbvji08a.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
