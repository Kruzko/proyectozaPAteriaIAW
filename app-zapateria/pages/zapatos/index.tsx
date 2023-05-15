import React from 'react'
import { MainLayouts, PublicLayouts } from '../../layouts'
import { ZapatosCardList} from '@/components/zapatos'
import { useZapatos } from '@/hooks/useZapato';
import { Mundo } from '../../components';

const ZapatosIndex = () => {

  const { zapatos, isLoading } = useZapatos ('/zapatos');

  return (
    <PublicLayouts>
        <h2>Zapatos</h2>
        <ZapatosCardList zapatos={zapatos} />
    </PublicLayouts>
    
  )
}


export default ZapatosIndex;