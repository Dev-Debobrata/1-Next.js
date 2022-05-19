import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next</span> Page
      </h1>
      <p className={headerStyles.description}>
        This is my first next page, here is some posts that I fetched
      </p>
    </div>
  )
}

export default Header