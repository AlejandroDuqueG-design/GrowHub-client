import { Route, Routes } from "react-router"
import MainNavBar from "./Components/MainNavBar"
import HomePage from "./Pages/HomePage"
import PlantListPage from "./Pages/PlantListPage"
import PlantDetailsPage from "./Pages/PlantDetailsPage"
import AddPlantPage from "./Pages/AddPlantPage"
import ErrorPage from "./Pages/ErrorPage"
import Footer from "./Components/Footer"
import { useState } from "react"
import TreatmentListPage from "./Pages/TreatmentListPage"
import AddTreatmentPage from "./Pages/AddTreatmentPage"


function App() {

  //const [isDarkTheme, setIsDarkTheme]=useState(false) //To change from light them to dark theme
  
  return (
    <div className="darktheme">

      
      <MainNavBar/>
      <Footer/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/plants" element= { <PlantListPage/>}/>
        <Route path="/plant-details/:plantId" element={ <PlantDetailsPage/>}/> 
        <Route path="/add-new-plant" element={ <AddPlantPage/> }/>
        <Route path="/treatments/" element={ <TreatmentListPage/>}/>
        <Route path="/treatments/:plantId" element={ <TreatmentListPage/>}/>
        <Route path="/add-new-treatment" element={ <AddTreatmentPage/>}/>
        
        <Route path="*" element={<ErrorPage/>}/>
              
      </Routes>


    </div>
  )
}

export default App
