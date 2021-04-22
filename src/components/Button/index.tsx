// Aula2 - 46:36 criar component Button
import React from 'react';
import {View, Text, TouchableOpacityProps, TouchableOpacity} from 'react-native';

import styles from './styles';


// Aula2 - 1:25:50 - Criar interface
interface ButtonProps extends TouchableOpacityProps {
    title: string;

}


const Button = ( { title, ...rest } : ButtonProps ) => {
    return(
        <TouchableOpacity style={styles.container} {...rest} >

            <Text style={styles.text}>
                { title }
            </Text>
            
        </TouchableOpacity>
    )
};




export default Button;
