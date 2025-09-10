<script lang="ts" setup>
</script>
<template>
  <table class="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Rank</th>
        <th>SRP</th>
        <th>Role</th>
        <th>Apt Orders</th>
        <th>Certified</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Snuffy,Joe</td>
        <td>Pvt</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td>Snuffy,Joe</td>
        <td>Pvt</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
     
    </tbody>
  </table>
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