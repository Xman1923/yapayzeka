Aşağıda, belirtilen dizin yapısına göre basit bir tasarım ile temel Nuxt.js bileşenleri ve sayfalarının kodlarını bulabilirsiniz. Bu örnek, temel bir casino web sitesi için başlangıç noktası oluşturur.

### 1. `nuxt.config.js`

```javascript
export default {
  head: {
    title: 'Casino Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Online Casino Website' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/styles/main.css'],
  plugins: ['~/plugins/axios.js', '~/plugins/vuetify.js'],
  buildModules: [],
  modules: [],
}
```

### 2. `assets/styles/main.css`

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.header, .footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
```

### 3. `components/common/Header.vue`

```vue
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
```

### 5. `layouts/default.vue`

```vue
<template>
  <div>
    <Header />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
```

### 6. `pages/index.vue`

```vue
<template>
  <div>
    <h2>Welcome to our Casino!</h2>
    <p>Try your luck with our exciting games!</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
```

### 7. `pages/games/index.vue`

```vue
<template>
  <div>
    <h2>Our Games</h2>
    <ul>
      <li><nuxt-link to="/games/slots">Slots</nuxt-link></li>
      <li><nuxt-link to="/games/roulette">Roulette</nuxt-link></li>
      <li><nuxt-link to="/games/blackjack">Blackjack</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GamesPage'
}
</script>
```

### 8. `pages/games/slots.vue`

```vue
<template>
  <div>
    <h2>Slots Game</h2>
    <p>Spin the reels and win!</p>
  </div>
</template>

<script>
export default {
  name: 'SlotsPage'
}
</script>
```

### 9. `pages/login.vue`

```vue
<template>
  <div>
    <h2>Login</h2>
    <form>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
```

### 10. `pages/signup.vue`

```vue
<template>
  <div>
    <h2>Sign Up</h2>
    <form>
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupPage'
}
</script>
```

Bu temel şablon ve bileşenler, basit bir casino web sitesi oluşturmanıza yardımcı olacaktır. Geliştirme aşamasında her bileşeni ve sayfayı daha fazla özelleştirerek işlevsellik katabilirsiniz.