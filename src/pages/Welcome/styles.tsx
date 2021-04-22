// Ajustes pessoal
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


// Aula1 - 56:06
import colors from '../../styles/colors';

// Aula2 - 31:18 - importar fonts
import fonts from '../../styles/fonts';





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



export default styles;