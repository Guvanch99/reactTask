import CompArticle from './compArticle'
import { linktext } from '../../../linkdata'
import Card from '../../card'
import './index.scss'
const Comp = () => {
    return (
        <section className='complementory'>
              <CompArticle location='column'/>
              <div className='list'>
                    {linktext.textsSmall.map((text,index)=>{
                        return (
                            <Card key={index} name={text.text}/>
                        )
                    })}     
                 </div>      
        </section>
    )
}

export default Comp
