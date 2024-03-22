let textaboutcine = document.querySelector(".textaboutcine");

let newText = new Typewriter(textaboutcine, {});

newText
  .pauseFor(500)
  .changeDelay(20)
  .typeString("Paris 1982,")
  .pauseFor(300)
  .deleteChars(5)
  .typeString(
    "2024, deux étudiants, Ludovic et Nicos, se sont rencontrés lors d'un Bootcamp sur le développement web et mobile. Ils étaient fascinés par l'esthétique et l'ambiance des films des années 80, imprégnés de nostalgie et de créativité. Inspirés par leur passion commune, Nicos et Ludovic ont décidé de réaliser leur rêve en ouvrant un cinéma dédié aux classiques des années 80 au cœur de Paris. Ils ont trouvé un local pittoresque dans le quartier du Marais, qu'ils ont transformé en un cinéma rétro-chic, avec des affiches vintage, des sièges en cuir et une ambiance rétro authentique. Grâce à leur détermination et à leur amour du cinéma, Ludovic et Nicos ont réussi à créer un espace unique où le passé et le présent se rencontrent, offrant aux cinéphiles parisiens une expérience cinématographique immersive et mémorable dans le monde captivant des années 80."
  )

  .pauseFor(1000)
  .start();

//          NICOS   et  LUDO //

let textaboutteam = document.querySelector(".textaboutteam");

let nouveauTex = new Typewriter(textaboutteam, {});

nouveauTex
  .changeDelay(10)
  .typeString(
    "Nicos (à gauche) est un jeune passionné de technologie et de cinéma, originaire de Paris. Il a toujours été fasciné par l'esthétique et l'ambiance des films des années 80. Nicos est un étudiant déterminé et curieux, toujours avide d'apprendre et de relever de nouveaux défis. Inspiré par sa passion pour les films des années 80 et son amour pour la technologie, il a décidé de concrétiser son rêve en ouvrant un cinéma rétro dédié aux classiques de cette époque.<br>"
  )
  .pauseFor(1000)
  .changeDelay(30)
  .typeString(
    "<br> Ludovic (à droite) est un jeune entrepreneur passionné par l'art, la culture et l'innovation. Originaire de Paris, il a toujours été attiré par l'esthétique des films des années 80, qui capturent pour lui l'esprit d'une époque révolue remplie de créativité et d'aventure.Doté d'un sens aigu de l'esthétique et du design, Ludovic a contribué à créer une atmosphère rétro-chic pour le cinéma, avec des affiches vintage, des sièges en cuir et une ambiance authentique des années 80."
  )
  .pauseFor(1000)
  .start();


