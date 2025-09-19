<script setup lang="ts">
import { ref } from 'vue';
import GroupCard from './GroupCard.vue';
import type { Group } from '../Interfaces/group';
//Placeholder data for testing
const props = defineProps<{ groups: Group[] }>();

const activeIndex = ref(0);
const emit = defineEmits(['select-group','add-group','remove-group']);


function selectCard(index: number) {
  //Added Console Log for Debugging
  console.log('Selected group index:', index);
  activeIndex.value = index;
  emit('select-group', props.groups[index]);
}
function addGroup() {
  // Find all numbers at the end of group names matching "Group N"
  const numbers = props.groups
    .map(group => {
      const match = group.name.match(/^Group (\d+)$/);
      return match ? parseInt(match[1], 10) : 0;
    });

  // Get the max number and increment for the new group name
  const maxNum = numbers.length ? Math.max(...numbers) : 0;
  const newNum = maxNum + 1;
  const newName = `Group ${newNum}`;

  // Add new group with default values for personnel, equipment, and transportation
  // Default values added so that table displays something for each tab
  props.groups.push({ 
    id: props.groups.length + 1,
    name: newName,
    personnel: [
      {
        id: 1,
        name: 'Default Name',
        rank: 'Default Rank',
        srp: false,
        role: 'Default Role',
        aptOrders: false,
        certification: false,
        email: 'Default.email@example.com',
      }
    ],
    equipment: [
      {
        id:1,
        nomenclature: 'Default Nomenclature',
        type: 'Default Type',
        hazmat: false,
      }
    ],
    transportation: [
      {
        id:1,
        transportationType: 'Default Type',
      }
    ],
    active: false
  });
}
function removeGroup(){
  props.groups.splice(activeIndex.value, 1);
}
</script>

<template>
  <div class="GroupContainer">
    <div class="GroupContainerTitle">
      <h5 class="GroupHeader">Groups</h5>
      <div class="GroupActions">
        <button class="ButtonTextNegative" id="RemoveGroup" @click="removeGroup();emit('remove-group')">Remove</button>
        <button class="ButtonText" id="AddGroup" @click="addGroup();emit('add-group')">Add</button>
      </div>
    </div> 
    <!--<AddGroupButton />-->

    <div v-for="(group, idx) in groups" :key="idx">
      <GroupCard 
        :isActive="activeIndex === idx"
        :name="group.name"
        @select="selectCard(idx)"/>  
    </div>
  </div>
</template>

<style scoped>
.GroupHeader {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  color: #FFFFFF;
}
.GroupContainerTitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.GroupContainer {
  display: flex;
  width: 20%;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #090909;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.GroupActions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  gap: 8px;
}
</style>