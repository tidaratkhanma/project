<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-xl-6" v-for="stats in statsCards" :key="stats.title">
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
          title: "ตู้ ATM FITM",
          value: "ปกติ"
        },
        {
          type: "success",
          icon: "ti-twitter-alt",
          title: "ตึกศิรินทร",
          value: "น้ำยาใกล้หมด"
        },
        {
          type: "warning",
          icon: "ti-twitter-alt",
          title: "ลานปาล์ม",
          value: "ปกติ"
        },
        {
          type: "danger",
          icon: "ti-twitter-alt",
          title: "ใต้หลังคา",
          value: "น้ำยาหมด"
        }
      ]
    }
  }
}
</script>
<style>
</style>
