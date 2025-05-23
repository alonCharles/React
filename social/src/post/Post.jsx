import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post() {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src='/assets/person/1.jpeg' alt=''/>
                    <span className='postUsername'>Ya Boy</span>
                    <span className='postDate'> 5 mins ago</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>First Post!</span>
                <img className='postImg' src='/assets/post/1.jpeg' alt='' />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon'src='/assets/like.png' alt='' />
                    <img className='heartIcon' src='/assets/heart.png' alt='' />
                    <span className='postLikeCounter'>32 people like it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>9 comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
