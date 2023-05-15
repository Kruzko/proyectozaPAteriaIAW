import { NextPage } from "next"
import { PublicLayouts } from "../../layouts/PublicLayouts"
import { MainLayouts } from '../../layouts/MainLayouts';

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPageadmin: NextPage = () => {
  

  return (
    <MainLayouts>
    {/* <SidebarLayout> */}
      <h1>Admin zapateria </h1>
      {/* </SidebarLayout> */}
    </MainLayouts>
  )
}

export default indexPageadmin