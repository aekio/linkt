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
  name: 'Default Name', 
  personnel: [{
    id: 1,
    name: 'Joe Snuffy',
    rank: 'PVT',
    srp: true,
    role: 'None',
    aptOrders: false,
    certification: false,
    email: 'john.doe@example.com'
  }],
  equipment: [{
    id:1,
    lin: '123456',
    nomenclature: 'Equipment 1',
    type: 'Vehicle',
    hazmat: false,
    
  }],
  transportation: [{
    id:1,
    transportationType: 'Air',
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

  <div class="temp-banner">
    <span>⚠️ All data is only temporarily saved in your browser and will be lost if you clear your cache or local storage.</span>
  </div>
  <header><CustomHeader /></header>

  <main >
    <GroupContainer :groups="groups" @select-group="handleGroupSelect" />
    <TableContainer :group="selectGroup" />
  </main>
</template>

<style>
  .temp-banner {
    width: 100%;
    background: #ffecb3;
    color: #7a4f01;
    text-align: center;
    padding: 10px 0;
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 1px solid #ffe082;
    letter-spacing: 0.5px;
    z-index: 1000;
    border-radius: 8px;
    opacity: .9;
  }
  main {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
  }
</style>

