# EcoWatch

## Arquitetura do projeto:
EcoWatch/
│
├── back-end/                # Servidor local (Node.js)
│   ├── src/
│   │   ├── server.js        # Ponto de entrada principal do servidor
│   │   ├── config/          # Configurações (porta, IP, etc)
│   │   ├── services/        # Lógica de comunicação WebSocket
│   │   └── utils/           # Funções auxiliares (ex: log, validações)
│   ├── package.json
│   └── README.md
│
├── front-end/               # Aplicativo mobile (Expo)
│   ├── src/
│   │   ├── screens/         # Telas do app
│   │   │   └── HomeScreen.tsx
│   │   ├── components/      # Componentes reutilizáveis (ex: ModalEnvio, Header)
│   │   ├── services/        # Comunicação com o servidor WebSocket
│   │   ├── styles/          # Estilos locais (sem dependência de internet)
│   │   └── App.tsx          # Ponto de entrada do aplicativo
│   ├── app.json
│   ├── package.json
│   └── README.md
│
└── README.md                # Documentação geral do projeto
