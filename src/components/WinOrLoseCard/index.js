import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageURL = isWon ? winImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const ScoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{ScoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          className="winOrLose-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="winOrLose-image-container">
        <img className="win-or-lose-image" src={imageURL} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
