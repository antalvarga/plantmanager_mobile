import React from 'react';
import {View, Text} from 'react-native';

/// Aula2 - 26:40
//import {} from 'react-native';

// Aula2 - 27:50
import AppLoading from 'expo-app-loading';

// Aula2 - 37:54
//import Welcome from './src/pages/Welcome';

// Aula2 - 1:11:23
//import UserIdentification from './src/pages/UserIdentification';
// import Confirmation from './src/pages/Confirmation';

// Aula2 - 1:21:04
import Routes from './src/routes';

// Aula2 - 24:09 
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import styles from './styles';




const App = () => {

    // Aula2 - 25:00
    const [ fontsLoaded ] = useFonts({
        Jost_400Regular
        , Jost_600SemiBold
        
    });

    if (! fontsLoaded ) {
        
        // // Aula2 - 28:39 
        // return(
        //     <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
        //         <Text>Guenta aí... A fonte está carregando ... </Text>
        //     </View>
        // )
        return <AppLoading />
    }

    return(
        <Routes />        
    );
    
}


export default App;
