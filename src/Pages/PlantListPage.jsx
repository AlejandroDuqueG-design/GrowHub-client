
import { Link } from "react-router"
import PlantCard from "../Components/PlantCard"

function PlantListPage() {



  return (

    <div>
      <Link to="/plant-details">
      <h3>All our plants</h3>
      </Link>

      <p>
        Here is a list with all the plants added by our users. 
        Every card contains plant basic info like: common name, scientific name and type.
      </p>

      <PlantCard/>
    </div>
  )
}
export default PlantListPage