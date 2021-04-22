// Aula1 - 1:02:00 - components
import React from 'react';

// Aula1 - 1:08:50 - TouchableOpacityProps
import {View, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';


import styles from './styles';


// Aula1 - 1:06:00
// Aula1 - 1:08:54 - extends
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}


// Aula1 - 1:06:17 - props
// Aula1 - 1:10:00 - spread operator (...rest)
const Button = ({ title, ...rest } : ButtonProps) => {
    return(

        <View>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
                <Text style={styles.buttonText}> {title} </Text>
            </TouchableOpacity>

        </View>


    )
}


export default Button;