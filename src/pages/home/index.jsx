import {Card,MainArticle,CompArticle} from '../../components'
import {Header,Footer,Nav} from '../../layout'
import { linktext } from '../../linkdata'
import './index.scss'
const Home = () => {
    return (
     <>
     <Header/>
     <div className='divider'>
     <Nav/>
            <section className="main">
                    <MainArticle location='center'/>
                    <MainArticle location='space'/>
            </section>
            <section className="complementory">
                    <CompArticle location='column'/>
                    {linktext.textsSmall.map((text,index)=>{
                        return (
                            <Card key={index} name={text.text}/>
                        )
                    })}           
           </section>
           </div>
     <Footer/>
     </>

    )
}

export default Home
