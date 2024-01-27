import "./navbar.css" 

export default function Navbar() {
    return(
        <div class="section-background">
        <div class="Menu-container">
           <img src="./public/library-icon.png" class="icon"/>
                           
                <ul class ="Menu-header">
                    <li>
                        <a href="/" class="Menu-header-nav">Strona Główna</a>
                    </li>
                    <li>
                        <a href="/Onas.jsx" class="Menu-header-nav">O nas</a>
                    </li>
                    <li>
                        <a href="/Opinie" class="Menu-header-nav">Opinie</a>
                    </li>
                    <li>
                        <a href="Kontakt" class="Menu-header-nav">Kontakt</a>
                    </li>
                            
                    <li>
                    <img src="./public/login.png" class="Menu-header-nav-open-btn"/>
                    
                    </li>
                </ul>
            </div>    
            </div>
     
    )
}