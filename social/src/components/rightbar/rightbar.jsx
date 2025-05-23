import './rightbar.css'

export default function rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt=''/>
          <span className='birthdayText'>
           <b>Deebo</b>  and <b>3 other friends</b>  have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt=''/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Denzel Washington </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
