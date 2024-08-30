import React from 'react'
import ReactDOM from 'react-dom/client'
import ID from "./Id.jsx/Id.jsx"
import ID2 from "./Id.jsx/Id2.jsx"
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ID />} />
    <Route path="/muthuid" element={<ID2 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
