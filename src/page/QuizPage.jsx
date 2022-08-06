import React from 'react'
import QuizPageHeader from './../components/Quiz/QuizPageHeader';
import Quiz from '../components/Quiz/Quiz';
import "../styles/Quize.css"


function QuizPage() {
  return (
    <section className='page-wrapper'>
        <QuizPageHeader />
        <Quiz />
    </section>
  )
}

export default QuizPage