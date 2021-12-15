import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import PageTable from "./pages/PageTable"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: PageTable
    }
]