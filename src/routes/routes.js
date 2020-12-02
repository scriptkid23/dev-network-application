import React from "react"
import { BrowserRouter } from "react-router-dom"
import AuthRoutes from './AuthRoutes'

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  )
}