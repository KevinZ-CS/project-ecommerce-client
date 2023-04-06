import TermsOfUseCSS from './TermsOfUse.module.css';
import { Container, Row } from 'react-bootstrap';

function TermsOfUse() {

    return (
        <Container className={`${TermsOfUseCSS.marginTop} ${TermsOfUseCSS.marginBottom} ${TermsOfUseCSS.width}`} >
            <Row>
         
            <h3 className='text-center'>Terms of Use</h3>
           
            <p className='pt-3 '>Last Updated:  March 7, 2023</p>

            <p className='text-center'>ACCEPTANCE OF TERMS</p>

            <p className={TermsOfUseCSS.fontSize}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dicta recusandae temporibus dolor consequuntur tempore similique ratione ad aliquam incidunt quae, quidem tenetur ullam, libero, quasi molestias non. Consectetur, odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a sed quasi aperiam voluptas eveniet asperiores, voluptatum magni! Libero reprehenderit veritatis commodi, nesciunt rem laudantium illo facilis molestiae! Dolore, unde! 
            </p>

            <br />

            <p className={TermsOfUseCSS.fontSize}> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dicta recusandae temporibus dolor consequuntur tempore similique ratione ad aliquam incidunt quae, quidem tenetur ullam, libero, quasi molestias non. Consectetur, odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a sed quasi aperiam voluptas eveniet asperiores, voluptatum magni! Libero reprehenderit veritatis commodi, nesciunt rem laudantium illo facilis molestiae! Dolore, unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus incidunt. Sint asperiores voluptatibus fuga nihil, accusamus modi praesentium ut impedit numquam exercitationem inventore commodi consectetur neque repellat, molestias necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus soluta voluptas fugiat pariatur doloribus ab molestiae distinctio perferendis omnis nisi consequuntur rerum dolores, fuga quos quia optio dicta mollitia? Provident?
            </p>

            </Row>
        </Container>
    )
}

export default TermsOfUse