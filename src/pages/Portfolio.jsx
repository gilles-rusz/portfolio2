import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../style/Portfolio.css';




const Portfolio = () => {
    return (
        <main>
            <img className="img1" src="../images/banner.jpg" alt="fond violet avec un eclair blanc"></img>

            <div className="title2">
                <h1>Portfolio</h1>
                <h2>voici quelques-unes de mes réalisation</h2>
                <hr className='trait'></hr>

                
            </div>
            <div className="realisation">
                <div className="realisation1">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/fresh-food.jpg"  />
                        <Card.Body>
                            <Card.Title>Fresh Food</Card.Title>
                            <Card.Text>
                               Site de vente de produits frais en ligne
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Site réalisé avec PHP et MySQL</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

                <div className="realisation2">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/restaurant-japonais.jpg"  />
                        <Card.Body>
                            <Card.Title>Restaurant Akira</Card.Title>
                            <Card.Text>
                               Site de vente de produits frais en ligne
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Site réalisé pour WordPress</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

                <div className="realisation3">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/espace-bien-etre.jpg"  />
                        <Card.Body>
                            <Card.Title>Espace-bien-être</Card.Title>
                            <Card.Text>
                               Site de vente de produits bien-être
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Site réalisé avec LAVAREL</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

                <div className="realisation4">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/seo.jpg"/>
                        <Card.Body>
                            <Card.Title>SEO</Card.Title>
                            <Card.Text>
                               Amélioration du référencement d'un site e-commerce
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Utilisation des outils SEO</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

                <div className="realisation5">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/coder.jpg"/>
                        <Card.Body>
                            <Card.Title>Création d'une API</Card.Title>
                            <Card.Text>
                               Création d'une API RESTFULL publique
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>PHP-SYMFONY</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

                <div className="realisation6">
                    <Card className='card2' style={{ width: '20rem',height:'30rem' }}>
                        <Card.Img variant="top" src="../images/screens.jpg"  />
                        <Card.Body>
                            <Card.Title>Maquette d'un site web</Card.Title>
                            <Card.Text>
                               Création du prototype d'un site
                            </Card.Text>
                            <Button variant="primary">Voir le site</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Réalisation avec FIGMA</ListGroup.Item>   
                        </ListGroup>                      
                    </Card>
                </div>

            </div>
        </main>

    )
}

export default Portfolio;