<script setup lang="ts">
import CustomHeader from './components/Header/CustomHeader.vue';
import GroupContainer from './components/Body/BodyLeft/GroupContainer.vue';
import './assets/main.css';
import TableContainer from './components/Body/BodyRight/Table.vue';

</script>

<template>
  <header><CustomHeader /></header>

  <main>
    <GroupContainer />
    <TableContainer />
  </main>
</template>

<style>
  main {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
</style>

