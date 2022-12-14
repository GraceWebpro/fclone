import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import SidebarRow from './SidebarRow'

const Sidebar = ({user}) => {
    const url = '/' + user.displayName + '/' + user.uid;

  return (
    <div className='sidebar'>
        <Link to={`/${user?.displayName}/${user?.uid}`}>
            <SidebarRow avatar ImageLink={user?.photoURL} title={user?.displayName} />
        </Link>
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png" title="COVID-19 Information Centre" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" title="Find Friends" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" title="Groups" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" title="Marketplace" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" title="Videos" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" title="Events" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png" title="Memories" />
        <SidebarRow ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" title="Saved" />
        <SidebarRow dropdown ImageLink="null" title="See more" />
        <div class="hr" />
        <div class="policies">
            <p>Privacy</p>
            <p class="dot">·</p>
            <p>Terms</p>
            <p class="dot">·</p>
            <p>Advertising</p>
            <p class="dot">·</p>
            <p>Ad choices</p>
            <i class="ads" />
            <p class="dot">·</p>
            <p>Cookies</p>
            <p class="dot">·</p>
            <p>More</p>
            <p class="dot">·</p>
            <p>Facebook © 2020</p>
        </div>
    </div>
  )
}

export default Sidebar