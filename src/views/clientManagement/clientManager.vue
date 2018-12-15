<style lang='less'>
.insert-client {
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
<template>
<div>    
  <Table class="insert-client" border :columns="columns" :data="data6"></Table>
  <Button  type="primary" @click="insertClient" style="margin:0 0 0 8px">新增客户端</Button>
  <insert-client v-show="showInsertClient" :showInsertClient="showInsertClient" @hidden-dialog="hiddenDialog"></insert-client>
</div>
</template>
<script>
import insertClient from "./insertClient";
export default {
  name: "clientManager",
  components: {
    insertClient
  },
  data() {
    return {
      showInsertClient: false,
      columns: [
        {
          title: "客户端IP",
          key: "IP_address",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.IP_address)
            ]);
          }
        },

        {
          title: "操作系统版本",
          key: "OS_version",
          align: "center"
        },
        {
          title: "Adb版本",
          key: "Adb_version",
          align: "center"
        },
        {
          title: "客户端版本",
          key: "Client_version",
          align: "center"
        },
        {
          title: "Action",
          key: "action",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "重启客户端"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "重启adb"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          IP_address: "101:11:11:11",
          OS_version: "window 7",
          Adb_version: "ver_2.0.3",
          Client_version: "xxxx"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `OS_version：${this.data6[index].IP_address}<br>OS_version：${
          this.data6[index].OS_version
        }<br>IP_address：${this.data6[index].IP_address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    insertClient() {
      this.showInsertClient = true;
    },
    hiddenDialog() {
      this.showInsertClient = false;
    }
  }
};
</script>
