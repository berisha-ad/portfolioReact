import Section from "./shared/Section";
import Container from "./shared/Container";

const HomeSection = () => {
    return ( 
        <Section>
            <Container>
                <h1 className='text-4xl font-extralight'>Adrian <em className='emphasized'>Berisha</em>, <br/>
                Web developer from Vienna</h1>
            </Container>
        </Section>
     );
}
 
export default HomeSection;