import React from 'react'
import { HomeNav } from './HomeNav'
import Button from '@mui/material/Button';


export const Login = () => {
  return (
    <div>
     <HomeNav/>
     <h1>login page </h1>
     <Button href = '/dash' >Login</Button>
    </div>
  )
}
