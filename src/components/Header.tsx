import '../styles/Header.css'
import pfp from '../assets/gabeinf.jpg'
import search from '../assets/search.png'
import hamburger from '../assets/hamburger.png'

// Define prop types for TypeScript (safe even if using plain JS)
interface HeaderProps {
  onCategoryChange: (category: string) => void;
}

function Header({ onCategoryChange }: HeaderProps) {
  return (
    <>
      {/* Top header section */}
      <div className='header'>
        <div className="headerContainer">
          <div>
            <img className='pfp' src={pfp} alt="Profile" />
          </div>

          <div className='links'>
            <a href="https://www.instagram.com/gabeinf/">Work</a>
            <a href="https://www.instagram.com/gabeinf/">About</a>
            <a href="https://www.instagram.com/gabeinf/">
              <img src={search} alt="Search" />
            </a>
            <a href="https://www.instagram.com/gabeinf/">
              <img src={hamburger} alt="Menu" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom filter section */}
      <div className='bottomHeader'>
        <div className='sectionOne'>
          <a onClick={() => onCategoryChange('Everything')}>Everything</a> 
          <a onClick={() => onCategoryChange('2D')}>2D</a>
          <a onClick={() => onCategoryChange('3D')}>3D</a>
        </div>

        <div className='sectionTwo'>
          <a onClick={() => onCategoryChange('Motion Graphics')}>Motion Graphics</a>
          <a onClick={() => onCategoryChange('Mixed Media')}>Mixed Media</a>
          <a onClick={() => onCategoryChange('Movie')}>Movie</a>
        </div>
      </div>
    </>
  )
}

export default Header
