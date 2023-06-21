import React from 'react'
import { MainLayouts } from 'layouts'
import { useZapatos } from '@/hooks/useZapato';
import ZapatosList from '@/components/zapatos/ZapatoList';


const ZapatosIndexTabla = () => {

  const { zapatos, isLoading } = useZapatos ('/zapatos');
  console.log("l=", isLoading, "c=", zapatos);

  return (
    <MainLayouts>
        <h2>Zapatos</h2>

      
        {
          (zapatos != undefined)?
          ( <ZapatosList zapatos = {zapatos} />)
          : ''
        }
    </MainLayouts>
    
  )
}

export default ZapatosIndexTabla;