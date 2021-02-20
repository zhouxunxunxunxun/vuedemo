<template>
  <div>
      <div class="show">
        <img  :src='movie.image' class="oimage1">
        <div class="container">
          <div class="header">{{movie.name}}</div>
          <div class="xian"></div>
          <div class="oimage">
            <img  :src='movie.image'>
          </div>
          <div class="message">
            <p>导演:  {{movie.director}}</p>
            <p>主演:  {{movie.actor}}</p>
            <p>类型:  {{movie.play_type}}</p>
            <p>时长:  {{movie.play_length}}分钟</p>
            <p>剧情介绍：{{movie.brief_info}}</p>
          </div>
          <div class="time">首映时间:2019-7-1</div>
        </div>
      </div>
      
      <ShowMovie :id="id"/>
  </div>

</template>

<script>
import ShowMovie from '@/components/movie/ShowMovieList.vue';
const movieList = require('@/assets/msg.js');
var movie = movieList[0];
const url = 'http://129.204.185.247:8000/api/app01/getplay';
const url1 = 'http://129.204.185.247:8000/api/app01/getschemebyplayid';
export default {
  components: {
    ShowMovie
  },
  data(){
    return{
      movie:{},
      id:null,
    }
  },
  created(){
    this.id = this.$route.query.id;
    this.getdata();
    
  },
  methods:{
    getdata(){
      fetch(url,{
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'id='+this.id
      }).then(response => response.json())
      .then((data)=>{
        data[0].image ='http://129.204.185.247:8000'+ data[0].image
        this.movie = data[0];
        })
    },
  }
}
</script>

<style scoped>
@keyframes mohu{
  /* from{}
  to{} */
  from{
    opacity: 0;
    filter:blur(60px)
  }
  to{
    opacity: 0.4;
    filter:blur(15px);
  }
}
.show{
  background: #42383D;
  min-width: 1000px;
  position: relative;
  height: 375px;
  overflow: hidden;
}
.show .oimage1{
  /* z-index: -1; */
  position: absolute;
  width: 100%;
  height: auto;
  animation: mohu 3s forwards ;
  
}
.container {
  min-width: 1000px;
  height: 100%;
  z-index: 10;
  position: absolute;
  left: calc(50% - 500px); 
  padding: 10px 0;
}
.container .header {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 10px 0;
}
.container .xian {
  border-top: 1px solid rgba(255, 255, 255, .5);
  margin-bottom: 10px;
}
.container .oimage{
  float: left;
  width: 210px;
  height: 280px;
  margin-right: 20px;
}
.container  .oimage img{
  width: 100%;
  height: 100%;
}
.container .message{
  width: 600px;
  float: left;
  color: #fff;
  font-size: 12px;
  font-weight: inherit;
}
.container .time {
  float: right;
  color: #fff;
  font-size: 12px;
}
</style>
