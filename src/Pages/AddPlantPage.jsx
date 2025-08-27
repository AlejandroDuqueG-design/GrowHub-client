import { useNavigate } from "react-router"
import AddPlantCard from "../Components/AddPlantCard"
import { useState } from "react";
import axios from "axios";

function AddPlantPage() {


  return (
    <div className="add-plant-text">
      <h5>Add your own plant</h5>
      <p>Just filling the form, you would be able to add your own plant to our list, contributing to this plant library</p>
     <AddPlantCard/>
    </div>
  )
}

export default AddPlantPage