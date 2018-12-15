<template>
  <div>
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in searchList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
       <input style="width:200px; height:30px" placeholder="请输入关键字搜索"></input>
       <Button @click="handleSearch" type="primary" >搜索</Button>
       <Button @click="handleInsert" type="primary" >新增</Button>
       <Button @click="handleDelete" type="primary" >删除</Button>
       <div>
      <Table border  :columns="columns1" :data="data1" @on-delete="handleDelete"></Table>
       </div>
       

  </div>
</template>
<script>
    export default {
        data () {
            return {
                searchList: [
                    {
                        value: '用户名',
                        label: '用户名'
                    },
                    {
                        value: '权限',
                        label: '权限'
                    },
                    
                ],
                columns1: [
                    {
                        title: '用户名',
                        key: '用户名'
                    },
                    {
                        title: '密码',
                        key: '密码'
                    },
                    {
                        title: '权限',
                        key: '权限'
                    },
                    {
                        title:'操作',
                        key: '操作'
                    }
                ],
                data1: [
                    {
                        用户名: 'John Brown',
                        密码: 18,
                        权限: 'New York No. 1 Lake Park',
                        操作: ''
                    },
                    {
                        用户名: 'Jim Green',
                        密码: 24,
                        权限: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        用户名: 'Joe Black',
                        密码: 30,
                        权限: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        用户名: 'Jon Snow',
                        密码: 26,
                        权限: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                ],
                model1: ''
            }
        }
    }
</script>