# 📱 EcoWatch – Front-End (React Native + Expo)

Aplicativo móvel desenvolvido em **React Native** com **Expo**, responsável por consumir a API do back-end e exibir os dados climáticos em tempo real.

---

## ⚙️ Funcionalidades

- Campo de entrada para cidade desejada  
- Requisição ao servidor local via Axios  
- Exibição de temperatura, condição climática e umidade  

---

## 🛠️ Instalação

```bash
cd front-end
npm install
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

## ▶️ Execução

```bash
npx expo start
```

Abra o **Expo Go** no celular e escaneie o QR Code exibido no terminal.  
> 💡 Todos os dispositivos devem estar conectados à **mesma rede local**.

---

## 🌈 Estrutura

```
src/
├── screens/
│   └── Home.tsx            
├── services/
│   ├── api.ts              
│   └── climaService.ts     
├── styles/
│   └── globalStyles.ts     
```

---

## 👨‍💻 Desenvolvido por
**Sérgio Hideki** – Projeto acadêmico UNIP
