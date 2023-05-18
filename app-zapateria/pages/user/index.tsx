import React from 'react'
import { MainLayouts } from '../../layouts'
import { UserList } from '@/components/usuarios'
import { useUser } from '@/hooks/useUser';
import { Mundo } from '../../components';

const UsuariosIndex = () => {

  const { user, isLoading } = useUser ('/auth');
  console.log("l=", isLoading, "c=", user);

  return (
    <MainLayouts>
        <h2>Usuarios</h2>
        <UserList usuarios={user} />
        {
          (isLoading)
          ? <UserList usuarios = {user} />
          : ''
        }
    </MainLayouts>
    
  )
}


export default UsuariosIndex