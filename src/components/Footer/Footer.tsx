import styles from "./Footer.module.css"

export const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <h3>Play Nice Piano</h3>
            <br />
            {currentYear}
        </footer>
    )
}