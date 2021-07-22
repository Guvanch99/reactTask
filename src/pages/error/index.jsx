import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

const Error = () => {
    let history=useHistory()
    useEffect(() => {    
      setTimeout(() => {
          history.push('/')  
      }, 3000);
    }, [])
    return (
        <div className='error'>
            <h1 className='error__text'>Oops you are wring page!</h1>
        </div>
    )
}

export default Error
