import PlainText from '../../../plainText'
import './index.scss'
const MainArticle = ({location,count='one'}) => {
    return (     
        <article className={`main-article main-article_${location}`}>  
            {
            count==='one'? <PlainText size='small' name='SHOW OFF! We are coming Lets Go' />:(
            <> 
            <PlainText size='small' name='SHOW OFF We are coming Lets Go' /> 
            <PlainText size='small' name='SHOW OFF! We are coming Lets Go' />
             </>)          
        }
        </article>
    )
}

export default MainArticle
