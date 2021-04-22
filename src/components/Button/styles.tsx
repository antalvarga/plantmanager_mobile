
import React from 'react';
import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';




const styles  = StyleSheet.create({
    container: {
        //flex: 1
        backgroundColor: colors.green
        , height: 56
        , borderRadius: 16
        , alignItems: 'center'
        , justifyContent: 'space-around'
        , 
    }
    , text: {
        fontSize: 16
        , color: colors.white
        , fontFamily: fonts.heading
        , 
    }
    ,
});



export default styles;