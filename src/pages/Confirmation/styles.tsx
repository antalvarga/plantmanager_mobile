// Aula2 - 1:05:19

import React from 'react';
import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'space-around'
        , 
    }
    , content: {
        flex: 1
        , justifyContent: 'center'
        , alignItems: 'center'
        , width: '100%'
        , padding: 30
        , 
    }
    , title: {
        fontSize: 22
        , fontFamily: fonts.heading
        , textAlign: 'center'
        , color: colors.heading
        , lineHeight: 38
        , marginTop: 20
        , 
    }
    , subtitle: {
        fontFamily: fonts.text
        , textAlign: 'center'
        , fontSize: 17
        , paddingHorizontal: 10
        , color: colors.heading
        , marginTop: 20
        , 
    }
    , emoji: {
        fontSize: 78
        , 
    }
    , footer: {
        width: '100%'
        , paddingHorizontal: 50
        , marginTop: 32
        , 
    }

});



export default styles;