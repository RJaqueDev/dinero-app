import { Text, View, StyleSheet } from "react-native";

//Importación de componentes
import {SaldoDiario} from "../components/SaldoDiario";

const InicioScreen = () => {
    return(
        <View style={styles.container}>
            <SaldoDiario/>
            <Text>Esta es la pantalla de inicio</Text>
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