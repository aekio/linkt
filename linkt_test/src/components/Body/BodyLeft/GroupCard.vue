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
            <div class="GroupCardStatus">
                <p>Not Ready</p>
            </div>
        </div>
        <div class="GroupCardDetails">
            <p class="TextCard">UIC: W4VRAA</p>
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
.GroupCardDetails{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}
.GroupCardStatus{
    display: flex;
    border: 1px solid #F32B2B;
    border-radius: 12px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    display: none;
}
.GroupCardStatus >p{
    color: #F32B2B;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.025em;
}
.GroupCardDetails > .TextCard{
    color: var(--vt-c-text-dark-2);
    font-size: 10px;
    font-weight: 400;
}
.GroupCardDefault.inactive {
    border-left: 4px solid #ddd;
    background: rgba(94, 93, 240, 0.08);
}
.TextCard{
    display: none;
}
</style>