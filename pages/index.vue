<script setup lang="ts">
import dados from "~/content/dados-site.json";
</script>

<template>
  <main class="pagina">
    <section class="hero">
      <p class="marca">LIMPA SOFÁ</p>
      <h1>{{ dados.titulo }}</h1>
      <p class="lead">{{ dados.descricao }}</p>
      <p class="info">
        📍 {{ dados.endereco }} · 🕒 {{ dados.horario }}
      </p>
    </section>

    <section class="servicos">
      <h2>Serviços</h2>
      <div class="lista">
        <div v-for="s in dados.servicos" :key="s.nome" class="card">
          <h3>{{ s.nome }}</h3>
          <p>{{ s.descricao }}</p>
          <span class="preco">{{ s.preco }}</span>
        </div>
      </div>
    </section>

    <section class="contato">
      <h2>Peça seu orçamento</h2>
      <FormOrcamento :telefone="dados.telefone" />
    </section>
  </main>
</template>

<style scoped>
.pagina {
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e2a28;
}
.marca {
  color: #2f6659;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 20px;
}
.hero h1 {
  font-size: 30px;
  line-height: 1.2;
  margin: 0 0 12px;
}
.lead {
  color: #6b7876;
  font-size: 15px;
  line-height: 1.6;
  max-width: 480px;
}
.info {
  font-size: 13.5px;
  color: #6b7876;
  margin-top: 16px;
}
.servicos {
  margin-top: 48px;
}
.lista {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}
.card {
  border: 1px solid #e1ddd3;
  border-radius: 10px;
  padding: 16px;
}
.card h3 {
  margin: 0 0 6px;
  font-size: 16px;
}
.card p {
  margin: 0 0 10px;
  font-size: 14px;
  color: #6b7876;
}
.preco {
  font-weight: 700;
  color: #2f6659;
}
.contato {
  margin-top: 48px;
}
</style>
