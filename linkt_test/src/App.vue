<script setup lang="ts">
import { ref } from 'vue';
import CustomHeader from './components/Header/CustomHeader.vue';
import GroupContainer from './components/Body/BodyLeft/GroupContainer.vue';
import './assets/main.css';
import TableContainer from './components/Body/BodyRight/TableContainer.vue';
import type { Group } from './components/Body/Interfaces/group';

const groups = ref<Group[]>([
  { 
  id: 1,
  name: 'Default', 
  personnel: [{
    id: 1,
    name: 'John Doe',
    rank: 'PVT',
    srp: true,
    role: 'None',
    aptOrders: false,
    certification: true,
    email: 'john.doe@example.com'
  }],
  equipment: [{
    id:1,
    nomenclature: 'Equipment 1',
    type: 'Type A',
    hazmat: false,
  }],
  transportation: [{
    id:1,
    transportationLeg: 'Leg 1',
    transportationType: 'Type X',
  }],
  active: true
  }
]);
const selectGroup = ref<Group>(groups.value[0] ?? null);
const selectedGroupName = ref('Default');

//Selected Group

function handleGroupSelect(group: Group) {
  selectedGroupName.value = group.name;
  selectGroup.value = group;
  //Added Console Log for Debugging
  console.log('App.Vue Group selected:', selectGroup.value);
}


</script>

<template>
  <header><CustomHeader /></header>

  <main >
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

