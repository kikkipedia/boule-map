<script setup lang="ts">
import AddMarker from './AddMarker.vue';
import LeafletMap from './LeafletMap.vue';


</script>

<template>
    <div class="flex flex-row p-10">
        <div class="px-8">
            <p>Link - lägg till boulebana på karta</p>
            <p>Karta där man kan lägga till punkter</p>
            <AddMarker/>
        </div>
        <div class="px-8">
            <LeafletMap/>
        </div>
        
    </div>
</template>

<style>
.container {
    padding: 8px;
}
</style>