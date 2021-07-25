import {MainArticle} from '../../components/'

import './index.scss'

const MainSection = () => (
        <section className='main'>
              <MainArticle location='center' />
              <MainArticle location='space' count='two'/>
        </section>
    
)

export default MainSection
