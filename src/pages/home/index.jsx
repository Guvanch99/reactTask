import {Header,Footer,Nav} from '../../layout'
import {Main,Comp} from '../../components'
import './index.scss'
const Home = () => {
    return (
     <>
     <Header/>
     <div className='divider'>
     <Nav/>
        <div>
        <Main/>
        <Comp/>
        </div>
        </div>
     <Footer/>
     </>

    )
}

export default Home
