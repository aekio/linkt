<script setup lang="ts">
import { ref } from 'vue';
import AddGroupButton from './AddGroupButton.vue';
import GroupCard from './GroupCard.vue';
//Placeholder data for testing
const groups = [
  { name: 'Default' },
  { name: 'Alpha' },
  { name: 'Bravo' }
];
const activeIndex = ref(0);
const emit = defineEmits(['select-group']);

function selectCard(index: number) {
  activeIndex.value = index;
  emit('select-group', groups[index].name);
}
</script>

<template>
  <div class="GroupContainer">
    <div class="GroupContainerTitle">
      <h5 class="GroupHeader">Groups</h5>
      <div class="GroupActions">
        <button class="ButtonTextNegative">Remove Selected</button>
        <button class="ButtonText">Add Group</button>
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