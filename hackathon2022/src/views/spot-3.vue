<template>
<div class="spot-3">
    <div class="container">
        <div class="spot-3-question-box">
            <h1>This is your MOOD SPOT.</h1>

            <div id="spotCard">
                <img v-if="spot.type === 'park'" src="../img/Verysad3.gif" alt="">
                <img v-else-if="spot.type === 'cafe'" src="../img/Blue3.gif" alt="">
                <img v-else-if="spot.type === 'recreation_center'" src="../img/Soso3.gif" alt="">
                <img v-else-if="spot.type === 'restaurant'" src="../img/Good3.gif" alt="">
                <img v-else-if="spot.type === 'finedining_restaurant'" src="../img/Happy3.gif" alt="">

                <p id="spot_name">{{spot.name}}</p><br>
                <p id="spot_add">{{spot.address}}</p><br>
                <p id="spot-des">{{spot.description}}</p><br>
                <p id="spot-msg">{{spot.message}}</p><br>
            </div>
        </div>
        <div class="button" type="submit">
            <router-link to="/final">
                <spotBtn msg="Finish the MOODSPOT" />
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
    name: "spot-3",
    components: {
        spotBtn,
    },
    data() {
        return {
            spots: [],
            spot: ""
        };
    },
    async mounted() {
        const response = await axios.get("api/allspots");
        this.spots = response.data;
        this.spot = this.spots[2];
        console.log(this.spot);
    },
    methods: {

    }
};
</script>

<style scoped>
.spot-3 {
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

.spot-3-question-box {
    background-color: antiquewhite;
    border-radius: 50px;
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

p {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5px;
}

img {
    width: 20vw;
}
</style>
