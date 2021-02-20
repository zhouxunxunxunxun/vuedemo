<template>
  <div class="jiqun">
    <div class="content">
      <h3>请点击下列图标以访问对应页面：</h3>
      <div class="demo">
        <a href="http://monitor.xupt.edu.cn" target="blank">
          <img src="../assets/j1.jpg" alt />
        </a>
        <p>Hadoop集群运行情况</p>
      </div>
      <div class="demo">
        <a href="http://wxm.xupt.edu.cn/master-status" target="blank">
          <img src="../assets/j2.jpg" alt />
        </a>
        <p>Hbase数据库服务</p>
      </div>
      <div class="demo">
        <a href="http://10.0.1.90:50070/" target="blank">
          <img src="../assets/j3.jpg" alt />
        </a>
        <p>HDFS分布式存储服务</p>
      </div>
      <div class="demo">
        <a href="http://10.0.1.90:18088/" target="blank">
          <img src="../assets/j4.jpg" alt />
        </a>
        <p>spark内存计算引擎服务</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jiqun {
  width: 100%;
  height: 550px;
}
img {
  width: 300px;
  height: 200px;
}
.demo {
  width: 300px;
  height: 200px;
  float: left;
  margin-left: 100px;
  margin-top:40px;
}
.demo::after {
  clear: both;
  content: "";
  display: block;
}
p {
  text-align: center;
}
</style>