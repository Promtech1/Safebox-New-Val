import React from 'react'
import KnowledgeCardGrid from '../components/Education/KnowledgeCardGrid'
import knowledgeCards from '../data/KnowledgeCards'
import LearnMore from '../components/Education/LearnMore'

const Education = () => {
  return (
    <div>
        <LearnMore />
        <KnowledgeCardGrid cards={knowledgeCards} />
    </div>
  )
}

export default Education