// Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD 

// Aula1 - 1:10:12 - useState
// Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD 
// import React, {useState} from 'react';
import React from 'react';

// Aula1 - 51:17 - TouchableOpacity
// Aula1 - 51:17 - StyleSheet
// Aula1 - 51:17 - SafeAreaView
// Aula2 - 11:30 - Dimensions
// Ajustes pessoais
// import {SafeAreaView, Text, View, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';

// Aula2 - 17:08 - Entypo
// Aula2 - 19:28 - Feather
// import {Entypo} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// import watering from '../assets/watering.png';
import watering from '../../assets/watering.png';

// Ajustes pessoais - styles.tsx
// Aula1 - 56:06
//import colors from '../../styles/colors';

// Aula2 - 1:22:51
import { useNavigation } from '@react-navigation/core';

// Aula2 - 31:18 - importar fonts
//import fonts from '../../styles/fonts';
import styles from './styles';




// Aula1 - 1:05:01
// Aula2 - 14:39
// import Button from '../components/Button';

const Welcome = () => {

    // Aula1 - 1:10:33 - state
    // const [visible, setVisible] = useState(false);

    // Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD 
    //const [visible, setVisible] = useState(true);

    // Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD 
    // function handleVisiblility() {
    //     setVisible(true);
    // }

    // Aula2 - 1:22:51
    const navigation = useNavigation();

    // Aula2 - 1:22:43
    const handleStart = () => {

        navigation.navigate('UserIdentification');
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* // Aula2 - 34:29 - view wrapper */}
            <View style={styles.wrapper}>


                <Text style={styles.title}>                
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil...
                </Text>

                {/* Aula1 - 1:12:30 - Condição ternaria
                <Image source={watering} style={styles.image}/> 
                */}
    {/* 
                // Aula2 - 8:11 - Retirou o state - Fiz backup para Welcome_OLD 

                {
                    visible &&
                    <Image source={watering} style={styles.image}/>
                }
    */}

                {/* 
                Aula2 - 14:18
                <Image source={watering} style={styles.image}/> */}
                <Image source={watering} style={styles.image} resizeMode='contain' />

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

    {/* 
                // Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD 

                <Button title='>' />     
    */}


                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}  
                    onPress={handleStart}
                >
    {/* 
                    // Aula2 - 32:26 - remover o text
                    <Text style={styles.buttonText}> */}

                        {/* // Aula2 - 19:34
                        <Entypo name='chevron-thin-right' 
                                style={styles.buttonIcon}
                        /> */}

                        <Feather name= 'chevron-right' style={styles.buttonIcon}
                        />

                    {/* </Text> */}
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}


export default Welcome;


/*
Ajustes pessoais - styles.tsx

const styles = StyleSheet.create({
    container: {
        flex: 1
        // , alignItems: 'center'
        // // Aula2 - 12:17
        // // , justifyContent: 'space-between'
        // , justifyContent: 'space-around'
        // // Ajuste pessoal
        // , paddingTop: 32
        , 
    }
    , wrapper: {
        flex: 1

        // Aula2 - 35:11 - trazer configuracoes do container
        , alignItems: 'center'
        // Aula2 - 12:17
        // , justifyContent: 'space-between'
        , justifyContent: 'space-around'
        // Ajuste pessoal
        , paddingTop: 32
        , paddingHorizontal: 20
        , 
    }
    , title: {
        fontSize: 28
        , fontWeight: 'bold'
        , textAlign: 'center'
        , color: colors.heading
        , marginTop: 38
        , fontFamily: fonts.heading
        , lineHeight: 32
        , 
    }
    // Aula1 - 56:58
    , subtitle: {
        textAlign: 'center'
        , fontSize: 18
        , paddingHorizontal: 20
        , color: colors.heading
        // Aula2 - 32:40
        , fontFamily: fonts.text
        ,
    }
    
    // Aula1 - 58:35
    // Aula2 - 13:40 - usando Dimensions
    , image: {
        //width: 292
        // , height: 284
        height: Dimensions.get('window').width * 0.7
        ,  
    }

    // Aula1 - 57:30
    // Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD - deixou de ser component
    //Aula1 - 1:04:20 foi transferido para components> Button
    , button: {
        backgroundColor: colors.green
        , justifyContent: 'center'
        , alignItems: 'center'
        , borderRadius: 16
        , marginBottom: 10
        , height: 56
        // Aula1 - 1:02:36
        // Aula2 - 11:33 - voltou o width
        // , width: 56
        , width: 56
        // Aula2 - 11:36
        // , paddingHorizontal: 10
        ,
    }
    // Aula1 - 1:00:04
    // Aula2 - 8:09 - Retirou o state - Fiz backup para Welcome_OLD - deixou de ser component
    , buttonText: {
        color: colors.white
        , fontSize: 24
        //, fontWeight: 'bold'
        ,
    }
    // Aula2 - 18:25
    , buttonIcon: {
        fontSize: 32
        , color: colors.white
    }
    
});
*/