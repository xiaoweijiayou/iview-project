<template>
<div class="changePassword">
<i-Menu ref="leftMenu" :theme="theme2" :open-names="open" active-name="active" @on-select="handleSelect" style="width: 300px;">
<Submenu v-for="(data,index) in datas" :name="data.isd">
<template slot="title">
<Icon type="ios-paper"></Icon>内容管理{{index}}
</template>
<Menu-item :name="data.isd">{{data.name}}</Menu-item>
<!--<Menu-item name="1-2">评论管理</Menu-item>
<Menu-item name="1-3">举报管理</Menu-item>-->
</Submenu>
<!--<Submenu name="2">
<template slot="title">
<Icon type="ios-people"></Icon>用户管理
</template>
<Menu-item name="2-1">新增用户</Menu-item>
<Menu-item name="2-2">活跃用户</Menu-item>
</Submenu>
<Submenu name="3">
<template slot="title">
<Icon type="stats-bars"></Icon>
统计分析
</template>
<Menu-group title="使用">
<Menu-item name="3-1">新增和启动</Menu-item>
<Menu-item name="3-2">活跃分析</Menu-item>
<Menu-item name="3-3">时段分析</Menu-item>
</Menu-group>
<Menu-group title="留存">
<Menu-item name="3-4">用户留存</Menu-item>
<Menu-item name="3-5">流失用户</Menu-item>
</Menu-group>
</Submenu>-->
</i-Menu>
 
</div>
 
</template>
 
<script>
var qs = require("qs");
export default {
data() {
return {
theme2: 'dark',
open: [],
active: "1-1",
datas:[
{isd:'1',id:'1-1',name:'asde'},
{isd:'2',id:'2-1',name:'asde'},
{isd:'3',id:'2-1',name:'asde'}
]
};
},
mounted: function() {
this.open = ["2"];
this.active = ["3-1"];
this.$nextTick(function() {
this.$refs.leftMenu.updateOpened();
this.$refs.leftMenu.updateActiveName();
})
this.handleSelect(this.active);
},
 
methods: {
handleSelect: function(name) {
//在这里做你想做的事情
},
}
};
</script>