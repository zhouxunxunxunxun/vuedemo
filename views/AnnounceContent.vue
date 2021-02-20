<template>
<div class="content">
  
    <div class="incontent">
        <div class="contenthead">
        {{name}}
        </div>
        <div class="inner">
         {{content}}
        </div>
    </div>
    <div class="back">
        <button @click="backmain">返回</button>
    </div>
    
</div>

</template>

<script>
export default {
    data() {
        return {
            content:'',
            name:''
        }
    },
    created() {
        // console.log(location.search.split('=')[1]);
         this.$axios.get("http://222.24.63.61:8080/announcement/query").then((res)=>{
         this.content = res.data[location.search.split('=')[1]].announcement_content;
         this.name = res.data[location.search.split('=')[1]].announcement_name;
      })
    },
    methods: {
        backmain(){
            this.$router.push("/home/announce");
        }
    },
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    /* 问题：纵向百分比 */
    .content{
        width: 40%;
        min-height: 650px;
        /* border:1px solid black; */
        margin:20px auto;
    }
    .incontent{
         overflow-y:scroll;
        font-size: 20px;
        min-height: 500px;
    }
    .incontent .contenthead{
        width: 100%;
        height: 60px;
        border-bottom: 5px solid black;
        font-size: 30px;
        line-height: 60px;
        text-align: center;
    }
    .incontent .inner{
        margin-top: 20px;
    }
    .back button{
        width: 100px;
        height: 40px;
        background-color: #000;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
    }
</style>