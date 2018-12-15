<template>
  <div class="user">
    <i-input style="width:200px ;heigth:30px" placeholder="请输入用户名"></i-input>
    <Select v-model="model1" style="width:200px">
      <Option v-for="item in searchList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <i-button @click="handleSearch" type="primary">搜索</i-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleSearch() {}
  },
  data() {
    return {
      searchList: [
        {
          value: "admin",
          label: "管理员"
        },
        {
          value: "manager",
          label: "经理"
        },
        {
          value: "tester",
          label: "测试员"
        }
      ]
    };
  }
};
</script>