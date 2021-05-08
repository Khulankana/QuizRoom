import React from 'react';

import Navbar from '../../components/Navbar/withoutRegisterNav'
import Quiz from '../../components/Quiz'
import Footer from '../../components/Footer'

export default function AnswerQuiz() {
      return(
           <div>
                 <Navbar />
                 <Quiz />
                 <Footer />
           </div>
      );
}
