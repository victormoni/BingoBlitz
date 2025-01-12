import styles from './Header.module.css'
import billarBall from '../assets/icons8-bola-de-bilhar-64.png'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={billarBall} alt="Bingo" />
                <h2>Bingo</h2>
            </div>
            <button>Resetar Jogo</button>
        </header>
    )
}