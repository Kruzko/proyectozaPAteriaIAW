import React from 'react'
import { MainLayouts } from 'layouts'
import { ZapatosCardList, ZapatosList} from '@/components/zapatos'
import { useZapatos } from '@/hooks/useZapato';
import { Mundo } from 'components';

const ZapatosIndexTabla = () => {

  const { zapatos, isLoading } = useZapatos ('/zapatos');
  console.log("l=", isLoading, "c=", zapatos);

  return (
    <MainLayouts>
        <h2>Zapatos</h2>
        <ZapatosList zapatos={zapatos} />
        {
          (isLoading)
          ? <ZapatosList zapatos = {zapatos} />
          : <Mundo />
        }
    </MainLayouts>
    
  )
}

export default ZapatosIndexTabla;