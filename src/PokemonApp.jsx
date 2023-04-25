import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


export const PokemonApp = () => {

    return(
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
} 