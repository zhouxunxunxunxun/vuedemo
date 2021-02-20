<template>
<div class="resource">
    
  <table class="gridtable" width="100%">
    <caption>资源申请</caption>      
    <tr>
          <th>资源ID</th>
          <th>资源名称</th>
          <th>资源描述</th>
          <th>是否申请</th>
    </tr>

    <tr>

        <td>{{list[0].resource_id}}</td>
        <td>{{list[0].resource_name}}</td>
        <td>{{list[0].resource_content}}</td>
        <td><Tanchuang1></Tanchuang1></td>
    </tr>
     <tr>

         <td>{{list[1].resource_id}}</td>
         <td>{{list[1].resource_name}}</td>
         <td>{{list[1].resource_content}}</td>
        <td><Tanchuang2></Tanchuang2></td>
    </tr>
     <tr>

         <td>{{list[2].resource_id}}</td>
         <td>{{list[2].resource_name}}</td>
         <td>{{list[2].resource_content}}</td>
        <td><Tanchuang3></Tanchuang3></td>
    </tr>
     <tr>

         <td>{{list[3].resource_id}}</td>
         <td>{{list[3].resource_name}}</td>
         <td>{{list[3].resource_content}}</td>
        <td><Tanchuang4></Tanchuang4></td>
    </tr>



</table>

</div>

</template>

<script>
import Tanchuang1 from '@/components/tanchuang1.vue'
import Tanchuang2 from '@/components/tanchuang2.vue'
import Tanchuang3 from '@/components/tanchuang3.vue'
import Tanchuang4 from '@/components/tanchuang4.vue'
export default {
    components: {
        Tanchuang1,
        Tanchuang2,
        Tanchuang3,
        Tanchuang4
    },
     methods: {
    },
    data() {
      return {
        list:[]
      }
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
        //   console.log(res.data);
          this.list = res.data;
      })
    },
}
</script>

<style scoped>
    .resource{
        width: 80%;
        max-height: 600px;
        /* border:1px solid black; */
         margin-top: 5%;
       margin-left: 10%;
       /* overflow-y: scroll; */
    }
  table.gridtable {

    font-family: verdana,arial,sans-serif;

    font-size:11px;

    color:#333333;

    border-width: 1px;

    border-color: #666666;

    border-collapse: collapse;

}

table.gridtable th {

    border-width: 1px;

    padding: 18px;

    border-style: solid;

    border-color: #666666;

    background-color:#dedede;
    text-align:center;
    font-size: 18px;
    font-family: "宋";

}

table.gridtable td {

    border-width: 1px;

    padding: 8px;

    border-style: solid;

    border-color: #666666;

    background-color: #ffffff;
    text-align:center;
    font-size: 14px;

}
caption{
    font-size: 30px;
    font-weight: bold;
    font-family: "宋";
    /* border-bottom: 1px solid black; */
    margin-bottom: 10px;
}
</style>
