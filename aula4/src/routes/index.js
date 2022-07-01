import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"
import { useContext, useEffect } from "react"
import { ActivityIndicator, View } from "react-native"
import { AuthContext } from "../context/AuthContext"
import { LoginContext } from "../context/LoginContext"
import { styles } from "../screens/Home/styles"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const Routes = () => {
    const { user, setUser, loading, setLoading } = useContext(AuthContext)
    const { pass, text } = useContext(LoginContext)

    useEffect(() => {
        if (user) return
        const handleRefresh = async () => {
            const userBd = await AsyncStorage.getItem("@Cartas:user")
            await new Promise((resolve) => setTimeout(resolve, 2000))
            if (userBd) {
                setUser(JSON.parse(userBd))
            }
            setLoading(false)
        };
        handleRefresh();

    }, [])
    if (loading) {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator size="large" />
            </View>)
    }
    return (
        <NavigationContainer>
            {/* {(!!user) ? */}
            <PrivateRoutes /> :
            {/* <PublicRoutes />} */}

        </NavigationContainer>
    )
}
export default Routes;
