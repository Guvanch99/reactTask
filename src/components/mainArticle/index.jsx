import { PlainText } from "../"
import './index.scss'
const MainArticle = ({location}) => {
    return (     
        <article className="main-article">
        <div className={`main-article__content_${location}`}>
        <PlainText size='small' name='SHOW OFF! We are coming Lets Go' />
        </div>
        </article>

    )
}

export default MainArticle
