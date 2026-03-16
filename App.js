import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  // ── Estado dos campos (req. 4) ──────────────────────────────────────────────
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  // Estado para controlar a exibição dos dados enviados
  const [dadosEnviados, setDadosEnviados] = useState(null);

  // ── useEffect — executado na montagem do componente (req. 6) ───────────────
  useEffect(() => {
    console.log('✅ Aplicativo iniciado com sucesso!');
  }, []);

  // ── Função de envio do formulário ──────────────────────────────────────────
  const handleEnviar = () => {
    setDadosEnviados({ nome, curso, disciplina, descricao });
  };

  // ── Renderização ───────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Formulário de Cadastro</Text>
          <Text style={styles.subtitulo}>Preencha os campos abaixo</Text>
        </View>

        {/* ── Formulário (req. 2 e 3) ── */}
        <View style={styles.formulario}>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Tecnologia em Desenvolvimento de Sistemas"
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Mobile Application Development"
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Descrição / Apresentação pessoal</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Escreva uma breve apresentação pessoal (2 a 3 linhas)..."
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {/* Botão de envio (req. 3) */}
          <View style={styles.botaoContainer}>
            <Button title="Enviar" onPress={handleEnviar} color="#E91E63" />
          </View>
        </View>

        {/* ── Exibição dos dados após envio (req. 5) ── */}
        {dadosEnviados && (
          <View style={styles.cartao}>
            <Text style={styles.cartaoTitulo}>📋 Dados Cadastrados</Text>

            <View style={styles.linha}>
              <Text style={styles.linhaLabel}>Nome:</Text>
              <Text style={styles.linhaValor}>{dadosEnviados.nome || '—'}</Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.linhaLabel}>Curso:</Text>
              <Text style={styles.linhaValor}>{dadosEnviados.curso || '—'}</Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.linhaLabel}>Disciplina:</Text>
              <Text style={styles.linhaValor}>{dadosEnviados.disciplina || '—'}</Text>
            </View>

            <View style={styles.linhaDescricao}>
              <Text style={styles.linhaLabel}>Descrição:</Text>
              <Text style={styles.linhaValor}>{dadosEnviados.descricao || '—'}</Text>
            </View>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

// ── Estilização com StyleSheet (req. 7) ────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Cabeçalho
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  subtitulo: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },

  // Formulário
  formulario: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#333',
    backgroundColor: '#FAFAFA',
  },
  inputMultiline: {
    height: 80,
    paddingTop: 10,
  },
  botaoContainer: {
    marginTop: 24,
    borderRadius: 8,
    overflow: 'hidden',
  },

  // Cartão de dados enviados
  cartao: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#E91E63',
  },
  cartaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E91E63',
    marginBottom: 16,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  linhaDescricao: {
    marginBottom: 8,
  },
  linhaLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#555',
    marginRight: 6,
  },
  linhaValor: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1,
  },
});