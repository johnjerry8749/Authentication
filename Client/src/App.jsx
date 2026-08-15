import { Route, Routes } from 'react-router-dom';
import AllHomecomponents from './components/pages/AllHomecomponents.jsx';
import ProductDetails from './components/pages/ProductDetails.jsx'
const App = () => {
  return (
    <div>

      <Routes>
        {/* Home Page */}
      <Route path="/" element={<AllHomecomponents />} />
      <Route path='/ProductDetails' element={<ProductDetails />} />


      </Routes>
    </div>
  )
}

export default App
