<template>
  <h4 class="balance">Your Balance</h4>
  <h1 id="balance">${{ total }}</h1>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: Number,
});
</script>
