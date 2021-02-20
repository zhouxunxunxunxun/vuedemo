<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="myChart" :style="{width: '500px', height: '400px',float:'right'}"></div>
</template>
<script>
   export default {
  data () {
    return {
       charts: '',
                opinion:['类型1','linux服务器','windows服务器','类型四'],
                opinionData:[]
    }
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        this.charts = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        this.charts.setOption({
            title: { text: '资源使用情况统计',
                    subtext: '动态数据',
                    x:'center' },
            tooltip : {
                    trigger: 'item',
            },
             legend: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
            },
            xAxis: {
                data: this.opinion
            },
            yAxis: {},
            series: [{
                name: '资源使用量',
                type: 'bar',
                data:this.opinionData
            }]
        });
    }
  },
  created() {
    this.$axios.get("http://222.24.63.61:8080/apply/query_record1").then((res)=>{
      this.opinionData = res.data;
      this.drawLine('myChart');
    })
  },
}
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>