import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import call from 'react-native-phone-call';

export default function PhoneScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const makePhoneCall = () => {
        if (!phoneNumber) {
            Alert.alert("Erro", "Por favor, insira um número de telefone.");
            return;
        }

        const args = {
            number: phoneNumber,
            prompt: false
        };

        call(args).catch(console.error);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📞 Fazer uma ligação</Text>
            <TextInput
                style={styles.input}
                keyboardType='phone-pad'
                placeholder='Digite o número'
                placeholderTextColor="#888"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
                <Text style={styles.buttonText}>Ligar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f4f6f8',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});