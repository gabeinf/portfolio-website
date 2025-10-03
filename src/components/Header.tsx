import '../styles/Header.css'
import pfp from '../assets/gabeinf.jpg'
import search from '../assets/search.png'
import hamburger from '../assets/hamburger.png'

function Header() {
  
  return (
    <>
    <div className='header'>
    <div className="headerContainer">
    <div>
      <img className='pfp' src={pfp} alt="" />
    </div>
          <div className='links'>
            <a href="https://www.instagram.com/gabeinf/">Work</a>
            <a href="https://www.instagram.com/gabeinf/">About</a>
            <a href="https://www.instagram.com/gabeinf/"><img src={search} alt="" /></a>
            <a href="https://www.instagram.com/gabeinf/"><img src={hamburger} alt="" /></a>
          </div>
          </div>
      </div>

  <div className='bottomHeader'>
    
    <div className='sectionOne'>
      <a>Everything</a> 
      <a>2D</a>
      <a>3D</a>
    </div>

     <div className='sectionTwo'>
      <a>Motion Graphics</a>
      <a>Titles</a>
      <a>Event</a>
    </div>

     <div className='sectionThree'>
      <a>Character</a>
      <a>Movie</a>
      <a>Experience</a>
    </div>

      </div>
      </>

  )
}

export default Header