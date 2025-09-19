<script lang="ts" setup>
import { computed } from 'vue';
import type { Group } from '../Interfaces/group';
const props = defineProps<{ group: Group | null, activeTab: string }>();
//Determine what tab is selected
const displayedData = computed(() => {
  if (!props.group) return [];
  if (props.activeTab === 'Personnel') return props.group.personnel;
  if (props.activeTab === 'Equipment') return props.group.equipment;
  if (props.activeTab === 'Transportation') return props.group.transportation;
  return [];
});
//return keys for Active Tab
const displayedKeys = computed(() => {
  return displayedData.value.length ? Object.keys(displayedData.value[0]) : [];
});
</script>

<template>
  <table class="data-table" v-if="props.group">
    <thead id="selectedGroupsTableHead">
      <tr>
        <th v-for="key in displayedKeys" :key="key">
          {{ key.charAt(0).toUpperCase() + key.slice(1) }}
        </th>
      </tr>
    </thead>
    <tbody id="selectedGroupsTableBody">
      <tr v-for="groupObject in displayedData" :key= "groupObject.id">
        <td class="table-cell" v-for="keyPair in displayedKeys" :key="keyPair">
          <div v-if="keyPair === 'id' ">{{ groupObject[keyPair] }}</div>
          <input v-else class="table-input" v-model="(groupObject as any)[keyPair]" />
        </td>
      </tr>
    </tbody>
  </table>
  <div id="no-group" v-else>
    <p>
      Please select a group to view it.
    </p>
  </div>
</template>
<style scoped>
.data-table {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0).10;
  background: rgba(36, 36, 36, 0.75);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 0  12px 12px 12px;
  table-layout: fixed;
  width: 100%;  
}
.data-table thead {
  display: flex;
  flex-direction: row;
  align-self: stretch;
}
.data-table tbody tr:first-child {
  border-radius: 8px 8px 0 0; 
  overflow: hidden;
}
.data-table tbody tr:last-child {
  border-radius: 0 0 8px 8px; 
  overflow: hidden;
}
.data-table tbody tr:only-child {
  border-radius: 8px; 
  overflow: hidden;
}
tr {
  width: 100%;
}
.data-table tbody tr:not(:last-child) {
  border-bottom: 1px solid rgba(221, 221, 221, 0.15);
}
td,th{
  width: 1%;
  max-width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
td{
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
th {
  color: var(--vt-c-text-dark-2);
  opacity: .75;
}
.table-input {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  padding: 8px 0;
}
</style>