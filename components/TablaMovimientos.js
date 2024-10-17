import { View, Text } from "react-native"

//Importacion de supabaseClient
import { supabase } from "../backend/supabaseClient"
//Importaciones react-native-paper
import { Button, DataTable} from "react-native-paper"


const TablaMovimientos = ()  =>{

    const obtenerMovimientos = async() => {
        let {data, error} = await supabase
        .from('movimiento')
        .select('*')

        if(error){
            console.error("Hubo un error al obtener la informacion: ", error);
        }else{
            console.log("Se obtuvo la data correctamente: ", data)
        }
    }

    return(
        <View>
            <Button mode="outlined" onPress={()=>obtenerMovimientos()}>
                Presioname
            </Button>
        </View>
    )
}

export {TablaMovimientos}