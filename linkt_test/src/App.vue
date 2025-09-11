<script setup lang="ts">
import { ref } from 'vue';
import CustomHeader from './components/Header/CustomHeader.vue';
import GroupContainer from './components/Body/BodyLeft/GroupContainer.vue';
import './assets/main.css';
import TableContainer from './components/Body/BodyRight/TableContainer.vue';
import type { Group } from './components/Body/Interfaces/group';

const groups = ref<Group[]>([ /* ...your groups... */ ]);
const selectGroup = ref<Group | null>(groups.value[0]); // Select first group by default
const selectedGroupName = ref(groups.value[0]?.name ?? 'Default');
//Selected Group
function handleGroupSelect(group: Group) {
  selectedGroupName.value = group.name;
  selectGroup.value = group;
}

</script>

<template>
  <header><CustomHeader /></header>

  <main>
    <GroupContainer :groups="groups" @select-group="handleGroupSelect" />
    <TableContainer :group="selectGroup" />
  </main>
</template>

<style>
  main {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
  }
</style>

