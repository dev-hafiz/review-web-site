import React from 'react';
import aboutImg from '../../images/about1.jpg';
import mamfirst from '../../images/mam1.jpg';
import mamsecond from '../../images/mam2.jpg';
import sir from '../../images/sir1.jpg';
import './About.css'

const About = () => {
     return (
          <div>
             <div className="container about my-5 row">
               
          
               <div className="col-md-8">
               <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                         Canada leads as the most popular study 
                         </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">Canada is known for their top-notch education system, prestigious universities with high graduate employability, and a culture of tolerance and diversity. It’s no wonder that<code> Canada is such a popular</code> place to live, study and work! Discover the benefits of studying in Canada and find all the answers with our FAQs about studying and working in Canada.</div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                         Grammar 101: What is a Contronym?
                         </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">So, have you ever heard of a word in English that has two opposite meanings? We call a single word that has two <code>contradictory meaning (they're their own opposites) contronyms</code>. As a result of this unique characteristic, they are quite rare. But, we have a full list of these words in English. Read below how you can use them in a sentence.</div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                         Will Using a Mask Affect Your Speaking Test?
                         </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">If I wear a mask, will it affect my Speaking test score? The short answer is: No, not in your IELTS Speaking test because we use real examiners. But some other tests, like Pearson PTE Academic, require you to talk to a computer, where it may affect your score. Read more here.</div>
                    </div>
                    </div>
                    </div>
               </div>
               <div className="col-md-4">
               <img width ="500px" src={aboutImg} alt="" />
               </div>
           </div> 


          </div>
     );
};

export default About;