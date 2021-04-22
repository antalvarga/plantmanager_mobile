
import {StyleSheet} from 'react-native'

import colors from '../../styles/colors';

const styles = StyleSheet.create({

    // Aula1 - 57:30
    button: {
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
        // Aula1 - 1:00:04
    , buttonText: {
        color: colors.white
        , fontSize: 24
        //, fontWeight: 'bold'
        ,
    }

});



export default styles;