import { Link } from 'react-router-dom'
import '../Styles/Call.css'
import profileIcon from '../assets/images/proficon.webp'
import { useState } from 'react'

const Call = () => {
  const [volume, setVolume] = useState(true)
  const [mic, setMic] = useState(true)
  const [video, setVideo] = useState(false)


  return (
    <div className='call'>
      <div className="header">
        <div className="central-header">
          <Link to="/chat">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </Link>
        </div>
      </div>
      <div className="call-info">
        <h1>Helena Hills</h1>
        <p>Calling +49 912 192 9129</p>
        <img src={profileIcon} />
      </div>
      <div className='call-buttons'>
        <ion-icon name={`volume${volume ? '-mute' : '-high'}-outline`} onClick={() => setVolume(!volume)}></ion-icon>
        <ion-icon name={`mic${mic ? '-off' : ''}-outline`} onClick={() => setMic(!mic)}></ion-icon>
        <ion-icon name={`videocam${video ? '-off' : ''}-outline`} onClick={() => setVideo(!video)}></ion-icon>
        <ion-icon name="call-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Call