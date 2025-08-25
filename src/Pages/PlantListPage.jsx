import { useState } from "react"
import { Link } from "react-router"
import PlantCard from "../Components/PlantCard"

function PlantListPage() {

const [allPlants, setAllPlants] = useState












  return (

    <div>
      <Link to="/plantdetails">
      <button>See Plant Information</button>
      </Link>

      <PlantCard/>
    </div>
  )
}
export default PlantListPage