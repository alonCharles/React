import './topbar.css'
import { Person, Search,Chat,Notifications } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Lonnie's Social Bar</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchBar'>
                <Search className='searchIcon' />
                <input className='searchInput' placeholder='Search for your next best friend!'></input>

            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Home Page</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <Person />
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIconItem'>
                    <Chat />
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbarIconItem'>
                    <Notifications />
                    <span className='topbarIconBadge'>3</span>
                </div>
            </div>
            <img src='/assets/person/1.jpeg' alt='' className='topbarImg' />
        </div>
    </div>
  )
}
