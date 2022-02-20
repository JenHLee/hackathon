<template>
  <div class="spot-1">
    <div class="container">
      <div class="spot-1-question-box">
        <h1>This is your MOODSPOT.</h1>
        
        <div id="spotCard">
          <p>{{spot.name}}</p>
        </div>
      </div>
       <div class="button" type="submit">
            <router-link to="/spot-2">
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
            spot: ""
        };
    },
    async mounted(){
        const response = await axios.get("api/allspots");
        this.spots = response.data;
        this.spot = this.spots[0];
        console.log(this.spot);
    },
    methods:{

    }
};
</script>

<style scoped>

.spot-1 {
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


.spot-1-question-box {
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