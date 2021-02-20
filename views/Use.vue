<template>
<div class="use">
  <div class="swiper">
       <!-- <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in url" :key="item.id">
                 <img :src="item.view">
            </el-carousel-item>`
  </el-carousel> -->
 <el-row :gutter="0">
			<el-carousel :interval="4000" arrow="never" height="250px" type="card">
				<el-carousel-item v-for="item in dataimg" :key="item">
					<div class="grid-content">
								<img :src="item.src" style="height:250px;width:100%;">
					</div>
				</el-carousel-item>
			</el-carousel>
		</el-row>
  </div>
  <div class="btn">
        <el-button type="primary"  plain><a href="http://222.24.63.61:8080/user/download1">资源一文档下载</a><i class="el-icon-download"></i></el-button>
        <el-button type="primary" plain><a href="http://222.24.63.61:8080/user/download2">资源二文档下载</a><i class="el-icon-download"></i></el-button>
        <el-button type="primary" plain><a href="http://222.24.63.61:8080/user/download3">资源三文档下载</a><i class="el-icon-download"></i></el-button>
        <el-button type="primary" plain><a href="http://222.24.63.61:8080/user/download4">资源四文档下载</a><i class="el-icon-download"></i></el-button>
  </div>
 
</div>

</template>

<script>
export default {
		name: 'AboutUs',
		data() {
			return {
				
				dataimg: [{
						src: require('../assets/1.jpg'),
					},
					{
						src: require('../assets/2.jpg'),
					},
					{
						src: require('../assets/3.jpg'),
					}
				]
			}
		}
	}
</script>

<style scoped>
    a{
        text-decoration: none;
        color:#000;
    }
    .use{
        width: 80%;
        height: 400px;
        /* border:1px solid black; */
        margin-top: 5%;
        margin-left: 10%;
    }
     .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .btn{
      width: 100%;
      height: 100px;
      /* border:1px solid black; */
      text-align: center;
      line-height: 100px;
  }
</style>