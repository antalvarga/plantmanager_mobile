
// Aula2 - 1:05:19
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

// Aula2 - 1:06:07
import Button from '../../components/Button';

import styles from './styles';





const Confirmation = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content} >

                <Text style={styles.emoji}>
                    😁
                </Text>

                <Text style={styles.title}>
                    Prontinho!
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title='Começar' />
                </View>

            </View>

        </SafeAreaView>
    );
};



export default Confirmation;