import React from 'react'
import { MainLayouts } from '../../layouts'
import { ZapatosCardList} from '@/components/zapatos'
import { useZapatos } from '@/hooks/useZapato';
import { Mundo } from '../../components';

const ZapatosIndex = () => {

  const { zapatos, isLoading } = useZapatos ('/zapatos');
  console.log("l=", isLoading, "c=", zapatos);

  return (
    <MainLayouts>
        <h2>Zapatos</h2>
        <ZapatosCardList zapatos={zapatos} />
        {
          (isLoading)
          ? <ZapatosCardList zapatos = {zapatos} />
          : <Mundo />
        }
    </MainLayouts>
    
  )
}


export default ZapatosIndex