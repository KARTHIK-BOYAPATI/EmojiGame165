import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojis} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    onClickEmojis(id)
  }

  return (
    <li className="List-item-style">
      <button type="button" className="list-type-images" onClick={onClickEmoji}>
        <img className="emojis-logo" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
