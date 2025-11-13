import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import api from "../services/api";
import { globalStyles } from "../styles/globalStyles";


export default function Home() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const buscarClima = async () => {
    if (!cidade.trim()) return;
    setLoading(true);
    setErro("");
    setDados(null);

    try {
      const response = await api.get(`/clima?cidade=${cidade}`);
      setDados(response.data);
    } catch (e) {
      console.error("Erro ao buscar clima:", e);
      setErro("Erro ao buscar dados climáticos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>🌍 EcoWatch</Text>

      <TextInput
        placeholder="Digite a cidade"
        value={cidade}
        onChangeText={setCidade}
        style={globalStyles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity onPress={buscarClima} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ marginTop: 20 }}
        />
      )}

      {erro ? <Text style={globalStyles.errorText}>{erro}</Text> : null}

      {dados && !loading && (
        <View style={globalStyles.weatherContainer}>
          <Text style={globalStyles.weatherTitle}>{dados.cidade}</Text>
          <Text style={globalStyles.weatherText}>
            🌡️ Temperatura: {dados.temperatura}
          </Text>
          <Text style={globalStyles.weatherText}>
            ☁️ Clima: {dados.clima}
          </Text>
          <Text style={globalStyles.weatherText}>
            💧 Umidade: {dados.umidade}
          </Text>
        </View>
      )}
    </View>
  );
}
