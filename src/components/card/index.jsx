import './index.scss'
const Card = ({name}) => {
    return (
        <div className="list">
        <article className="list-article">
            <div className="list-article__top">
                <h1 className="text_container-small">
                   {name}
                </h1>
            </div>
        </article>
    </div>
    )
}

export default Card
