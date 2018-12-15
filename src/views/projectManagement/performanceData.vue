<style>
.performance-data {
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.change-page {
  display:inline-block;
  float: right;
}
</style>
<template>
<div>
    <i-input @on-change='handleSearch1' placeholder="输入项目名" style="width:200px; margin-left:10px" v-model="searchValue"></i-input>        
    <Date-picker class="date-pick" type="date" placeholder="选择起始日期" style="width: 200px"></Date-picker>
    <Date-picker  type="date" placeholder="选择结束日期" style="width: 200px"></Date-picker>
    <Button @click='handleSearch' type="primary">搜索</Button>
    <Button @click='handleUpdate' type="primary" :disabled='disableButton'>修改</Button>
    <Table  @on-row-click="handleRowClick" highlight-row border class='performance-data' ref='performanceTable' :columns="columns1" :data="datas"></Table>
    <Button style="margin: 8px 0 0 8px;" type="primary" @click="exportExcel">导出为csv文件</Button>
    <Button style="margin: 8px 0 0 8px;" type="primary" @click="importExcel">导入性能数据</Button>
    <Page class='change-page' :total="meta.total" show-sizer show-elevator show-total :current="meta.page"
      @on-change="handlePageChange" @on-page-size-change='handleSizeChange'
    />    
</div>
    
</template>
<script>
import updatePerformance from "./updatePerformance.vue";
import { getTableData } from "@/api/data";
export default {
  data() {
    return {
      columns1: [
        { title: "项目名", key: "TC_Name",  },
        { title: "起始时间", key: "deviceid", },
        { title: "结束时间", key: "endtime", },
        { title: "RR(IOPS)", key: "id" },
        { title: "RW(IOPS)", key: "info" },
        { title: "SR(Mb/S)", key: "starttime" },
        { title: "SW(Mb/S)", key: "status" },
        { title: "TBW(Mb/S)", key: "status" }
      ],
      datas: [],
      searchValue: "",
      disableButton: true,
      meta: {
        total: 0,
        page: 1,
        pages: 0,
        per_page: 10,
      }
    };
  },
  components: {
    updatePerformance
  },
  methods: {
    handleSearch() {},
    exportExcel() {
      this.$refs.performanceTable.exportCsv({
        filename: `table-performanceData.csv`
      });
    },
    importExcel() {},
    handleSearch1() {},
    handleUpdate() {},
    handleRowClick() {
      this.disableButton = false;
    },
    handlePageChange(page) {
      this.meta.page = page
      this.changeTableData()
    },
    changeTableData() {
      getTableData(this.meta.page, this.meta.per_page).then(res => {
        this.datas = res.data && res.data.items;
        this.meta = res.data && res.data.meta
      });
    },
    handleSizeChange(size) {
      this.meta.per_page = size
      this.changeTableData()
    }
  },
  mounted() {
    this.changeTableData()
  }
};
</script>