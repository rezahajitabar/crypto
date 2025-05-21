import styles from '../layouts/Layout.module.css';

function Layout({children}) {
  return (
    <div>
        <header className={styles.head}>
            <h1>Crypto App</h1>
            <p>
                <a href="https://botostart.ir">Botostart</a> || React.js Full Course
             </p>
        </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Reza With ❤</p>
      </footer>
    </div>
  )
}

export default Layout
