// import React from 'react';
// import Burger from '../../Assets/burger2.png';
// import {Card, CardImg, CardHeader, CardBody, Button} from 'reactstrap';

// const ProjectCard = () => {
//     return(
//         <div>
//             <Card className="shadow h-100" style={{padding:'5%'}}>
//                 <CardHeader><h5>The Burger App</h5></CardHeader>
//                 <CardImg top width="100%" src={Burger} alt="Card image cap" />
//                 <CardBody style={{textAlign:'justify'}}>
//                     <p>A web app used to order customized burgers which is implemented using ReactJS, JavaScript and CSS as well as Firebase as beackend database.</p>
//                 <Button color="success">DEMO</Button>
//                 </CardBody>
//             </Card>
            
//         </div>
//     )
// }

// export default ProjectCard;

import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,
    CardHeader, CardSubtitle, Button } from 'reactstrap';

const ProjectCard = (props) =>{
    return(
        <div className='card cardtext' >
            <div className='card-header'><h5>{props.title}</h5></div>
                <div className='card-body'>
                    <CardImg top width="100%" src={props.img} alt="Card image cap" />
                    
                    <div className="cardtextchilder">
                            {props.children}
                    </div>
                </div>   
            </div>
    )
}
// const ProjectCard = (props) => {
//     return (
//       <div>
//         <Card>
//           <CardBody>
//             <CardTitle>{props.title}</CardTitle>
//           </CardBody>
//           <img width="100%" src={props.img} alt="Card image cap" />
//           <CardBody>
//             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
//           </CardBody>
//         </Card>
//       </div>
//     );
//   };

export default ProjectCard;