import { DATA } from '../../data'

import PlainText from '../plainText'

import './index.scss'

const {textBig}=DATA

const ExtraArticle = () => (
        <article className='complementory-article'>
        <div className='complementory-article__content_column'>
            {textBig.map(({text},index)=>(
            <PlainText key={index} size='big' name={text}/>
            )
            )}
            </div>
         </article>
    )

export default ExtraArticle
