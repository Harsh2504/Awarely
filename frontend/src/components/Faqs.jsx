import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <section className='my-5' id="About" style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '',
                backgroundColor: '#FFFFFF'
            }}>
                <h2 className='my-2 fustat-heading' style={{ textAlign: 'center', margin: '20px', color: '#0089EA' }} >Frequently Asked Questions</h2>
                <style type="text/css">
                    {`
                        .custom-accordion-header {
                            background-color: #FFFFFF;
                            color: #0089EA;
                            border: none;
                        }
                 
                     
                        .custom-accordion-header .accordion-button {
                            background-color: #FFFFFF;
                            color: #0089EA;
                        }
                    `}
                </style>
                <Accordion>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header className="custom-accordion-header fustat-heading">
                        What is Awarely and what services does it offer?
                        </Accordion.Header>
                        <Accordion.Body className="custom-accordion-body manrope-paragraph ">
                        Awarely is an educational platform dedicated to empowering individuals with knowledge about legal rights and human rights. We provide comprehensive resources, interactive quizzes, and engaging content to help users understand their rights and responsibilities under the law. Our goal is to promote awareness and education in these crucial areas, enabling individuals to navigate legal systems confidently and advocate for themselves and others effectively.    
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="custom-accordion-header fustat-heading">
                        How can I access the quizzes and learning materials on Awarely?
                        </Accordion.Header>
                        <Accordion.Body className="custom-accordion-body  manrope-paragraph">
                        To access our quizzes and learning materials, you need to create an account and log in to our platform. Once logged in, you can explore various subjects, including Legal Rights and Human Rights. Each subject contains detailed information, key concepts, and interactive quizzes to test your knowledge. Simply navigate to the desired subject from the homepage and start learning!    
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="custom-accordion-header fustat-heading">
                        What should I do if I encounter issues or need support while using Awarely?
                        </Accordion.Header>
                        <Accordion.Body className="custom-accordion-body  manrope-paragraph">
                        If you encounter any issues or need support while using our platform, please visit the <b>Support</b> section accessible from the navigation bar. You can also fill out the contact form on the <b>Contact Us</b> page, and our support team will get back to you as soon as possible. We are here to help you with any questions or technical difficulties you may have.    
                         </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="custom-accordion-header fustat-heading">
                        Is Awarely free to use?
                        </Accordion.Header>
                        <Accordion.Body className="custom-accordion-body  manrope-paragraph">
                        Yes, RedHouseEdTech is free to use. We believe that knowledge about legal and human rights should be accessible to everyone. Our platform offers comprehensive resources, interactive quizzes, and engaging content at no cost to the user. We are committed to providing valuable educational content to help individuals understand and navigate their rights and responsibilities effectively.    
                         </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default FAQ;
