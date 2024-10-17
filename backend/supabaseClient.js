import { createClient } from "@supabase/supabase-js";

//Importaciones react-native-config para variables de entorno
import { SUPABASEURL, SUPABASEKEY } from '@env';

const supabaseUrl = SUPABASEURL;
const supabaseKey = SUPABASEKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export {supabase}