<template>
    <div>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%"  max-height="500px">
    <el-table-column
      prop="id"
      label="id"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="账户名"
      width="130">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名"
      width="130">
    </el-table-column>
    <el-table-column
      prop="staus"
      label="状态"
      width="130">
    </el-table-column>
    <el-table-column
      prop="time"
      label="剩余排队时间(天)"
      width="130">
    </el-table-column>
     <el-table-column
      prop="user_department"
      label="用户所在部门"
      width="130">
    </el-table-column>
          <el-table-column label="操作" min-width="300">
              <template slot-scope="scope">
                  <el-button size="mini" type="warning" @click="cancel1(scope.$index, scope.row)">停止使用</el-button>
                  <template v-if="scope.row.use">
                    <el-button
                          size="mini"
                          @click="cancel(scope.$index, scope.row)" type="danger">取消排队</el-button>
                  </template>
                  <template v-else>
                          <el-button
                          size="mini"
                          @click="cancel(scope.$index, scope.row)" type="danger" disabled>取消排队</el-button>
                  </template>
                  
              </template>
          </el-table-column>
  </el-table>
    </div>
 
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        str:[],
      }
    },
      created() {
      this.$axios.get("http://222.24.63.61:8080/apply/query_paidui3").then((res)=>{
        for(let i = 0;i < res.data.length;i++){
          this.$axios.post("http://222.24.63.61:8080/apply/query_apply33",{cno:res.data[i].cno}).then((res1)=>{
            this.str = res.data[i];
            this.str.user_name = res1.data.user_name;
            this.str.user_department = res1.data.user_department;
             if(this.str.staus==1){
                  this.str.staus = '未使用';
                  this.str.use = true;
            }else{
              this.str.staus = '正在使用中';
              this.str.use = false;
            }
            this.tableData.push(this.str);
          })
        }
      })

    },
    methods: {
            cancel(index,row){
        this.$axios.post("http://222.24.63.61:8080/apply/cancel_paidui",{id:row.id}).then((res)=>{
           if(res.data == 'success'){
            alert("已取消排队！");
            this.$axios.get("http://222.24.63.61:8080/apply/query_paidui3").then((res)=>{
                this.tableData = [];
                for(let i = 0;i < res.data.length;i++){
          this.$axios.post("http://222.24.63.61:8080/apply/query_apply33",{cno:res.data[i].cno}).then((res1)=>{
            this.str = res.data[i];
            this.str.user_name = res1.data.user_name;
            this.str.user_department = res1.data.user_department;
             if(this.str.staus==1){
                  this.str.staus = '未使用';
                  this.str.use = true;
            }else{
              this.str.staus = '正在使用中';
              this.str.use = false;
            }
            this.tableData.push(this.str);
          })
        }
      })
          }
        })
      },
      cancel1(index,row){
        this.$axios.post("http://222.24.63.61:8080/apply/cancel_paidui",{id:row.id}).then((res)=>{
           if(res.data == 'success'){
            alert("已停止使用！");
            this.$axios.get("http://222.24.63.61:8080/apply/query_paidui3").then((res)=>{
                this.tableData = [];
                for(let i = 0;i < res.data.length;i++){
          this.$axios.post("http://222.24.63.61:8080/apply/query_apply33",{cno:res.data[i].cno}).then((res1)=>{
            this.str = res.data[i];
            this.str.user_name = res1.data.user_name;
            this.str.user_department = res1.data.user_department;
             if(this.str.staus==1){
                  this.str.staus = '未使用';
                  this.str.use = true;
            }else{
              this.str.staus = '正在使用中';
              this.str.use = false;
            }
            this.tableData.push(this.str);
          })
        }
      })
          }
        })
      }
    },
}
</script>

<style scoped>

</style>