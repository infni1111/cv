import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import photoProfile from './assets/tof.png'

import { BsArrowRightCircle } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCogs } from "react-icons/fa"; // ou FaTools
import { FaTools } from "react-icons/fa";
import { FaRocket, FaBolt, FaServer, FaNodeJs } from "react-icons/fa";
import { FaLanguage, FaComments, FaCommentDots } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { MdTableChart } from "react-icons/md";
import { FaTable } from "react-icons/fa";


import './App.css'


//blue: #0a233f, rgba(10,35,63,255)
//rose:#e9a596,rgba(233,165,150,255)
//


const iconeObject ={
  "competence":FaTools,
  "postgree":SiPostgresql,
  "gmail":MdEmail,
  "phone":FaPhoneAlt,

  "just":AiOutlineCheckCircle,
  "name":FaUserCircle,
  "hand":FaHandPointRight,
  "formation":FaGraduationCap,
  "react":FaReact,
  "fastify":FaRocket,
   "langue":FaComments,
  "office":MdTableChart,
  "experience":FaMedal,
  }




const Line_title = ({title,text,className_title,className})=>{

  return(
        <div className = {className}>

            <p className = {className_title}>{title}</p>
            <p>{text}</p>

        </div>


    )



}

const Ligne = ({title,className_title,text,icon_name,className,icon_size,icon_color})=>{

  const Icone = iconeObject[icon_name]

  return(

      <div className = {className}>
          < Icone size={icon_size} color={icon_color} className = "icon" />

          <p className = {className_title}>{title}</p>

          <div>

            {text}

          </div>


      </div>


    )

}

const Entete = ()=>{

  return(

    <div className = "entete">

      <img className = "div_img" src = {photoProfile} />

      <div className = "div_presentation">
       

       <Ligne text = "Afriying  Tchenem,  25ans" icon_name = "name" className = "row afriying" icon_size={1} icon_color="blue" />
        <Ligne text = "Developpeur  fullstact" icon_name = "gmail" className = "dev row" icon_size={1} icon_color="blue" />
             <Ligne text = "tchenem5@gmail.com" icon_name = "gmail" className = "gmail row" icon_size={1} icon_color="blue" />
    
           <Ligne text = "690223811" icon_name = "phone" className = "num row" icon_size={1} icon_color="blue" />
      
      </div>




    </div>


    )
}



const Titre = ({text,className})=>{

  return(

    <p className = {className}>

      {text}
    </p>

    )
}



const texte_profile = "Passionné par les systèmes Linux, j’aime concevoir et maintenir des serveurs stables, sécurisés et performants. J’interviens avec réactivité et méthode, en veillant toujours à l’optimisation, à la prévention des pannes et à la fiabilité à long terme. Travailler sur des environnements techniques exigeants me motive chaque jour."




