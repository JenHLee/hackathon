<template>
<div class="spot-1">
    <div class="container">
        <div class="spot-1-question-box">
            <h1>This is your MOOD SPOT.</h1>

            <div id="spotCard">
                <img v-if="spot.type === 'park'" src="../img/Verysad1.gif" alt="">
                <img v-else-if="spot.type === 'cafe'" src="../img/Blue1.gif" alt="">
                <img v-else-if="spot.type === 'recreation_center'" src="../img/Soso1.gif" alt="">
                <img v-else-if="spot.type === 'restaurant'" src="../img/Good1.gif" alt="">
                <img v-else-if="spot.type === 'finedining_restaurant'" src="../img/Happy1.gif" alt="">

                <p id="spot_name">{{spot.name}}</p><br>
                <p id="spot_add">{{spot.address}}</p><br>
                <p id="spot-des">{{spot.description}}</p><br>
                <p id="spot-msg">{{spot.message}}</p><br>
            </div>
        </div>
        <div class="button" type="submit">
            <router-link to="/spot-2">
                <spotBtn msg="Another Recommendation" />
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
            spots: [],
            spot: ""
        };
    },
    async mounted() {
        const response = await axios.get("api/allspots");
        this.spots = response.data;
        this.spot = this.spots[0];
        console.log(this.spot);
    },
    methods: {

    }
};
</script>

<style scoped>
h1 {
    font-weight: bold;
}

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
