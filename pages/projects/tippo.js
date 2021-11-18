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
import {
  IoLogoGithub,
} from 'react-icons/io5'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
  <Layout title="tippo">
    <Container>
      <Title>
        Tippo <Badge>2020</Badge>
      </Title>
      <P>
      Tippo is a social network that apart from providing the utilities of following and giving likes, you can immediately meet a person that interests you.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript - React.js (hooks) - CSS3 - Node.js - Express.js - MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sbotargues/back-tippo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Backend
              </Button>
            </Link>
            <Link href="https://github.com/sbotargues/front-tippo" target="_blank">
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

      <WorkImage src="/images/projects/frontendTippo.png" alt="tippo" />
      <WorkImage src="/images/projects/layoutTippo.png" alt="tippo" />
     </Container> 
  </Layout>
)

export default Project
