<script setup lang="ts">
const props = defineProps<{ 
    isActive: boolean; 
    name: string;
}>();
const emit = defineEmits(['select']);

function handleClick() {
  emit('select');
}
</script>

<template>
    <div :class="['GroupCardDefault', props.isActive ? '' : 'inactive']"
    @click="handleClick">
        <div class="GroupCardContent">
            <h4 class="GroupCardName">{{ props.name }}</h4>
        </div>
    </div>
</template>

<style scoped>
.GroupCardDefault{
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 12px;
    border-left: 4px solid #5E5DF0;
    background: rgba(94, 93, 240, 0.25);
}
.GroupCardName{
    overflow: hidden;
    color: var(--vt-c-text-dark-1);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.GroupCardContent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}
.GroupCardDefault.inactive {
    border-left: 4px solid #ddd;
    background: rgba(94, 93, 240, 0.08);
}

</style>