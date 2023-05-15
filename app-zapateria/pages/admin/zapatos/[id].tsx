import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "layouts";
import { useZapatos } from 'hooks/useZapato';
import { ZapatoDetail } from 'components/zapatos/ZapatoDetail';
import { IZapato } from 'interfaces/zapato/IZapato';

interface Props {
    cod: string
}

const ZapatoPage = () => {
    const router = useRouter();
    console.log(router);
   
    const cod = router.query;
    // renombrando la variable zapatos por zapato
    const { zapatos:zapato, isLoading } = useZapatos(`/zapatos/${cod.id}`);
    console.log(zapato)
  return (
    <PublicLayouts> 
       <h2>detalle del zapato {`${router.query.id}`} </h2>
        <ZapatoDetail zapato={zapato} />
        
    </PublicLayouts>
    
  )
}

export default ZapatoPage