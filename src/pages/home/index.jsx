import {Header,Footer,Nav,MainSection,ExtraSection} from '../../layout'

import './index.scss'

const Home = () => {
    return (
     <>
     <Header/>
     <div className='divider'>
     <Nav/>
        <div>
        <MainSection/>
        <ExtraSection/>
        </div>
        </div>
     <Footer/>
     </>

    )
}

export default Home
