<script lang="ts" setup>
import type { Group } from '../Interfaces/group';
const props = defineProps<{ group: Group | null }>();
</script>

<template>
  <table class="data-table" v-if="props.group">
    <thead>
      <tr>
        <th v-for="(header, index) in Object.keys(props.group.personnel[0] || {})" :key="index">
          {{ header.charAt(0).toUpperCase() + header.slice(1) }}
        </th>
        <!--
        <th>Name</th>
        <th>Rank</th>
        <th>SRP</th>
        <th>Role</th>
        <th>Apt Orders</th>
        <th>Certification</th>
        <th>Email</th>
        -->
      </tr>
    </thead>
    <tbody id="selectedGroupsTableBody">
      <tr v-for="(returnedPersonnel) in props.group.personnel" :key="returnedPersonnel.id">
        <td v-for="(returnedValue, returnedKey) in returnedPersonnel" :key="returnedKey">
          {{ returnedValue }} </td>
        <!--
        <td>{{ returnedPersonnel.name }}</td>
        <td>{{ returnedPersonnel.rank }}</td>
        <td>{{ returnedPersonnel.srp }}</td>
        <td>{{ returnedPersonnel.role }}</td>
        <td>{{ returnedPersonnel.aptOrders }}</td>
        <td>{{ returnedPersonnel.certification }}</td>
        <td>{{ returnedPersonnel.email }}</td>
        -->
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
  display: flex;
  flex-direction: row;
  align-self: stretch;
  flex: 1;
}
.data-table tbody tr:not(:last-child) {
  border-bottom: 1px solid rgba(221, 221, 221, 0.15);
}
td,th{
  display: flex;
  flex: 1 0 0;
  justify-content: flex-start;
  padding: 8px;
}
td{
  background-color: var(--color-background-soft);
  color: var(--color-text);
}
th {
  color: var(--vt-c-text-dark-2);
  opacity: .75;
  align-items: flex-start;
}
</style>