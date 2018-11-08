<template>
  <div>
    <div class="row">
      <div class=" col-xl-4" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            {{stats.title}}
            <p>สถานะ : {{stats.value}} </p>
          </div>
        </stats-card>
      </div>
    </div>
    <div class="row">
      <div class=" col-xl-8">
          <article class="message is-info">
            <div class="message-body">
              Last maintenance : 01/Feb/18 </br></br>
              Status : ปกติ </br></br>
              Temp : 26 C </br></br>
              Humid : 78% </br></br>
              Battery : 80% </br></br>
              <div class="buttons has-addons">
                  Sport light &nbsp;&nbsp;&nbsp;
                <span class="button  is-info">Yes</span>
                <span class="button  is-selected">No</span>
              </div>
              <div class="buttons has-addons">
                  GunSound &nbsp;&nbsp;&nbsp;
                <span class="button">Yes</span>
                <span class="button is-danger is-selected">No</span>
              </div>
            </br></br>
            </div>
          </article>
      </div>
    </div>
  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "success",
          icon: "ti-twitter-alt",
          title: "ลานปาล์ม",
          value: "ปกติ"
        }
      ]
    }
  }
}
</script>
<style>
</style>
