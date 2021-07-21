import { linktext } from '../../../../linkdata'
import PlainText from '../../../plainText'
import './index.scss'
const CompArticle = ({location}) => {
    return (
        <article className="complementory-article">
        <div className={`complementory-article__content_${location}`}>
            {linktext.textBig.map((text,index)=>{
                return(
                  <PlainText key={index} size='big' name={text.text}/>
                )
            })}
            </div>
    </article>
    )
}
export default CompArticle
