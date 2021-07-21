import MainArticle from './mainArticle'
import './index.scss'
const Main = () => {
    return (
        <section className='main'>
              <MainArticle location='center' />
              <MainArticle location='space' count='two'/>
        </section>
    )
}

export default Main
