# ExpoSMS #

Este é um aplicativo React Native desenvolvido com Expo que permite:

- Realizar chamadas telefônicas  
- Enviar mensagens SMS

 🛠 Tecnologias utilizadas

- React Native  
- Expo  
- react-native-phone-call  
- expo-sms  
- React Navigation

 📱 Funcionalidades

Tela de Ligação: permite ao usuário inserir um número de telefone e fazer uma chamada.  
Tela de SMS: permite inserir um número de telefone e uma mensagem para envio via SMS.

 ⚙️ Instalação e execução do projeto

1. Clone o repositório:

```bash
git clone https://github.com/ArthurSofiato/ExpoSMS.git
cd ExpoSMS
```

2. Instale as dependências:

```bash
npm install
```

ou, se usar `yarn`:

```bash
yarn
```

3. Execute o app com Expo:

```bash
npx expo start
```

Use o app Expo Go no seu celular para escanear o QR Code e testar.

🔒 Permissões necessárias

Este app solicita permissões para:

- Fazer chamadas (`CALL_PHONE`)  
- Enviar mensagens SMS (`SEND_SMS`)  

Essas permissões são requisitadas automaticamente ao iniciar o app no Android.

 📂 Estrutura de diretórios

```
.
├── App.js               # Navegação entre telas e solicitação de permissões
├── screens
│   ├── phoneScreen.js   # Tela de chamadas
│   └── smsScreen.js     # Tela de envio de SMS
└── package.json         # Dependências do projeto
```

 ❗ Observações

- O envio de SMS não funciona em emuladores — teste em um dispositivo físico.  
- A chamada telefônica requer permissão `CALL_PHONE`, que é tratada automaticamente pelo Expo.

 📧 Contato

Dúvidas ou sugestões: arthursofiato@gmail.com
