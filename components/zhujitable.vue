<template>
    <div class="zhuji">
    <el-button type="primary" plain @click="dialogFormVisible = true">新建主机</el-button>

        <el-dialog title="新增主机" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="主机名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="主机类型">
  <el-select v-model="form.style" placeholder="请选择主机类型">
      <el-option v-for="item in form.options" :key="item.resource_id"  :label="item.resource_name" :value="item.resource_name"></el-option>
  </el-select>
  </el-form-item>
   <el-form-item label="主机端口">
    <el-input v-model="form.duankou"></el-input>
  </el-form-item>
  <el-form-item label="主机地址">
    <el-input type="textarea" v-model="form.dizhi"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="dialogFormVisible = false;zhuji()">立即创建</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
</el-form>
        </el-dialog>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="主机id"
      width="80">
      <template slot-scope="scope">
     
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_id }}</el-tag>
          </div>
   
      </template>
    </el-table-column>
    <el-table-column
      label="主机名称"
      width="140">
      <template slot-scope="scope">
    
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_name }}</el-tag>
          </div>
   
      </template>
    </el-table-column>
    <el-table-column
      label="主机所属类型"
      width="180">
      <template slot-scope="scope">
      
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_style }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="主机地址"
      width="200">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_dizhi }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="主机端口"
      width="120">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zhuji_duankou }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="120">
      <template slot-scope="scope">
         <el-dialog title="修改主机" :visible.sync="dialogFormVisible1">
        <el-form :model="form1">
            <el-form-item label="主机名称">
              <el-input type="text" v-model="form1.name"></el-input>
            </el-form-item>
            <el-form-item label="主机类型">
              <el-input type="text" v-model="form1.style"></el-input>
            </el-form-item>
            <el-form-item label="主机端口">
              <el-input type="text" v-model="form1.duankou"></el-input>
            </el-form-item>
            <el-form-item label="主机地址">
              <el-input type="textarea" v-model="form1.dizhi"></el-input>
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
          style: '',
          duankou:'',
          dizhi:'',
          options:[],

        },
        dialogFormVisible1: false,
            form1: {
            delivery: false,
            dizhi: '',
            name:'',
            style:'',
            duankou:'',
            id:''
            },
        formLabelWidth: '120px',
      }
    },
    methods: {
       zhuji(){
        this.$axios.post("http://222.24.63.61:8080/zhuji/add",{zhuji_name:this.form.name,zhuji_style:this.form.style,zhuji_duankou:this.form.duankou,zhuji_dizhi:this.form.dizhi})
        .then(()=>{
          this.$axios.get("http://222.24.63.61:8080/zhuji/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      change(index,row){
        this.form1.name = row.zhuji_name;
        this.form1.style = row.zhuji_name;
        this.form1.duankou = row.zhuji_duankou;
        this.form1.dizhi = row.zhuji_dizhi;
        this.form1.id = row.zhuji_id;
      },
      handleEdit() {
        this.$axios.post("http://222.24.63.61:8080/zhuji/update",{zhuji_id:this.form1.id,zhuji_name:this.form1.name,zhuji_style:this.form1.style,zhuji_duankou:this.form1.duankou,zhuji_dizhi:this.form1.dizhi})
        .then(()=>{
          this.$axios.get("http://222.24.63.61:8080/zhuji/query").then((res)=>{
          this.tableData = res.data;
      })
        })
      },
      handleDelete(index, row) {
        this.$axios.post("http://222.24.63.61:8080/zhuji/delete",{zhuji_id:row.zhuji_id})
        .then((res)=>{
          if(res.data=="success"){
            this.$axios.get("http://222.24.63.61:8080/zhuji/query").then((res)=>{
              this.tableData = res.data;
            })
          }
        })
      }
    },
    created() {
      this.$axios.get("http://222.24.63.61:8080/zhuji/query").then((res)=>{
        this.tableData = res.data;
      })
      this.$axios.get("http://222.24.63.61:8080/resource/query").then((res)=>{
          this.form.options = res.data;
    })
    },
  }
</script>

<style scoped>

</style>