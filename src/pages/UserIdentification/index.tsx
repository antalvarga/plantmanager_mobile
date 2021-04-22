import React, { useState } from 'react';
// . Aula2 - 54:29 - importar o keyboardAvoidingView
// import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {
    View
    , Text
    , SafeAreaView
    , TextInput
    , KeyboardAvoidingView
    , TouchableWithoutFeedback
    , Platform
    , Keyboard
} from 'react-native';

// Aula2 - 1:25:06
import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';
import colors from '../../styles/colors';

import styles from './styles';



const UserIdetification = () => {

    // Aula2 - 1:24:58
        const navigation = useNavigation();

        // Aula2 = 1:02 - Inferência de tipo de dados
        // Quando vc passa o valor default (false) não precisa tipar como em setName
        // Verificar se tem foco
        const [isFocused, setIsFocused ] = useState(false);

        // Aula2 - 1:00:42 - verificar se está preenchido
        const [ isFilled, setIsFilled] = useState(false);

        // Aula2 - 1:01: 
        const [name, setName] = useState<string>();


        function handleInputBlur() {

            setIsFocused(false);

            setIsFilled(!!name) ;
        }
        
        const handleInputFocus = () => {

            setIsFocused(true);

        }

        const handleInputChange = ( value: string) => {

            // Aula2 - 1:01:30 - transforma o conteúdo value em booleano conforme preenchimento
            // Se tem conteudo = true se não false
            setIsFilled(!! value);

            // Aula2 - 1:02:44
            setName(value);
        }

        // Aula2 - 1:24:42 - copiado de Welcome
        // Aula2 - 1:22:51
        // const navigation = useNavigation();
        
        // Aula2 - 1:22:43
        const handleSubmit = () => {

            navigation.navigate('Confirmation');
        }

        return(
            <SafeAreaView style={styles.container}>

                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    {/* // Aula2 - 1:30: */}
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                        <View style={styles.content}>

                            <View style={styles.form}>

                                {/* // Com essa view o teclado vai subir mais suave */}
                                <View style={styles.header}>

                                    <Text style={styles.emoji}>
                                        {/* // Ctrl + Cmd+ Barra de espaço para usar os emoji*/}
                                        {/* // Aula2 - 1:04:38  */}
                                        { isFilled ? '😄' : '😀'}
                                        
                                    </Text>

                                    <Text style={styles.title}>
                                        Como podemos {'\n'} chamar você? 
                                    </Text>

                                </View>

                                <TextInput 
                                    style={[styles.input
                                        , (isFocused || isFilled ) && {borderColor: colors.green}
                                    ]}
                                    placeholder = 'Digite seu nome'
                                    // Aula2 - 57:41
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputFocus}
                                    // Aula2 - 1:03:14
                                    onChangeText={handleInputChange}
                                />

                                <View style={styles.footer}>

                                    <Button title='Confirmar' onPress={handleSubmit}/>
    
                                </View>

                            </View>

                        </View>

                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>

            </SafeAreaView>
        );

}



export default UserIdetification;