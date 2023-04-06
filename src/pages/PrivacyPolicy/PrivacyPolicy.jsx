import PrivacyPolicyCSS from './PrivacyPolicy.module.css';
import { Container, Row } from 'react-bootstrap';

function PrivacyPolicy() {

    return (
        <Container className={`${PrivacyPolicyCSS.marginTop} ${PrivacyPolicyCSS.marginBottom} ${PrivacyPolicyCSS.width}`} >
            <Row>
         
            <h3 className='text-center'>Privacy Policy</h3>
           
            <p className='pt-3 '>Last Updated:  March 7, 2023</p>

            <p className='text-center'>ACCEPTANCE OF PRIVACY POLICY</p>

            <p className={PrivacyPolicyCSS.fontSize}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa labore inventore, nesciunt sequi aut et itaque tempore vel. Placeat illo officiis pariatur consequatur doloribus accusamus odit excepturi libero magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laborum harum, quidem maiores ullam officia natus. Porro deleniti ad id? Laboriosam adipisci voluptas quisquam laudantium eum! Officia placeat velit ad? 
            </p>

            <br />

            <p className={PrivacyPolicyCSS.fontSize}>
       
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, odio, voluptatem quisquam delectus exercitationem itaque modi soluta officiis fuga, ullam expedita nisi vero dicta? Maiores aliquid consequuntur possimus nobis officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae cum libero quod asperiores optio, vitae fugit, culpa magni inventore necessitatibus itaque ullam est labore, tempore eligendi. In quidem itaque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat necessitatibus architecto! In, enim consectetur esse totam obcaecati architecto quisquam qui, aperiam quia soluta a consequuntur, dolorem optio veritatis adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quisquam voluptatibus, a dolore obcaecati eaque voluptate? Unde, aut velit! Quidem, reprehenderit? Nobis tempore quo ex? Pariatur deleniti repudiandae consectetur non?

            lorem
            </p>

            </Row>
        </Container>
    )
}

export default PrivacyPolicy