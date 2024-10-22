import { Navigate } from 'react-router-dom'

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
