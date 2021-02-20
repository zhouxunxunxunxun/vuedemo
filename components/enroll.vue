<template>
     <el-table
    :data="tableData"
    style="width: 100%;"  max-height="500px" stripe>
    <el-table-column
      label="用户id"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.user_id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名称"
      width="100">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="部门"
      width="120">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_department }}</el-tag>
          </div>
        
      </template>
    </el-table-column>
    <el-table-column
      label="昵称"
      width="120">
      <template slot-scope="scope">

          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_nick }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_email }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="160">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.user_phone }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="160">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">通过</el-button>
          <el-button size="mini" type="danger"  plain @click="dialogFormVisible = true" >拒绝</el-button>


        <el-dialog title="拒绝原因" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="原因">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;handleDelete(scope.$index, scope.row)" >确 定</el-button>
        </div>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
            form: {
            delivery: false,
            desc: ''
            },
          formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$axios.post("http://222.24.63.61:8080/user/activate",{user_id:row.user_id})
        .then((res)=>{
          if(res.data == 'success'){
            alert("已通过！");
             this.$axios.get("http://222.24.63.61:8080/admin/query_user1").then((res)=>{
          this.tableData = res.data;  
        })
          }
              
        })
      },
      handleDelete(index, row,desc) {
        this.$axios.post("http://222.24.63.61:8080/user/refuse",{user_id:row.user_id,apply_remark:this.form.desc})
        .then((res)=>{
           this.$axios.get("http://222.24.63.61:8080/admin/query_user1").then((res)=>{
          this.tableData = res.data;  
        })
        })
        
      }
    },
    created() {
        this.$axios.get("http://222.24.63.61:8080/admin/query_user1").then((res)=>{
          this.tableData = res.data;  
        })
    },
}
</script>

<style scoped>

</style>