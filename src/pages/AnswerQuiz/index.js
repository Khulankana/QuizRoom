import React from 'react';

import Logout from '../../components/Navbar/logout'
import Quiz from '../../components/Quiz'
import Footer from '../../components/Footer'

export default function AnswerQuiz() {
      return(
           <div>
                 <Logout />
                 <Quiz />
                 <Footer />
           </div>
      );
}
