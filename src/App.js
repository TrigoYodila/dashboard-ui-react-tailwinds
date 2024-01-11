import Layout from './components/shared/Layout'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='products' element={<Products />} />
                    <Route />
                </Route>
                <Route path="/login" element={<div>This is a login page</div>}/>
            </Routes>
        </Router>
    )
}

export default App