const Body = ()=>{
  return(

    <div className ="div_body">

        <div className = "div_profile">
          

            <Ligne text = "Profile" icon_name = "name" className = "profile row" icon_size={30} icon_color="red" />
            <p className ="text_profile">
              {texte_profile}

            </p>


        </div>


        <div className = "div_formation">
          

            <Ligne text = "Formation Initial" icon_name = "formation" className = "formation row" icon_size={40} icon_color="red" />
            
            <div className = "div_date">

                 <div className = "row">

                  <Ligne text = "2017-2018 : " icon_name = "hand" className = "date row" icon_size={12} icon_color="red" />
                  <Titre text = "Etudiant à l'université de yaoundé 1, filière physique" className = "text_formation" />
                 </div>

                 <div className = "row">

                  <Ligne text = "2018-2019 : " icon_name = "hand" className = "date row" icon_size={12} icon_color="red" />
                  <Titre text = "Etudiant à l'université de yaoundé 1, filière informatique" className = "text_formation" />
                 </div>

                 <div className = "row">

                  <Ligne text = "2019-2022 : " icon_name = "hand" className = "date row" icon_size={12} icon_color="red" />
                  <Titre text = "Etudiant à l'ENSTP " className = "text_formation" />
                 </div>

         




            </div>

        </div>


         <div className = "Compétences">

                  <Ligne text = "Compétences: " icon_name = "competence" className = "competence row" icon_size={30} icon_color="red" />
                   <Ligne text = "React: " icon_name = "react" className = "react row" icon_size={20} icon_color="red" />
                     <Ligne text = "Maitrise du JSX ,Hooks ,Props ," icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                    <Ligne text = "Architecture basée sur des composants réutilisables " icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Context API pour le state global" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                  <Ligne text = "React Router (gestion des routes SPA)" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Appels API avec fetch, axios" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Intégration avec Firebase, Supabase ou REST/GraphQL" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "WebSockets avec socket.io-client" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                  
                   <Ligne text = " Déploiement sur Vercel, Netlify, Firebase Hosting, Railway" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                  



                   <Ligne text = "Fastify : " icon_name = "fastify" className = "react row" icon_size={20} icon_color="red" />
                     <Ligne text = "Création de routes RESTful (GET, POST, PUT, DELETE)" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                    <Ligne text = "Intégration PostgreSQL via @fastify/postgres" icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Gestion CORS, Helmet, compression, multipart, static files " icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Authentification via JWT ou sessions (@fastify/jwt, @fastify/session)  " icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
                   <Ligne text = "Déploiement sur Railway, Render, Fly.io ou VPS (PM2 ou Docker) " icon_name = "hand" className = "competence_react row" icon_size={15} icon_color="red" />
               



                    <Ligne text = "PostgreeSql : " icon_name = "postgree" className = "postgree row" icon_size={20} icon_color="red" />
                     <Ligne text = "Architecture de données scalable & maintenable" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="red" />
                    
                
                    <Ligne text = " Gestion des rôles et des permissions  " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="red" />
               
               

                    <Ligne text = "Politique de sauvegarde/restauration automatisée " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="red" />
               
                    <Ligne text = "Déploiement avec Docker / PostgreSQL cloud (Railway, Render, Neon) " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="red" />
                    






                    <Ligne text = "Suite Office : " icon_name = "office" className = "office row" icon_size={20} icon_color="red" />
                     <Ligne title="Word : " className_title="annee" text = "Rédaction de documents professionnels et rapports structurés" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                   
                  <Ligne title="Excel : " className_title="annee" text = "Création des Tableaux croisés dynamiques & tâches automatisées" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />                  
                    <Ligne title="PowerPoint : " className_title="annee" text = "Création Graphiques professionnels pour présentations" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                 
                    

                    <Ligne text = "Autres " icon_name = "competence" className = "office row" icon_size={20} icon_color="red" />
                     <Ligne title="Git : " className_title="annee" text = "Versionnage de projets, gestion des branches, résolution de conflits" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                   
                

                  <Ligne title="Docker : " className_title="annee" text = "Création d’images, gestion de conteneurs, réseaux personnalisés" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />                  
                    <Ligne title="Bash : " className_title="annee" text = "Automatisation par scripts shell/Python" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                   <Ligne title="Npm : " className_title="annee" text = "Gestion de paquets & scripts sur mesure" icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
               
               
                 

                  <Ligne text = "Experience " icon_name = "experience" className = "office row" icon_size={20} icon_color="red" />

                    <Ligne title="2024 – 2025 : " className_title="annee" text = "Développeur Frontend chez Indomita (entreprise tech) : " icon_name = "hand"  className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                    <Ligne  text = "Conception d’interfaces React modernes, intégration d’API REST " icon_name = "hand" className = "competence_postgree row pad" icon_size={1} icon_color="darkblue" />                  
                    <Ligne title="2024 – 2025 : " className_title="annee" text = " Secrétaire administrative à l’École de Magage " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                    <Ligne  text = "Gestion digitale des archives & registres" icon_name = "hand" className = "competence_postgree row pad" icon_size={1} icon_color="darkblue" />                  
                    <Ligne title="2024 – 2025 : " className_title="annee" text = "2023 – 2024 : Stagiaire IT à la station Radio Labar de Magage " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                   <Ligne   text = "Maintien des serveurs internes et configuration réseau " icon_name = "hand" className = "competence_postgree row pad " icon_size={1} icon_color="darkblue" />
               
                 


                 <Ligne text = "Langue " className_title="langue" className = "div_langue row" icon_name = "langue" icon_size ={20} />
                  
                   <Ligne title="Français " className_title="langue" text = "Maîtrise complète " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                  <Ligne title="Englais : " className_title="langue" text = "Maîtrise professionnelle " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
                 <Ligne title="Fulbe: " className_title="langue" text = "Maîtrise complète " icon_name = "hand" className = "competence_postgree row" icon_size={15} icon_color="darkblue" />
               















         </div> 



    </div>

    )
}


function App() {

  return (

   <div className = "div_app">

     <Entete />

     <Body className = "body" />
      
   </div>
  )
}

export default App
