https://findmovies-iem9.onrender.com/

Lokalno pokretanje: 
    1. npm install
    2. npm run dev

1. interpolation/one-way binding
   - MoviesView.vue: 17., 18., 19., 20. linija
   - MovieCardComponent.vue: 3. linija
2. two-way binding
   - NameModalComponent.vue: 6. linija
3. methods
   - skoro svaka komponenta, view i pinia store (appStore.js)ima metode
4. computed properties
   - MovieView.vue: 30. i 31. linija
5. barem jedan scoped style
   - svaki style je scoped
6. koristiti barem jedan lifecycle hook
   - App.vue: od 39 do 48. linija
7. routing (više stranica)
   - index.js router definira vise stranica
8. aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
   - /movies je bookmarkable
   - /movie/id je bookmarkable
   - moze im se pristupit bez prolazenja kroz root
9. dinamičko usmjeravanje s 404 stranicom ("catch all")
   - ima (index.js)
10. (barem) dvije komponente => ima
    10.1. komponenta bez stanja, koristiti properties => MovieCardComponent.vue ovisi samo o propovima
    10.2. komponenta sa stanjem => MoviesView.vue ima svoje stanje kao npr. loading, error...
11. barem jedna komponenta mora emitirati barem jedan event
    - NameModalComponent.vue: 34. linija
12. store (Pinia)
    - AppStore.js
13. asinkroni dohvat podataka
    - MoviesView.vue: 60. linija
