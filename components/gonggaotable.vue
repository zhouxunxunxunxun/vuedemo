<template>
    <div class="gonggaotable"> 
    <el-button type="primary" plain @click="dialogFormVisible1 = true">新建公告</el-button>

        <el-dialog title="新建公告" :visible.sync="dialogFormVisible1">
        <el-form ref="form" :model="form1" label-width="80px">
  <el-form-item label="公告标题">
    <el-input v-model="form1.name"></el-input>
  </el-form-item>
  <el-form-item label="公告内容">
    <el-input type="textarea" v-model="form1.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible1 = false;gonggao()">立即创建</el-button>
    <el-button @click="dialogFormVisible1 = false">取消</el-button>
  </el-form-item>
</el-form>
        </el-dialog>
    <el-table
    :data="tableData"
    style="width: 100%;">
    <el-table-column
      label="日期"
      width="190">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.announcement_time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="标题"
      width="140">
      <template slot-scope="scope">
      
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.announcement_name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="内容"
      width="600">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>内容: {{ scope.row.announcement_content }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.announcement_content }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="140">
      <template slot-scope="scope">
         <el-dialog title="修改公告" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="标题">
              <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;handleEdit()" >修 改</el-button>
        </div>
        </el-dialog>
        <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible = true;change(scope.$index, scope.row)"></el-button> 
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
        dialogFormVisible1: false,
        tableData: [],
         dialogFormVisible: false,
            form: {
            delivery: false,
            desc: '',
            name:'',
            id:''
            },
            form1: {
              name: '',
              delivery: false,
              desc: ''
            },
          formLabelWidth: '120px'
      }
    },
    methods: {
       gonggao(){
        this.$axios.post("http://222.24.63.61:8080/announcement/add",{announcement_name:this.form1.name,announcement_content:this.form1.desc})
        .then((res)=>{
          
          this.$axios.get("http://222.24.63.61:8080/announcement/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      change(index,row){
        this.form.name = row.announcement_name;
        this.form.desc = row.announcement_content;
        this.form.id = row.announcement_id;
      },
      handleEdit() {
        this.$axios.post("http://222.24.63.61:8080/announcement/update",{announcement_id:this.form.id,announcement_name:this.form.name,announcement_content:this.form.desc})
        .then((res)=>{
          this.$axios.get("http://222.24.63.61:8080/announcement/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      handleDelete(index, row) {
        this.$axios.post("http://222.24.63.61:8080/announcement/delete",{announcement_id:this.tableData[index].announcement_id})
        .then((res)=>{
          this.$axios.get("http://222.24.63.61:8080/announcement/query").then((res)=>{
        this.tableData = res.data;
      })
        })
      },
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/announcement/query").then((res)=>{
        this.tableData = res.data;
      })
    },
  }
</script>

<style scoped>

</style>