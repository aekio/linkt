<script lang="ts" setup>
import { ref } from 'vue';

const activeTab = ref('Personnel');
const emit = defineEmits(['set-active-tab']);
function setActive(tab: string) {
  //Added Console Log for Debugging
  console.log('Tab selected:', tab);
  activeTab.value = tab;
  emit('set-active-tab', tab);
}

</script>
<template>
  <div class="TableTabs">
    <button
      class="ButtonTab"
      :class="{ active: activeTab === 'Personnel' }"
      @click="setActive('Personnel')"
    >
      Personnel
    </button>
    <button
      class="ButtonTab"
      :class="{ active: activeTab === 'Equipment' }"
      @click="setActive('Equipment')"
    >
      Equipment
    </button>
    <button
      class="ButtonTab"
      :class="{ active: activeTab === 'Transportation' }"
      @click="setActive('Transportation')"
    >
      Transportation
    </button>
  </div>
</template>
<style scoped>
.TableTabs {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
.ButtonTab{
  padding: 4px 0;
  border-radius: 0;
  background: transparent;
  color: #5E5DF0;
  font-weight: 700;
  cursor: pointer;
  border: 3px solid transparent;
}
.ButtonTab.active {
  padding: 4px 0;
  border-bottom: 3px solid #5E5DF0;
  border-radius: 0;
}

</style>