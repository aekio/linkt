<script lang="ts" setup>
import Table from './Table.vue';
</script>

<template>
    <div class="table-title">
        <div>
           <h2>Items</h2>
           <h6>3 items</h6>
        </div>
        <div class="table-actions">
            <button class="action-button">Add</button>
        </div>
    </div>
    <Table />
</template>
<style scoped>
div .table-title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 10px 0;
}
</style>