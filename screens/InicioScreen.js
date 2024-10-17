    import { Text, View, StyleSheet } from "react-native";

//Importación de componentes
import {SaldoDiario} from "../components/SaldoDiario";
import { TablaMovimientos } from "../components/TablaMovimientos";

const InicioScreen = () => {
    return(
        <View style={styles.container}>
            <SaldoDiario/>
            <TablaMovimientos/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export {InicioScreen}