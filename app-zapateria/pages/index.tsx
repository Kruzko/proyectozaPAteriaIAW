import { NextPage } from "next"
import { MainLayouts } from "../layouts";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <MainLayouts>
      <h1>Zapateria </h1>
    </MainLayouts>
  )
}

export default indexPage