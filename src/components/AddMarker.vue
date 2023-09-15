<script setup lang="ts">
import { collection, addDoc } from "firebase/firestore"
import db from '../firebaseInit'
import { GeoPoint } from 'firebase/firestore'

//save marker to firestore
const saveMarker = async () => {
    const docRef = await addDoc(collection(db, "markers"), {
        //This is hard coded for now, but should be fetched from the map
        coordinates: new GeoPoint(35.6833, 139.6833)
    });
    console.log("Document written with ID: ", docRef.id);
}
</script>

<template>
    <div>
        <button class="btn" @click="saveMarker">Save marker</button>
    </div>
</template>

<style>
.btn {
    background-color: red;
}
</style>