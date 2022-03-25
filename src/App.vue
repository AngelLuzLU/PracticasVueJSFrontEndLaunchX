<template>
  <nav>
    <div><img src="./assets/Logo_horizontal.png" alt="Logo Intergalactic Bakery"></div>
    <div class="routerLinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/pastelero">Pastelero</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  
}
nav img{
  height: 64px;
}
.routerLinks{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 20px;
  font-family: 'Roboto';
  font-size: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
