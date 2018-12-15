<style lang="less" scoped>
.menu-list {
  width: 240px;
  position: absolute;
  &-ul {
    height: 100%;
    overflow: auto;
    width: 100%;
  }
}
</style>
<template>
  <div class="menu-list" :style="menuHeight">
    <Menu class="menu-list-ul" active-name="1-2"  >
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          用户信息管理
        </template>                           
          <MenuItem
            v-for="(userMenu, i) in menus.userMenus"
            :key="'_' + i"
            :name="'1-' + i"
            @click.native="handleRouter(userMenu.path)"
          >{{ userMenu.name }}</MenuItem>
      </Submenu>
        <menu-Item name="2" @click.native="handleRouter('setManager')">              
          <Icon type="ios-analytics" />
            设备管理                                              
      </menu-Item>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics" />
         项目管理
        </template>
        <MenuItem
        v-for="(ProjectManager,i) in menus.ProjectManager"
        :key="'_'+i"
        :name="'3-'+ i"
        @click.native="handleRouter(ProjectManager.path)"
        >{{ProjectManager.name}}</MenuItem>      
      </Submenu>
      <menu-Item name="4" @click.native="handleRouter('iniManager')">                
        <Icon type="ios-analytics" />  
          配置管理                                                           
      </menu-Item>
      <menu-Item name="5" @click.native="handleRouter('clientManager')">              
        <Icon type="ios-analytics" />
          客户端管理                                             
      </menu-Item>
      <menu-Item name="6" @click.native="handleRouter('logManagement')">                
        <Icon type="ios-analytics" />
          日志管理                                                
      </menu-Item>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "menuList",
  data() {
    return {
      screenHeight: 0,
      menus: {
        userMenus: [
          {
            name: "用户管理",
            path: "userManagement"
          },
          {
            name: "角色管理",
            path: "roleManagement"
          },
          {
            name: "部门管理",
            path: "departmentManagement"
          },
           {
            name: "密码管理",
            path: "passwordManagement"
          },
        ],
        ProjectManager:[
          {
            name:'项目基本信息',
            path:'projectInfo'
          },
          {
            name:'项目性能数据',
            path:'performanceData'
          },
          {
            name:'项目问题列表',
            path:'issueList'
          },

        ],
        clientMenus: [
          {
            name: "客户端管理",
            path: "clientManager"
          },
          {
            name: "配置管理",
            path: "iniManager"
          },
          {
            name:'日志管理',
            path:'logManagement'
          },
        ],
        
      }
    };
  },
  methods: {
    handleRouter: function(path) {
      this.$router.push({
        path: `/home/${path}`
      });
    }
  },

  computed: {
    menuHeight() {
      return {
        height: `${this.screenHeight - 64}px`
      };
    }
  },
  mounted() {
    this.screenHeight = window.innerHeight;
  }
};
</script>