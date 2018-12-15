<style>
    html, body {
        height: 100%;
        background: #fff;
    }
    .home-page {
        height: 100%;
    }
</style>

<template>
    <div class="home-page">
        <header-bar></header-bar>
        <menu-list></menu-list>
        <frame />
    </div>
</template>
<script>
    import menuList from './layout/menuList'
    import headerBar from './layout/headerBar'
    import breadCrumb from './layout/breadCrumb'
    import frame from './layout/frame'
    export default {
        name: 'layout',
        components: {
            menuList,
            headerBar,
            breadCrumb,
            frame,
        },
    }
</script>