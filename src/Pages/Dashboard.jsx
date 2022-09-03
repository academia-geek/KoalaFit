// import { DashboardMainContent } from "../Components/DashboardMainContent"
import { getAuth } from "firebase/auth"
import DashboardNavBar from "../Components/DashboardNavBar"
// import DashboardProfile from "../Components/DashboardProfile"
import ModalDashboard from "../Components/ModalDashboard"

const Dashboard = () => {

  const auth = getAuth()

  const salir = () => {
    auth.signOut()
  }


  return (
    <>
    <button onClick={salir}>Salir</button>
      <DashboardNavBar/>
      {/* <DashboardProfile/> */}
      <ModalDashboard />
      {/* <DashboardMainContent/> */}
    </>
  )
}

export default Dashboard