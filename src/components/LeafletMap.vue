<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { onMounted, ref } from 'vue';
import { query, collection, getDocs } from "firebase/firestore"
import db from '../firebaseInit'

interface Marker {
    id: string;
    coordinates: string [];
}

let zoom = ref(15)
let center = ref([57.68962677861505, 11.913979233230936])

let markers = ref<Marker[]>([])

//fetch map geo data from firebase
onMounted (async () => {
  const q = query(collection(db, "markers"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => {
    console.log(doc.id, " => ", doc.data());
    markers.value.push(doc.data())
  });
  console.log(markers.value)
})

</script>

<template>
  <div>
    <p v-for="marker in markers" :key="marker.id">{{marker.coordinates}}</p>
  </div>
    <main>
        <l-map class="leaflet-map" ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
          <l-tile-layer 
            url="https://tiles-eu.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            layer-type="base"
            name="Stadia Maps Basemap">
          </l-tile-layer>
            <!--coordinates for markers-->
            <l-marker v-for="marker in markers" :lat-lng="marker.coordinates" :key="marker.id"></l-marker>
        </l-map>
    </main>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

main {
  height: 100vh;
  width: 80vw;
}

.leaflet-map {
  width: 300px;
}
</style>