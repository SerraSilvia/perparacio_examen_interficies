# perparacio_examen_interficies

## Com funciona React:
- En `App.jsx`: s'importen els components creats, s'organitzen i es combinen. Les dades passades de l'App als components s'anomenen **props**.
- En `index.js`: React agafa el component `App` i el renderitza dins d’una etiqueta del DOM, convertint-lo en HTML real.
- En `index.html`: Només té un contenidor buit (`<div id="root">`) i no sap res de React. React s'instal·la dins d’aquest contenidor.

### Estructura de la miniweb creada:

index.html     →   té un <div id="root">
      ↑
index.js       →   agafa App i la posa dins "root"
      ↑
App.jsx        →   importa i organitza els components
↑
components/    → Conté tots els components:
├─ Navbar.jsx → barra de navegació amb botons per canviar de pàgina
├─ Home.jsx → pàgina principal amb benvinguda
├─ Pastissos.jsx → mostra els pastissos disponibles amb nom, imatge i preu
├─ Formulari.jsx → formulari de registre amb camps de nom, cognoms, email, telèfon i contrasenya
├─ FormulariPastis.jsx → formulari per seleccionar un pastel i veure el preu
└─ Footer.jsx → peu de pàgina que es mostra sempre


### Com funciona la navegació:
- La navegació es fa amb **botons** i un estat `pagina` a `App.jsx`.
- El `Navbar` és visible a totes les pàgines i canvia el contingut que es mostra.
- Exemple:  

```javascript
<button onClick={() => setPagina("home")}>Home</button>
```

Cada component es mostra segons el valor de pagina:

{pagina === "home" && <Home />}
{pagina === "pastissos" && <Pastissos />}
{pagina === "formulari" && <Formulari />}
{pagina === "formulariPastis" && <FormulariPastis />}

### Característiques dels components:

- Pastissos.jsx:

Mostra una llista de pastissos amb nom, imatge i preu.

Els pastissos es mostren en horitzontal amb Flexbox.

Opcionalment pot tenir un botó "Tornar a Home" utilitzant setPagina.

- Formulari.jsx:

Formulari de registre amb validació bàsica.

Mostra missatges d’error si algun camp està buit.

- FormulariPastis.jsx:

Permet seleccionar un pastel d'una llista.

Mostra automàticament el preu associat al pastel seleccionat.

Guarda els enviaments i mostra alert amb la selecció.

- Navbar.jsx:

Sempre visible.

Botons per canviar de pàgina amb setPagina.

- Footer.jsx:

Sempre visible a baix de la pàgina.

### Preparació:

#### Crear projecte amb Vite
npm create vite@latest nom_projecte

#### Entrar a la carpeta del projecte
cd nom_projecte

#### Instal·lar dependències
npm i

#### Executar servidor de desenvolupament
npm run dev

#### Si es vol usar react-router (opcional)
npm install react-router-dom

### Notes:

La web és responsive: els pastissos baixen de fila automàticament si la pantalla és estreta.

No s’utilitza react-router-dom per la navegació; tot es gestiona amb useState.

Els formularis guarden les dades en estat local i mostren alertes per confirmar l'enviament.