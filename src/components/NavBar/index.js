import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  const NavBarScore = () => {
    if (isGameOver) {
      return null
    }
    return (
      <div className="Scores-Container">
        <p className="Score-Heading">Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <div className="Nav-Container">
      <div className="Logo-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="Main-Heading">Emoji Game</h1>
      </div>
      <div>{NavBarScore()}</div>
    </div>
  )
}

export default NavBar
