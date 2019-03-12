<template>
  <h1 class="text-red">hello world</h1>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@tailwind preflight;

@tailwind components;

@tailwind utilities;
</style>
