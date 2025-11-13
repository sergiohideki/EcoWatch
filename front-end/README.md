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
