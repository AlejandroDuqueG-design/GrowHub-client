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
        <Route path="/plant-list" element= { <PlantListPage/>}/>
        <Route path="/plant-details/:plantId" element={ <PlantDetailsPage/>}/> 
        <Route path="/add-new-plant" element={ <AddPlantPage/> }/>
        <Route path="*" element={<ErrorPage/>}/>
              
      </Routes>


    </div>
  )
}

export default App
