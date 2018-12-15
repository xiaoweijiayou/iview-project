<style>
.user-table {
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.change-page {
  display: inline-block;
  float: right;
}
</style>
<template>
  <div>
    <i-input
      style="width:200px;margin-left:10px;height:35px"
      v-model="userid"
      :number = 'true'
      placeholder="请输入用户id搜索"
    />
    <Select v-model="model2" style="width:200px">
      <Option v-for="item in roleSet" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>  
    <Button @click="handleSearch" type="primary">搜索</Button>
    <Button @click="handleInsert" type="primary">新增</Button>
    <Button @click="handleDelete" type="primary" :disabled="disabledButton">删除</Button>
    <Table
      @on-row-click="handleRowClick"
      class="user-table"
      border
      :columns="columns1"
      :data="data1"
    ></Table>
    <Page
      class="change-page"
      :total="meta.total"
      show-sizer
      show-elevator
      show-total
      :current="meta.page"
      @on-change="handlePageChange"
      @on-page-size-change="handleSizeChange"
    />
    <Modal v-model="modal1" title="新增用户">
      <i-form ref="userForm" :model="userForm" :rules="ruleValidate" :label-width="80">
        <Form-item label="用户名" prop="username">
          <i-input v-model="userForm.username"></i-input>
        </Form-item>
        <Form-item label="密码" prop="password">
          <i-input v-model="userForm.password" type="password"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="email">
          <i-input v-model="userForm.email"></i-input>
        </Form-item>
        <Form-item label="角色" prop="roleid">
          <i-input v-model="userForm.roleid"></i-input>
        </Form-item>
      </i-form>
      <template slot="footer">
        <i-button @click="submit('userForm')" type="primary">确定</i-button>
        <i-button @click="cancel('userForm')">取消</i-button>
      </template>
    </Modal>
  </div>
</template>
<script>
import { getUserList } from "@/api/data";
import { addUser } from "@/api/data";
import { searchUser } from "@/api/data";
export default {
  data() {
    return {
       roleSet:[
         {
           value:1,
           label:'1'
         },
          {
           value:2,
           label:'2'
         },
          {
           value:3,
           label:'3'
         },
          {
           value:4,
           label:'4'
         },
       ],
      columns1: [
        {
          title: "用户名",
          key: "username"
        },
        {
          title: "用户编号",
          key: 'id',
        },
        {
          title: "email",
          key: "email"
        },
        {
          title: "first_name",
          key: "first_name"
        },
        {
          title: "last_name",
          key: "last_name"
        }
      ],
      meta: {
        total: 0,
        page: 1,
        pages: 0,
        per_page: 10
      },
      data1: [],
      modal1: false,
      model2: '',
      disabledButton: true,
      userForm: {},
      userid: "",
      username: "",
      ruleValidate: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        email: [
          { required: true, message: "email不能为空", trigger: "blur" },
          { type: "email", message: "email格式不正确", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSearch() {
      searchUser(this.userid, this.username).then(res =>{
        this.data1 = [res.data]      
      }).catch(error => {
        this.data1 = []      
    });
    },
    handleInsert() {
      this.modal1 = true;
    },
    handleDelete() {},
    handleRowClick() {
      this.disabledButton = false;
    },
    handlePageChange(page) {
      this.meta.page = page;
      this.changeTableData();
    },
    handleSizeChange(size) {
      this.meta.per_page = size;
      this.changeTableData();
    },
    changeTableData() {
      getUserList(this.meta.page, this.meta.per_page).then(res => {
        this.data1 = res.data && res.data.items;
        this.meta = res.data && res.data.meta;
      });
    },

    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          addUser(
            this.userForm.username,
            this.userForm.password,
            this.userForm.email,
            this.userForm.roleid
          );
          this.$refs[name].resetFields();
          this.modal1 = false;
          this.changeTableData();
        }
      });
    },
    cancel(name) {
      this.$refs[name].resetFields();
      this.modal1 = false;
    }
  },
  mounted() {
    this.changeTableData(1);
  }
};
</script>