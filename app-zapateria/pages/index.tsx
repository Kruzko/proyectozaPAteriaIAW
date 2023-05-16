import { NextPage } from "next"
import { MainLayouts, PublicLayouts } from "../layouts";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <PublicLayouts>
      <h1>Zapateria </h1>
    </PublicLayouts>
  )
}

export default indexPage