# 🌐 EcoWatch – Back-End (Node.js + Express)

Servidor Node.js responsável por receber as requisições do app, consultar a **API OpenWeather** e retornar os dados formatados em JSON.

---

## ⚙️ Funcionalidades

- Endpoint `/api/clima?cidade=<nome>`  
- Consulta à API da OpenWeather  
- Retorno de dados formatados  
- Tratamento de erros e logs de requisição  

---

## 🛠️ Instalação

```bash
cd back-end
npm install
```

---

## ▶️ Execução

altere o arquivo `.env.example"` para `.env` e coloque sua chave da API:

```
OPENWEATHER_API_KEY=SUA_CHAVE_AQUI
```

Depois execute:

```bash
npm run start
```

O servidor será iniciado em:
```
http://localhost:3000/api/clima
```

---

## 👨‍💻 Desenvolvido por
**Sérgio Hideki** – UNIP • APS – Desenvolvimento de Sistemas Distribuídos
