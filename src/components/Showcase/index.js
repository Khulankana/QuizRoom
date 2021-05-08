import React from 'react';
import { Link} from 'react-router-dom';
import '../../pages/App/style.css';

export default function Showcase() {
      return(
            <div className="home-content">
                  <header className="showcase">
                        <div className="container">
                              <div className="showcase-container">
                                    <div className="showcase-content">
                                          <h1>Манай апп-н тухай</h1>
                                          <p>Та гэр бүл, найз нөхдийнхөө хүрээнд хөгжөөнт тэмцээн зохион байгуулах болон богино хэмжээний сургалт, лекц гэх мэт бүхий л сургалтад ашиглаж болох өөрийн хүссэн тестээ үүсгэх боломжтой.</p>
                                          <Link className="btn btn-primary" to="/createTest">Тест үүсгэх</Link>
                                    </div>
                              </div>
                        </div>
                  </header>
            </div> 
      );
}