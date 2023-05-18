import React from 'react'
import { MainLayouts } from '../../layouts'
import { MaterialesList } from '@/components/materiales'
import { useMateriales } from '@/hooks/useMateriales';
import { Mundo } from '../../components';

const MaterialesIndex = () => {

  const { materiales, isLoading } = useMateriales ('/materiales');
  console.log("l=", isLoading, "c=", materiales);

  return (
    <MainLayouts>
        <h2>Materiales</h2>
        <MaterialesList materiales={materiales} />
        {
          (isLoading)
          ? <MaterialesList materiales = {materiales} />
          : ''
        }
    </MainLayouts>
    
  )
}


export default MaterialesIndex