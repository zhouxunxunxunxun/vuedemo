<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main1" style="width:50%;height: 400px;float:left;"></div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['类型1','linux服务器','windows服务器','类型四'],
                opinionData:[]
            }
        },
        methods:{
            drawPie(id){
               this.charts = this.$echarts.init(document.getElementById('main1'))
               this.charts.setOption({
                 title : {
                    text: '资源申请统计',
                    subtext: '动态数据',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    show: true,
                    orient: 'vertical',
                    left: 'left',
                },
                 series: [
                   {
                     name:'申请资源量',
                     type:'pie',
                     radius : '55%',
                     center: ['50%', '60%'],
                    itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
        created() {
            this.$axios.get("http://222.24.63.61:8080/apply/query_record").then((res=>{
                this.opinionData = res.data;
                 this.$nextTick(function() {
                        this.drawPie('main1')
                })
            }))
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