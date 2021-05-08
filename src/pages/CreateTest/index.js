import React from 'react';

import Navbar from '../../components/Navbar/withoutRegisterNav'
import CreateTest from '../../components/CreateTest'
import Footer from '../../components/Footer'

export default function CreateTestPage() {
      return(
           <div>
                 <Navbar />
                 <CreateTest />
                 <Footer />
           </div>
      );
}
