import {ExtraArticle} from '../../components/'

import { DATA } from '../../data'

import Card from '../../components/card'

import './index.scss'

const {textSmall}=DATA

const ExtraSection = () => (
  <section className='complementory'>
    <ExtraArticle />
  <div className='list'>
      {textSmall.map(({text},index)=><Card key={index} name={text}/> )}     
  </div>      
  </section>
   )
export default ExtraSection
