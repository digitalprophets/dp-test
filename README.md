# dp-test
Test project for "Hakaton"

Da biste pokrenuli potrebno je da instalirate

- Node.js

- Vue
```
  npm i -g @vue/cli
```
- Nodemon
```
  npm i -g nodemon
```
Pri svakom pull, potrebno je izvrsiti
```
  npm i
```
i u klijentu i u serveru. Ovo ce skinuti na lokalnu kopiju projekta sve dodate node module.

Server se pokrece sa
```
  nodemon index.js
```
Klijent se pokrece sa
```
  npm run serve
```
Oba dela nije potrebno pokretati ponovo posle menjanja nekog fajla, projekat ce se automatski osveziti.

Posle svih malo vecih promena treba uraditi commit. Potrebno je pokrenuti sledece komande
```
  git add .
  git commit -m "Poruka za commit"
  git push
```
Jos jedna bitna komanda je za povlacenje podataka sa github
```
  git pull
```
