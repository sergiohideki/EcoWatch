# 🌍 EcoWatch

**EcoWatch** é uma aplicação desenvolvida como parte da disciplina **Desenvolvimento de Sistemas Distribuídos** da **UNIP**.  
O sistema permite consultar informações climáticas em tempo real, aplicando o modelo **cliente-servidor** dentro de um contexto de **sistemas distribuídos**.

---

## 📘 Sobre o Projeto

O **EcoWatch** foi desenvolvido com o objetivo de aplicar, na prática, conceitos fundamentais de **sistemas distribuídos** e integração de **APIs externas**.  
A aplicação funciona de forma simples: o usuário digita o nome de uma cidade, e o app retorna a **temperatura**, **condição climática** e **umidade**, obtidas via **API da OpenWeather**.

---

## ⚙️ Tecnologias Utilizadas

### 🖥️ Back-End
- Node.js  
- Express  
- Axios  
- Dotenv  

### 📱 Front-End
- React Native  
- Expo  
- Axios  
- TypeScript  

---

## 🧩 Estrutura do Projeto

```
EcoWatch/
│
├── back-end/          
│   ├── services/      
│   ├── routes/        
│   └── server.js      
│
├── front-end/         
│   ├── src/
│   │   ├── screens/   
│   │   ├── services/  
│   │   └── styles/    
│
└── README.md          
```

--- 

## 🌐 Configuração da Rede Local

Para que o aplicativo consiga se comunicar com o servidor, é necessário ajustar o IP no arquivo: src/services/api.ts

Exemplo:
```ts
const api = axios.create({
  baseURL: "http://COLOQUE_SEU_IPV4_AQUI:3000/api",
});
```
⚠️ Substitua COLOQUE_SEU_IPV4_AQUI pelo IPv4 da máquina que está executando o servidor Node.js.
Para verificar seu IP local no Windows, use o comando:

```
ipconfig
```

---
## 🚀 Execução Rápida

### 🔹 Back-End

altere o arquivo `.env.example"` para `.env` e coloque sua chave da API:

```
OPENWEATHER_API_KEY=SUA_CHAVE_AQUI
```

```bash
cd back-end
npm install
npm run start
```

### 🔹 Front-End
```bash
cd front-end
npm install
npx expo start
```

> ⚠️ Certifique-se de que o servidor Node.js e o celular estejam **na mesma rede Wi-Fi** (roteador local).

---

## 👨‍💻 Autor
**Sérgio Hideki**  
Desenvolvido como parte da APS da disciplina **Desenvolvimento de Sistemas Distribuídos – UNIP**
