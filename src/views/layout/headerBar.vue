<style lang="less" scoped>
    .header-bar {
        color: #fff;
        padding: 0 25px;
        position: relative;
        &>img {
            height: 100%;
            width: 15%;
        }
        &>.icon {
            position: absolute;
            top: 20px;
        }
        &>.title {
            color: #fff;
            font-size: 3em;
            vertical-align: top;
            padding-left: 20%;
        }
        &>.dropdown{
            color: #fff;
            position: absolute;
            top:3px;
        }
    }
</style>
<template>
   <Header class="header-bar">
       <img src="../../images/samsung.jpg"/>
       <span class="title">
         Auto Qulification Test System
       </span>      
       <Icon style="right:70px;" class="icon" type="ios-contact" :size='25' />
       <Dropdown style="right:45px;" class="dropdown" @on-click="contactClick">      
      <Icon :size="15" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
       <Icon style="right:110px;" class="icon" :type="fullScreenIcon" :size='25' @click.native="handleFullscreen" />
       
   </Header>
</template>
<script>
    export default {
        name: 'headerBar',
        data () {
            return {
                isFullscreen: false,
                fullScreenIcon: 'md-expand'
            }
        },
        methods: {
           contactClick () {
                this.$router.push({
                    path:'/' 
                })
            },
            handleFullscreen () {
                let main = document.body
                if (this.isFullscreen) {
                    if (document.exitFullscreen) {
                    document.exitFullscreen()
                    } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                    } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                    } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                    }
                    this.fullScreenIcon = 'md-expand';
                } else {
                    if (main.requestFullscreen) {
                    main.requestFullscreen()
                    } else if (main.mozRequestFullScreen) {
                    main.mozRequestFullScreen()
                    } else if (main.webkitRequestFullScreen) {
                    main.webkitRequestFullScreen()
                    } else if (main.msRequestFullscreen) {
                    main.msRequestFullscreen()
                    }
                    this.fullScreenIcon = 'md-contract';
                }
                this.isFullscreen = !this.isFullscreen
            },
        },
        mounted () {
            this.isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
            this.isFullscreen = !!this.isFullscreen
            this.$emit('input', this.isFullscreen)
            // document.addEventListener('fullscreenchange', () => {
            //     this.fullScreenIcon = 'md-contract';
            // })
            // document.addEventListener('mozfullscreenchange', () => {
            //     this.fullScreenIcon = 'md-contract';
            // })
            // document.addEventListener('webkitfullscreenchange', () => {
            //     this.fullScreenIcon = 'md-contract';
            // })
            // document.addEventListener('msfullscreenchange', () => {
            //     this.fullScreenIcon = 'md-contract';
            // })
        }
    }
</script>