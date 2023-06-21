import React from 'react'
import { MainLayouts } from '../../layouts'
import { useZapatos } from '@/hooks/useZapato';
import { Mundo } from '../../components';
import ZapatosList from '@/components/zapatos/ZapatoList'
import ZapatosCardList from '@/components/zapatos/ZapatoCardList'

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
          : ''
        }
    </MainLayouts>
    
  )
}

export default ZapatosIndexTabla;