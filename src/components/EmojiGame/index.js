/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    clickedEmojis: [],
    isGameOver: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmojis = id => {
    const {clickedEmojis, topScore, isGameOver} = this.state
    const score = clickedEmojis.length

    if (clickedEmojis.includes(id)) {
      let newTopScore = topScore
      if (score > topScore) {
        newTopScore = score
      }
      this.setState({
        topScore: newTopScore,
        isGameOver: true,
      })
    } else {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  playAgain = () => {
    this.setState({
      clickedEmojis: [],
      isGameOver: false,
    })
  }

  renderGameCard = () => {
    const shuffledEmojis = this.shuffledEmojisList()
    return (
      <div className="emojis-div-container">
        <ul className="emojis-list-container">
          {shuffledEmojis.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              onClickEmojis={this.onClickEmojis}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderResultPage = () => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    return (
      <div>
        <WinOrLoseCard
          playAgain={this.playAgain}
          score={clickedEmojis.length}
          emojisList={emojisList}
        />
      </div>
    )
  }

  render() {
    const {clickedEmojis, topScore, isGameOver} = this.state

    return (
      <div className="main-container">
        <NavBar
          score={clickedEmojis.length}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        {isGameOver ? this.renderResultPage() : this.renderGameCard()}
      </div>
    )
  }
}

export default EmojiGame
