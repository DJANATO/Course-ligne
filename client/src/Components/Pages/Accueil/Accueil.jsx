import React from 'react'
import classe from './Accueil.module.css'

const Accueil = () => {
  return (
    <main>
      <div className={classe.main}>
      <div id={classe.titre} className={classe.slide}>
        <h1>BIENVENUE SUR VOTRE PLATEFORME DE COURS EN LIGNE</h1>
      </div>
      
      <div id={classe.titre1} className={classe.slide}>
        <div className={classe.title}>
          {/* <!-- <h1>Tritre 1</h1> --> */}
          <p>Nous sommes fiers de vous proposer une expérience d'apprentissage en ligne de qualité, 
            adaptée à tous les niveaux et à tous les besoins. Que vous cherchiez à approfondir vos connaissances
             dans un domaine spécifique, à apprendre de nouvelles compétences pour votre carrière, ou simplement
              à découvrir de nouveaux sujets passionnants, nous avons tout ce dont vous avez besoin pour réussir.
            </p>
        </div>
      </div>

      <div id={classe.titre2} className={classe.slide}>
        <div className={classe.title}>
        {/*  <!--  <h1>Titre 2</h1> --> */}
          <p>Grâce à notre plateforme, vous pouvez accéder à une large gamme de cours en ligne, 
            dispensés par des experts reconnus dans leur domaine. Nos cours sont conçus pour être 
            interactifs et engageants, vous permettant de progresser à votre rythme tout en bénéficiant 
            d'un soutien personnalisé de la part de nos enseignants. Nous sommes convaincus que l'apprentissage 
            en ligne est l'avenir de l'éducation, et nous sommes heureux de vous offrir la possibilité de vous former 
            et de vous développer grâce à notre plateforme de cours en ligne.
          </p>
        </div>
      </div>
      </div>
      
      
    </main>
  )
}

export default Accueil