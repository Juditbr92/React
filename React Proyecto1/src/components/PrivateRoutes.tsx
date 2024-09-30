import { Navigate } from 'react-router-dom'
import React from 'react'

function PrivateRoutes() {

    const user = null

    return (
        <div>
            {!user && <Navigate to="/" />}
            {user && <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoutes
