<script lang="ts" setup>
import { ref } from 'vue';
import Table from './Table.vue';
import TableTabs from './TableTabs.vue';
import type { Group } from '../Interfaces/group';
//Variables divider
const activeTab = ref('Personnel');
function setActiveTab(setActive: string) {
    //Added Console Log for Debugging
    console.log(activeTab)
    console.log(setActive);
    activeTab.value = setActive;
}
//Props Divider
const props = defineProps<{ group: Group | null }>();
//Add Personnel to Group
function addToGroup(group: Group | null) {
    //Runs when Add Personnel button is clicked
    //Creates new Personnel in the selected group with default values
    //The user will modify these values later
    if (activeTab.value === 'Personnel'){
        group?.personnel.push({
            id: group.personnel.length +1,
            name:'Default Name',
            rank: 'Default Rank',
            srp: false,
            role: 'Default Role',
            aptOrders: false,
            certification: false,
            email: 'Default.email@example.com',
        });
    }
    else if (activeTab.value === 'Equipment'){
        group?.equipment.push({
            id: group.equipment.length +1,
            nomenclature: 'Default Nomenclature',
            type: 'Default Type',
            hazmat: false,
        });
    }
    else if (activeTab.value === 'Transportation'){
        group?.transportation.push({
            id: group.transportation.length +1,
            transportationLeg: 'Default Leg',
            transportationType: 'Default Type',
        });
    }
}
</script>

<template>
    <div class="TableContainer">
       <div class="TableTitle"> 
            <div class="TitleText">
                <h3>{{ props.group?.name }}</h3 >
            </div>
            <div class="TableActions">
                <button class="primary" @click="addToGroup(props.group)">Add {{ activeTab }}</button>
            </div>
        </div>
        <TableTabs @set-active-tab="setActiveTab" />
        <Table :group="props.group" :activeTab="activeTab" />
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