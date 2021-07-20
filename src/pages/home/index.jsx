import {Header,Footer,Nav,Card,MainArticle,CompArticle} from '../../components'
import { linktext } from '../../linkdata'
const Home = () => {
    return (
     <>
     <Header/>
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
     <Footer/>
     </>

    )
}

export default Home
