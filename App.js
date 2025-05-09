import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"; // Contêiner de navegação principal
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Navegação tipo stack (pilha)
import PhoneScreen from './screens/phoneScreen'; // Tela de ligação
import SmsScreen from "./screens/smsScreen"; // Tela de envio de SMS
import { Button, PermissionsAndroid } from "react-native"; // Componentes nativos

const Stack = createNativeStackNavigator(); // Cria o stack navigator

export default function App() {

  // useEffect para solicitar permissões quando o app inicia
  useEffect(() => {
    const requestPermissions = async () => {
      // Verifica se está no Android
      if (Plataform.OS === 'android') {
        try {
          // Solicita permissões para ligar e enviar SMS
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CALL_PHONE,
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
          ]);

          // Verifica se as permissões foram concedidas
          if (
            granted['android.permission.CALL_PHONE'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.SEND_SMS'] === PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('Permissões concedidas');
          } else {
            console.log('Permissões negadas');
          }
        } catch (err) {
          console.warn(err); // Captura e exibe erro se algo falhar
        }
      }
    };

    requestPermissions(); // Chama a função ao montar o componente
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Phone">
        {/* Tela de ligação com botão no cabeçalho para navegar para SMS */}
        <Stack.Screen
          name="Phone"
          component={PhoneScreen}
          options={({ navigation }) => ({
            title: 'Ligação',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('SMS')}
                title="SMS"
              />
            ),
          })}
        />
        {/* Tela de SMS com botão no cabeçalho para voltar à tela de ligação */}
        <Stack.Screen
          name="SMS"
          component={SmsScreen}
          options={({ navigation }) => ({
            title: 'Enviar SMS',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Phone')}
                title="Ligar"
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}