<script setup lang="ts">
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

onMounted(() => {
  // @ts-expect-error - netlifyIdentity vem do script externo
  const identity = window.netlifyIdentity;
  if (identity) {
    identity.on("init", (user: unknown) => {
      if (!user) {
        identity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
});
</script>

<template>
  <NuxtPage />
</template>
