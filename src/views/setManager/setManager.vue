<style lang='less' scoped>
.set-table {
  display: inline-block;
  margin: 10px 10px 8px 8px;
}
.set-page {
  display: inline-block;
  margin: 0 0 0 25px;
}
</style>
<template>
  <div>
    <label style="margin: 0 6px 6px 6px">测试项选择</label>
    <Cascader
      :data="data"
      v-model="value1"
      style="width:150px; float:left;display:inline"
      @on-change="handleChangeCascader"
    ></Cascader>
    <label style="margin: 0 10px 8px 6px">项目名</label>
    <Select v-model="modelRroject" style="width:150px">
      <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Button type="default" style=" margin-right: 5px;">刷新</Button>
    <Button @click="handleRun" type="default" style=" margin-right: 5px;">运行</Button>
    <Button type="default">停止</Button>
    <Button type="default" style=" margin-left: 5px;">重启</Button>
    <Table
      @on-row-click="handleRowClick"
      class="set-table"
      border
      :columns="columns1"
      :data="data1"
    ></Table>
    <Table
      @on-row-click="handleRowClick"
      class="set-table"
      border
      :columns="columns2"
      :data="data2"
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
  </div>
</template>
<script>
import { devices } from "@/api/data";
import expandRow from './tableExpand.vue';
 
export default {
  data() {
    return {
      total: 1,
      page: 1,
      modelRroject: "",
      value1: [],
      total: 1,
      data1: [],
      meta: {
        total: 0,
        page: 1,
        pages: 0,
        per_page: 10
      },
      projectList: [
        {
          value: "",
          label: ""
        }
      ],
      data: [
        {
          value: "DRAM",
          label: "DRAM",
          children: [
            {
              value: "SW",
              label: "SW"
            },
            {
              value: "AR",
              label: "AR"
            },
            {
              value: "MAP",
              label: "MAP"
            }
          ]
        },
        {
          value: "AQ",
          label: "AQ",
          children: [
            {
              value: "Scenario",
              label: "Scenario",
              children: [
                {
                  value: "MK1",
                  label: "MK1"
                },
                {
                  value: "MK2",
                  label: "MK2"
                },
                {
                  value: "SW1",
                  label: "SW1"
                },
                {
                  value: "SW2",
                  label: "SW2"
                },
                {
                  value: "AR",
                  label: "AR"
                }
              ]
            },
            {
              value: "Stress",
              label: "Stress",
              children: [
                {
                  value: "FC",
                  label: "FC"
                },
                {
                  value: "LRAF",
                  label: "LRAF"
                },
                {
                  value: "DJ",
                  label: "DJ"
                },
                {
                  value: "IT",
                  label: "IT"
                },
                {
                  value: "IVT",
                  label: "IVT"
                },
                {
                  value: "RD",
                  label: "RD"
                },
                {
                  value: "MIX",
                  label: "MIX"
                },
                {
                  value: "FSS",
                  label: "FSS"
                }
              ]
            },
            {
              value: "Perf",
              label: "Perf",
              children: [
                {
                  value: "Rand",
                  label: "Rand"
                },
                {
                  value: "Seq",
                  label: "Seq"
                },
                {
                  value: "TBW",
                  label: "TBW"
                }
              ]
            },
            {
              value: "LV",
              label: "LV",
              children: [
                {
                  value: "FC",
                  label: "FC"
                },
                {
                  value: "LRAF",
                  label: "LRAF"
                },
                {
                  value: "MK",
                  label: "MK"
                },
                {
                  value: "DJ",
                  label: "DJ"
                },
                {
                  value: "IT",
                  label: "IT"
                },
                {
                  value: "IVT",
                  label: "IVT"
                },
                {
                  value: "RD",
                  label: "RD"
                }
              ]
            },
            {
              value: "SPO",
              label: "SPO",
              children: [
                {
                  value: "PON",
                  label: "PON"
                },
                {
                  value: "POA",
                  label: "POA"
                }
              ]
            }
          ]
        },
        {
          value: "AE",
          label: "AE",
          children: [
            {
              value: "LST",
              label: "LST"
            },
            {
              value: "FRAG",
              label: "FRAG"
            },
            {
              value: "STR",
              label: "STR"
            },
            {
              value: "CAT",
              label: "CAT"
            },
            {
              value: "RST",
              label: "RST"
            },
            {
              value: "RB",
              label: "RB"
            }
          ]
        }
      ],
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "设备编号",
          key: "id"
        },
        {
          title: "info",
          key: "info"
        },
        {
          title: "项目编号",
          key: "projectid"
        },
        {
          title: "设备号",
          key: "sn"
        },
        {
          title: "客户端编号",
          key: "stationid"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "更新时间",
          key: "updatetime"
        },
        {
          title: "用户编号",
          key: "userid"
        }
      ],
      columns2: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "项目编号",
          key: "projectid"
        },
        {
          title: "设备号",
          key: "sn"
        },
        {
          title: "状态",
          key: "status"
        }
      ],
      data2: [
        {
          projectid: "1",
          id: 19,
          sn: 'gdkhwijl',
          status: "running",
          stationid: "2",
          userid: 1,          
        }
      ]
    };
  },
  methods: {
    handleRun() {
      if (this.value1.length == 0) {
        this.$Message.error("请选择测试项");
      } else {
        if (!this.modelRroject) {
          this.$Message.error("请选择项目");
        }
      }
    },
    handleRowClick() {},
    handleChangeCascader(value, selectedData) {},
    handlePageChange(page) {
      this.meta.page = page;
      this.changeTableData();
    },
    handleSizeChange(size) {
      this.meta.per_page = size;
      this.changeTableData();
    },
    changeTableData() {
      devices(this.meta.page, this.meta.per_page).then(res => {
        this.data1 = res.data && res.data.items;
        this.setSelectData(this.data1);
        this.meta = res.data && res.data.meta;
      });
    },
    setSelectData(data) {
      let items = [];
      data.forEach(item => {
        items.push({
          label: item.projectid,
          value: item.projectid
        });
      });
      this.projectList = items;
    }
  },
  mounted() {
    this.changeTableData(1);
  }
};
</script>
