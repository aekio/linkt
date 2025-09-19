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
const props = defineProps<{ group: Group }>();
//Add object to Group
function addToGroup(group: Group | null) {
    //Runs when addToGroup button is clicked
    //Creates new value in the selected group with default values based on the active tab
    //The user will modify these values later
    if (activeTab.value === 'Personnel'){
        group?.personnel.push({
            id: group.personnel.length +1,
            name:'Default Name',
            rank: '-',
            srp: false,
            role: 'None',
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
    //Added for debugging will remove later
    else if(group === null){
        console.log('No group selected');
    }
    else{
        console.log('No active tab selected');
    }
}

</script>

<template>
    <div class="TableContainer">
       <div class="TableTitle"> 
            <div class="TitleText">
                <input class="GroupName" v-model='props.group.name' type="text" />
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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
.TableTitle .Icon{
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 8px;
    vertical-align: middle;
    color: #5E5DF0;
}
.GroupName{
    font-size: 1.25rem;
    font-weight: 700;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px 8px;
    background: transparent;
    color: var(--color-text);
   
}
</style>