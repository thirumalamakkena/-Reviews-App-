// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  getInfo = reviewList => {
    const {id} = this.state
    return reviewList[id]
  }

  incrementState = () => {
    const {id} = this.state
    if (id !== 3) this.setState(prevState => ({id: prevState.id + 1}))
  }

  decrementState = () => {
    const {id} = this.state
    if (id !== 0) this.setState(prevState => ({id: prevState.id - 1}))
  }

  render() {
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = this.getInfo(
      reviewsList,
    )

    return (
      <div className="app-container">
        <button
          type="button"
          data-testid="leftArrow"
          className="arrow-icon"
          onClick={this.decrementState}
        >
          <img
            alt="left arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          />
        </button>

        <div className="profile-container">
          <h1 className="review-heading">Reviews</h1>
          <>
            <img className="user-profile-img" alt="username" src={imgUrl} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </>
        </div>
        <button
          type="button"
          data-testid="rightArrow"
          onClick={this.incrementState}
          className="arrow-icon"
        >
          <img
            alt="right arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
