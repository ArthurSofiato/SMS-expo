import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';

export default function SmsScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const sendSMS = async () => {
        if (!phoneNumber || !message) {
            Alert.alert("Erro", "Preencha o número e a mensagem.");
            return;
        }

        const isAvailable = await SMS.isAvailableAsync();

        if (isAvailable) {
            await SMS.sendSMSAsync([phoneNumber], message);
        } else {
            Alert.alert("Erro", "Envio de SMS não está disponível neste dispositivo.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>✉️ Enviar SMS</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o número'
                placeholderTextColor="#888"
                keyboardType='phone-pad'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                multiline
                placeholder='Digite a mensagem'
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={sendSMS}>
                <Text style={styles.buttonText}>Enviar SMS</Text>
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
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top',
        paddingTop: 12,
    },
    button: {
        backgroundColor: '#2196F3',
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