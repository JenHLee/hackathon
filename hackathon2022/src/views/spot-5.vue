<template>
  <div class="spot-5">
    <div class="container">
      <div class="spot-5-question-box">
        <h1>This is your MOODSPOT.</h1>
        
        <div id="spotCard">
          <img v-if="spot.type === 'park'" src="../img/Verysad1.gif" alt="">
          <img v-else-if="spot.type === 'cafe'" src="../img/Blue1.gif" alt="">
          <img v-else-if="spot.type === 'recreation_center'" src="../img/Soso1.gif" alt="">
          <img v-else-if="spot.type === 'restaurant'" src="../img/Good1.gif" alt="">
          <img v-else-if="spot.type === 'finedining_restaurant'" src="../img/Happy1.gif" alt="">
          <img v-else src="" alt="">
          
          <p>{{spot.name}}</p><br>
          <p>{{spot.address}}</p><br>
          <p>{{spot.description}}</p><br>
          <p>{{spot.message}}</p><br>
        </div>
      </div>
     <div class="button" type="submit">
            <router-link to="/final">
            <spotBtn msg="Another Recommendation"/>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import spotBtn from "@/components/spotBtn.vue";
import axios from "axios";
export default {
    name: "spot-1",
    components: {
        spotBtn,
    },
    data() {
        return {
            spots:[],
            spot: {
    "name": "There is no more",
    "type": "",
    "address": "",
    "description": "",
    "message": ""
}
        };
    },
    async mounted(){
        const response = await axios.get("api/allspots");
        this.spots = response.data;
        if(!this.spots[4]){
          return;
        }else{
          this.spot = this.spots[4];
        }
        console.log(this.spot);
    },
    methods:{

    }
};
</script>

<style scoped>

.spot-5{
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 4rem;
}


.spot-5-question-box {
  background-color: antiquewhite;
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}



.button {
    flex: 2;
    margin: 2rem;
    text-align: center;
}


</style>