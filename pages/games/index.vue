
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
   