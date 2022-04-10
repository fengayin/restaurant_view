<template>
  <nav>
    <ul> 
      <li>
  			<router-link to="Ordering">点菜</router-link>
      </li>
      <li>
        	<router-link to="Order" exact>订单详细</router-link>
      </li>
      <li>
        <router-link to="/3" exact>后厨制作</router-link>
      </li>
    </ul> 
  </nav>
</template>
<script>
export default {
  name: "Navbar"
}
</script>

<style lang="css">
ul{
	list-style-type: none;/*消除黑点*/
  width: 100%;
}
li{
	display: inline-block;
  padding: 20px;
}
a{
	color: #fff;/*设置字体颜色*/
	text-decoration: none;/*消除下划线*/
	padding: 20px 200px 20px 200px;
	border-radius: 5px;
}
nav{
  display: flex;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
}
/*选中则发生一些变化*/
.router-link-active{
	background: rgba(117, 110, 110, 0.8);
	color: #444;
}
</style>
