const WinOrLoseCard = props => {
  const {score, emojisList, playAgain} = props

  const win = () => {
    if (score === '12') {
      return (
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/12</p>
          <button onClick={playAgain} type="button">
            Play Again
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      )
    }
    return (
      <div>
        <h1>Your Lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button onClick={playAgain} type="button">
          Play Again
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    )
  }

  return <div>{win()}</div>
}

export default WinOrLoseCard
