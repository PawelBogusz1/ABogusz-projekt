export default function Navbar() {
    return(
        <nav className="Navigation">
            <a href="/">*insert logo*</a>
            <div className="NavMenu">
                <ul>
                    <li>
                        <a href="/">Strona Główna</a>
                    </li>
                    <li>
                        <a href="/Onas">O nas</a>
                    </li>
                    <li>
                        <a href="/Opinie">Opinie</a>
                    </li>
                    <li>
                        <a href="Kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}