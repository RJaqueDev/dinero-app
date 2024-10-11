import { View, Text, StyleSheet} from "react-native"

const SaldoDiario = () => {

    const saldo = 0;

  return (
    <View style={styles.container}>
        <Text>${saldo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export {SaldoDiario};