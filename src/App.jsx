import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import photoProfile from './assets/tof.png'
import './App.css'


//blue: #0a233f, rgba(10,35,63,255)
//rose:#e9a596,rgba(233,165,150,255)
//


const Entete = ()=>{

  return(

    <div className = "entete">

      <img className = "div_img" src = {photoProfile} />

      <div className = "div_presentation">
       

        <p className="afriying margintop">
            <span className = "red">Nom : </span> Afriying Tchenem
        </p>

        <p className = "afriying">
          <span className = "red">Age : </span>  : 25ans
        </p>

    

         <p className ="afriying">
            <span className = "red">Mobile : </span>  690223811
        </p>

         <p className ="afriying">
           <span className = "red">Email : </span>  tchenem5@gmail.com
        </p>





      </div>




    </div>


    )
}



const Text = ({text})=>{
  return(

    <p className = "text">

      {text}
    </p>

    )
}



const texte_profile = "Passionné par les systèmes Linux, j’aime concevoir et maintenir des serveurs stables, sécurisés et performants. J’interviens avec réactivité et méthode, en veillant toujours à l’optimisation, à la prévention des pannes et à la fiabilité à long terme. Travailler sur des environnements techniques exigeants me motive chaque jour."
const Body = ()=>{
  return(
    <div className = "body">

     <ul className ="ul_first">
        <li className = "titre">Profile</li>
          <div className = "container">
            <Text text= {texte_profile} />
          </div>
        
        <li className = "titre">Formation initiale</li>
          <div className = "container" >

            <ul className = "ul_formation formation">
                <li>2019-2022 : <span className = "special">ENSTP de yaoundé </span></li>
                <li>2018-2019 : <span className = "special">UY1 filière informatique </span></li>
                <li>2015-2016 : <span className = "special">BACC C au lycée de Maroua Domayo </span></li>
      
            </ul>
          </div>
        <li className = "titre">Compétenses</li>

          <div className ="container" >
            <ul className = "ul_competence">
                <li className ="system">systeme d'exploitation</li>

                     <ul className = "ul_system ul_formation top">
                          
                          <li className ="linux">linux</li>
                            <ul className = "ul_linux">
                              <li>Installation sur machine physique ou virtuelle</li>
                              <li>Utilisation des outils de pentest (nmap, hydra, metasploit)</li>
                              <li>Automatisation des tâches avec Bash</li>
                              <li>Clonage de disques / partitions (dd, gddrescue)</li>
                              <li>Configuration de VPN et de tunnels chiffrés (OpenVPN)</li>

                            </ul>
                          <li className="linux">Window</li>
                            <ul className = "ul_window">
                              <li>Installation et configuration initiale du système</li>
                              <li>Gestion des partitions et formats (NTFS, exFAT)</li>
                              <li>Gestion des comptes utilisateurs et des droits</li>
                              <li>Sécurisation avec BitLocker, Defender, et UAC</li>
                              <li>Gestion des disques (Disk Management, Diskpart)</li>



                            </ul>
                          <li className ="linux">debian</li>
                            <ul className ="ul_debian">
                              <li>Installation minimale via netinstall</li>
                              <li>Configuration avancée d’APT et des dépôts</li>
                              <li>Gestion fine des services via systemctl</li>
                              <li>Paramétrage statique IP, DNS, passerelles</li>
                              <li>Déploiement LAMP/LEMP (Apache, MySQL, PHP / Nginx)</li>
    
                              <li>Configuration SSH sécurisée (fail2ban, clés RSA)</li>
                              <li>Création de scripts shell pour la maintenance</li>
                              <li>Utilisation de Docker et création de conteneurs</li>

                            </ul>
      
                     </ul>
                <li className = "top system">developpement web/mobile</li>
                  <ul className="ul_dev_web">
                    <li>langage de programmation / framework</li>
                      <ul className = "ul_langage">
                        <li>javascript, html, css, python, php, sql, kotlin</li>
                        <li>react, fastify, flask, ralavel, postgreeSql, react-native</li>


                      </ul>

                  </ul>
          
                <li className = "top system linux">Maintenance</li>
                  <ul className = "ul_maintenance">
                    <li>Diagnostic matériel : <span className ="special_maintenance">POST, test PSU, MemTest86, monitoring BIOS</span></li>
                    <li>Assemblage/Upgrade : <span className ="special_maintenance">RAM, CPU, SSD, alimentation, câblage propre </span></li>
                    <li> Entretien : <span className ="special_maintenance">dépoussiérage, pâte thermique, tests de stabilité </span></li>
                    <li>Réseau physique : <span className ="special_maintenance">cartes réseau, connectique, blindage, test RJ45</span></li>


                  </ul>
      
            </ul>

          </div>
        <li className = "titre">Expériences Professionnelle</li>
          <ul>
              <li className="secretaire red_secretaire">Secrétaire principale – Lycée de Maga (2022–2023)</li>
                <ul className = "ul_secretaire">
                  <li>Rédaction de courriers administratifs</li>
                   <li>Classement et archivage des documents</li>
                  <li>Mise à jour de bases de données scolaires</li>
                  <li>Préparation logistique des examens et concours</li>
                  <li>Utilisation d’outils bureautiques (Word, Excel, etc.)</li>

                </ul>
              <li className ="technicien red_secretaire">Technicien Systèmes et Réseaux</li>
                <ul className = "ul_technicien">
                  <li>Installation de systèmes d’exploitation (Debian, Kali, Windows Server)</li>
                  <li>Configuration d’équipements actifs (switchs, routeurs)</li>
                   <li>Installation et alignement d’antennes Starlink</li>
                  <li>Maintenance préventive des serveurs</li>
                  

                </ul>

          </ul>
        <li className = "titre">Langues</li>
          <ul className ="ul_langue">
            <li>Français : 90%</li>
            <li>Anglais : 60%</li>
            <li>Fulbé : 80%</li>
            <li>Musgum : 60%</li>


          </ul>
        <li className = "titre">Centres d'intéret</li>
          <ul className ="ul_interet">
            <li>Basket</li>
            <li>Mangas</li>
            <li>Hacking</li>


          </ul>


     </ul>




    </div>

    )
}

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className = "div_app">

     <Entete />
      

     <Body />
   


   </div>
  )
}

export default App
