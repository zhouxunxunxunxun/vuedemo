<template>
    <div>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%"  max-height="500px">
    <el-table-column
      prop="user_id"
      label="用户id"
      width="80">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user_department"
      label="部门"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user_phone"
      label="电话"
      width="160">
    </el-table-column>
    <el-table-column
      prop="user_email"
      label="Email"
      width="180">
    </el-table-column>
     <el-table-column
      prop="user_nick"
      label="昵称"
      width="180">
    </el-table-column>
    <el-table-column label="操作" min-width="100">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" type="danger">停用</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
 
</template>

<script>
export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/admin/query_user").then((res)=>{
        this.tableData = res.data;
      })
    },
    methods: {
      handleEdit(index, row){
        this.$axios.post("http://222.24.63.61:8080/admin/stop",{user_id:row.user_id})
        .then((res)=>{
          if(res.data == 'success'){
            alert("已停用！");
             this.$axios.get("http://222.24.63.61:8080/admin/query_user").then((res)=>{
                this.tableData = res.data;
              })
          }
          
        })
      },
      updated() {
         this.$axios.get("http://222.24.63.61:8080/admin/query_user").then((res)=>{
        this.tableData = res.data;
      })
      },
    },
}
</script>

<style scoped>

</style>