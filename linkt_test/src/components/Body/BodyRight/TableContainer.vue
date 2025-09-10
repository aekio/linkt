<script lang="ts" setup>
import Table from './Table.vue';
import TableTabs from './TableTabs.vue';
//Props Divider
const props = defineProps<{ name: string }>();
</script>

<template>
    <div class="TableContainer">
       <div class="TableTitle"> 
            <div class="TitleText">
                <h3>{{ props.name }}</h3 >
            </div>
            
            <div class="TableActions">
                <button class="secondary">Create New Group</button>
                <button class="primary">Add Personnel</button>
            </div>
        </div>
        <TableTabs />
        <Table />
    </div>
</template>
<style scoped>
div .TableContainer {
    display: flex;
    
    flex-direction: column;
    align-items: flex-end;
    
    flex: 1 0 0;
    align-self: stretch;
    background: transparent;
    border-radius: 12px;
}
.TableTitle {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
}
.TitleText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.TableTitle h3 {
  font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  margin: 0;
}

h5{
    font-wieght:normal;
    opacity: .75;
}
.TableActions{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
.TableActions .secondary{
    display: none
}
</style>