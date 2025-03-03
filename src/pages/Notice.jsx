import Accordion from 'react-bootstrap/Accordion';
import "../style/Notice.css";
import map from "../images/map.svg";
import geo from "../images/geo.svg";
import tablet from "../images/tablet.svg";
import envelope from "../images/envelope.svg";
import globe from "../images/globe.svg";



const Notice = () => {
    return (
        <main>
            <div className="title2">
                <h1>Mentions Légales</h1>
                <hr className='trait'></hr>
                
            </div>
            <div className="information" style={{margin:'15%',marginTop:'50px'}}>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Editeur de site</Accordion.Header>
                        <Accordion.Body>
                            <h2 style={{ fontWeight: 'bold' }}>John Doe</h2>
                            <div className='info'>
                                <img className='icon-info' src={map} alt='logo de carte'></img>
                                <p className='para-info'>40 rue Laure Diebold</p>
                            </div>

                            <div className='info'>
                            <img className='icon-info' src={geo} alt='logo geolocalisation'></img>
                            <p className='para-info'>69009 Lyon, France</p>
                            </div>

                            <div className='info'>
                            <img className='icon-info' src={tablet} alt='logo de tablette'></img>
                            <p className='para-info' >10 20 30 40 50</p>
                            </div>

                            <div className='info'>
                            <img className='icon-info' src={envelope} alt='logo envelope avec un arobase'></img>
                            <p className='para-info'>john.deo@gmail.com</p>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur</Accordion.Header>
                        <Accordion.Body>
                            <h2 style={{ fontWeight: 'bold' }}>alwaysdata</h2>      
                            <p>91 Rue Faubourg Saint-Honoré,75008 Paris</p>
                            <div className='info'>
                               <img className='icon-info' src={globe} alt='logo de globe'></img>
                               <a className='liens-bleu' href='https://www.bing.com/ck/a?!&&p=0c0a5f4eca03f07d4d177f8f5160250160f4f07798de7864eb7fc72109c6bab2JmltdHM9MTczOTkyMzIwMA&ptn=3&ver=2&hsh=4&fclid=0f828c7f-0ea0-6d5c-192f-83bd0aa069f3&u=a1aHR0cHM6Ly93d3cuYWx3YXlzZGF0YS5jb20vZnIv&ntb=1'>alwaysdata.com</a>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Credits</Accordion.Header>
                        <Accordion.Body>
                            <h2 style={{ fontWeight: 'bold' }}>Crédits</h2>
                            <p>Ce site a été réalisé par john Doe, étudiant au <a className='liens-bleu' href='https://www.centre-europeen-formation.fr/landing/multi-marque/?code=4464'>Centre Europeen de formation</a></p>
                            <p>
                                <i>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site<a className='liens-bleu' href='https://pixabay.com/fr/'> Pixabay</a> </i>
                            </p>
                            <p>
                                <i>La favicon de ce site a été fournie par <a className='liens-bleu' href='https://www.flaticon.com/de/kostenlose-icons/john-doe'>john doe Icons erstellt von Freepik - Flaticon</a></i>
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>


        </main>
    )
}

export default Notice;