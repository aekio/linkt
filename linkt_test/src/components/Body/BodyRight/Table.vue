<script lang="ts" setup>
import type { Group } from '../Interfaces/group';
const props = defineProps<{ group: Group | null }>();
</script>

<template>
  <table class="data-table" v-if="props.group">
    <thead>
      <tr>
        <th>
          <td>name</td>
          <td>rank</td>
          <td>srp</td>
          <td>role</td>
          <td>aptOrders</td>
          <td>certification</td>
          <td>email</td>
        </th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="(value) in props.group.personnel" :key="value.id">
        <td>{{ value.name }}</td>
        <td>{{ value.rank }}</td>
        <td>{{ value.srp }}</td>
        <td>{{ value.role }}</td>
        <td>{{ value.aptOrders }}</td>
        <td>{{ value.certification }}</td>
        <td>{{ value.email }}</td>
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
  align-items: center;
}
</style>