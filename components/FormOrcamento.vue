<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  telefone: string; // só dígitos, ex: "18999990000"
}>();

const nome = ref("");
const servico = ref("");
const mensagem = ref("");

function enviarOrcamento() {
  if (!nome.value || !servico.value) return;

  const texto =
    `Olá! Meu nome é ${nome.value}.\n` +
    `Gostaria de um orçamento para: ${servico.value}.\n` +
    (mensagem.value ? `Detalhes: ${mensagem.value}` : "");

  const url = `https://wa.me/55${props.telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
</script>

<template>
  <form class="form-orcamento" @submit.prevent="enviarOrcamento">
    <label for="nome">Seu nome</label>
    <input id="nome" v-model="nome" type="text" required placeholder="Como podemos te chamar?" />

    <label for="servico">Serviço desejado</label>
    <input id="servico" v-model="servico" type="text" required placeholder="Ex: sofá 3 lugares" />

    <label for="mensagem">Detalhes (opcional)</label>
    <textarea id="mensagem" v-model="mensagem" rows="3" placeholder="Cor, tecido, manchas específicas..." />

    <button type="submit">Pedir orçamento no WhatsApp</button>
  </form>
</template>

<style scoped>
.form-orcamento {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 420px;
}
.form-orcamento label {
  font-size: 13px;
  color: #666;
  margin-top: 10px;
}
.form-orcamento input,
.form-orcamento textarea {
  font-family: inherit;
  font-size: 15px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.form-orcamento button {
  margin-top: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #2f6659;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}
</style>
