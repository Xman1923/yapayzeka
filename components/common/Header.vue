<template>
  <header class="header">
    <h1>Casino Website</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/games">Games</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}
</style>
```

### 4. `components/common/Footer.vue`

```vue
<template>
  <footer class="footer">
    <p>&copy; 2023 Casino Website. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>