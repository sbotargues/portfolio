import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Button,
  Center,
  Icon
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import ReactPlayer from 'react-player'
// import video1 from '../../public/video-presentacion.mp4'


const Project = () => (
  <Layout title="teamNOBOX">
    <Container>
      <Title>
        teamNOBOX
        <Badge>2020</Badge>
      </Title>
      <P>
        teamNOBOX is a social network that apart from providing the utilities of
        following and giving likes, you can immediately meet a person that
        interests you.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, React.js, CSS3, Node.js, Express.js, MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/sbotargues/back-teamNOBOX
    "
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              Backend
            </Button>
          </Link>
          <Link
            href="https://github.com/sbotargues/front-teamNOBOX
        "
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoGithub} />}
            >
              Frontend
            </Button>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      
      <div>
      {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src={video} type={"video/mp4"}></source>
      </video> */}
  </div>

    </Container>
  </Layout>
)

export default Project
