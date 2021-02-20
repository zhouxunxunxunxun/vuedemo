<template>
    <div class="resource">
    <el-button type="primary" plain @click="dialogFormVisible = true">新建部门</el-button>

        <el-dialog title="新增部门" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="资源名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible = false;depar()">立即创建</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
</el-form>
        </el-dialog>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="部门id"
      width="200">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.department_id }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="部门名称"
      width="200">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.department_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
         <el-dialog title="修改部门" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
            <el-form-item label="部门名称">
              <el-input type="text" v-model="form1.name"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible1 = false;handleEdit()" >修 改</el-button>
        </div>
        </el-dialog>
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible1 = true;change(scope.$index, scope.row)"></el-button>
        <el-button @click="handleDelete(scope.$index, scope.row)" type="danger" icon="el-icon-delete" circle></el-button>
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
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          delivery: false,
        },
        dialogFormVisible1: false,
            form1: {
            delivery: false,
            name:'',
            id:''
            },
        formLabelWidth: '120px',
      }
    },
    methods: {
       depar(){
        this.$axios.post("http://222.24.63.61:8080/department/add",{department_name:this.form.name})
        .then(()=>{
          this.$axios.get("http://222.24.63.61:8080/department/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      change(index,row){
        this.form1.name = row.department_name;
        this.form1.id = row.department_id;
      },
      handleEdit() {
        this.$axios.post("http://222.24.63.61:8080/department/update",{department_id:this.form1.id,department_name:this.form1.name})
        .then(()=>{
          this.$axios.get("http://222.24.63.61:8080/department/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      handleDelete(index, row) {
        this.$axios.post("http://222.24.63.61:8080/department/delete",{department_id:row.department_id})
        .then(()=>{
         this.$axios.get("http://222.24.63.61:8080/department/query").then((res)=>{
        this.tableData = res.data;
      })
        })
      }
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/department/query").then((res)=>{
        this.tableData = res.data;
      })
    },
  }
</script>

<style scoped>

</style>