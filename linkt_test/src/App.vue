<script setup lang="ts">
import { ref } from 'vue';
import CustomHeader from './components/Header/CustomHeader.vue';
import GroupContainer from './components/Body/BodyLeft/GroupContainer.vue';
import './assets/main.css';
import TableContainer from './components/Body/BodyRight/TableContainer.vue';

const selectedGroupName = ref('Default');
//Selected Group
function handleGroupSelect(name: string) {
  selectedGroupName.value = name;
}
</script>

<template>
  <header><CustomHeader /></header>

  <main>
    <GroupContainer @select-group="handleGroupSelect" />
    <TableContainer :name="selectedGroupName" />
  </main>
</template>

<style>
  main {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  }
</style>

