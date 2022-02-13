import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Button,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'


const Project = () => (
  <Layout title="Quantion">
    <Container>
      <Title>
        Quantion
        <Badge>2022</Badge>
      </Title>
      <P>
      At Quantion we facilitate your company’s digital transformation. Our experience, tailored solutions and our specialists know-how bring technology to business and business to technology.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>WEB, Android, iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, Angular, Java, Springboot, Node.js, SQL, Mongodb</span>
        </ListItem>
        <ListItem>
          <Meta>SITE</Meta>
          <Link
            href="https://quantion.com/
    "
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
            >
              quantion.com
            </Button>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="/images/projects/fondo-quantion.png" alt="quantion" />
      
      <div>
      {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src={video} type={"video/mp4"}></source>
      </video>  */}
  </div>

    </Container>
  </Layout>
)

export default Project
