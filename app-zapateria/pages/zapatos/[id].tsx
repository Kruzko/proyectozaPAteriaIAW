import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useZapato } from '../../hooks/useZapato';
import  ZapatoDetail  from '../../components/zapatos/ZapatoDetail';

const ZapatoPage = () => {
    const router = useRouter();
    console.log(router);
   
    const cod = router.query;
    // renombrando la variable zapatos por zapato
    const { zapato, isLoading } = useZapato(`/zapatos/${cod.id}`);
    console.log(zapato)
  return (
    <PublicLayouts> 
       <h2>detalle del zapato {`${router.query.id}`} </h2>
       {
        ( zapato != undefined ) ? 
          ( <ZapatoDetail zapato={zapato} /> )
          : ''
        }
    </PublicLayouts>
    
  )
}

export default ZapatoPage