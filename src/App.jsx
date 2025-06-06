import DefaultLayout from "./layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import TripDetails from "./pages/TripDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Homepage />} />
            <Route path="/trip/:id" element={<TripDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App