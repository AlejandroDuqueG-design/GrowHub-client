import { Route, Routes } from "react-router"
import MainNavBar from "./Components/MainNavBar"
import HomePage from "./Pages/HomePage"
import PlantListPage from "./Pages/PlantListPage"
import PlantDetailsPage from "./Pages/PlantDetailsPage"
import AddPlantPage from "./Pages/AddPlantPage"
import ProfilePage from "./Pages/ProfilePage"
import ErrorPage from "./Pages/ErrorPage"


function App() {
  
  return (
    <div className="App">

      
      <MainNavBar/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/profile" element= { <ProfilePage/>}/>
        <Route path="/plantlist" element= { <PlantListPage/>}/>
        <Route path="plantdetails" element={ <PlantDetailsPage/>}/> 
        <Route path="/addnewplant" element={ <AddPlantPage/> }/>
        <Route path="*" element={<ErrorPage/>}/>
              



      </Routes>


    </div>
  )
}

export default App
