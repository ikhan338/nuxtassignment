<template>
  <div>
    <canvas id="pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
import piedata from '~/components/piedata'
export default {
  name: 'PieChart',
  data() {
    return {
      piedata
    }
  },
  mounted() {
    const ctx = document.getElementById('pie-chart');
    chartInstance = new Chart(ctx, this.piedata);
    chartInstance.destroy();
  }
}
</script>
