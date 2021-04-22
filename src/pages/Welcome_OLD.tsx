
// Aula1 - 1:10:12 - useState
import React, {useState} from 'react';

// Aula1 - 51:17 - TouchableOpacity
// Aula1 - 51:17 - StyleSheet
// Aula1 - 51:17 - SafeAreaView
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import watering from '../assets/watering.png';

// Aula1 - 56:06
import colors from '../styles/colors';

// Aula1 - 1:05:01
import Button from '../components/Button_old';

const Welcome = () => {

    // Aula1 - 1:10:33 - state
    // const [visible, setVisible] = useState(false);
    const [visible, setVisible] = useState(true);

    function handleVisiblility() {
        setVisible(true);
    }


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>                
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {/* Aula1 - 1:12:30 - Condição ternaria
            <Image source={watering} style={styles.image}/> 
            */}

            {
                visible &&
                <Image source={watering} style={styles.image}/>
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar..
            </Text>

            {/* 
                Aula1 - 1:03:49

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}> Avançar </Text>
            </TouchableOpacity>

            */}

            {/* // Aula1 - 1:05:12 - importacao do button */}
            {/* <Button title='Avançar...' onPress={handleVisiblility} />      */}
            {/* <Button title='Ocultar imagem' onPress={handleVisiblility} />      */}

{/* 
            // Aula1 - 1:14:12
            <Button title='Imagem' onPress={handleVisiblility} />     
 */}

            <Button title='>' />     

        </SafeAreaView>
    );
}



export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'space-between'
        ,
    }
    , title: {
        fontSize: 32
        , fontWeight: 'bold'
        , textAlign: 'center'
        , color: colors.heading
        , marginTop: 38
    }
    // Aula1 - 56:58
    , subtitle: {
        textAlign: 'center'
        , fontSize: 18
        , paddingHorizontal: 20
        , color: colors.heading
        , 
    }
    // Aula1 - 57:30
    /*

    Aula1 - 1:04:20 foi transferido para components> Button
    , button: {
        backgroundColor: colors.green
        , justifyContent: 'center'
        , alignItems: 'center'
        , borderRadius: 16
        , marginBottom: 10
        , height: 56
        // Aula1 - 1:02:36
        // , width: 56
        , paddingHorizontal: 10
        ,
    }
    */
    // Aula1 - 58:35
    , image: {
        width: 292
        , height: 284
        ,  
    }
    // Aula1 - 1:00:04
    /*
    , buttonText: {
        color: colors.white
        , fontSize: 24
        //, fontWeight: 'bold'
        ,
    }
    */
})