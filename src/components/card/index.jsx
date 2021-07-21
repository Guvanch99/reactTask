import PlainText from '../plainText'
import './index.scss'
const Card = ({name}) => {
    return (
        <article className="list-article">
            <div className={name}>
            <PlainText size='middle' name={name}/>
            </div>
        </article>
    )
}
export default Card
