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
// import video1 from '../../public/video-presentacion.mp4'


const Project = () => (
  <Layout title="teamNOBOX">
    <Container>
      <Title>
        teamNOBOX
        <Badge>2021</Badge>
      </Title>
      <P>
        teamNOBOX is a social network that apart from providing the utilities of
        following and giving likes, you can immediately meet a person that
        interests you.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platforms</Meta>
          <span>WEB, Android, iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript - React.js - CSS3 - Node.js - Next.js - Tailwindcss - Storybook - sass - Mailchimp - Axios</span>
        </ListItem>
        <ListItem>
          <Meta>SITE</Meta>
          <Link
            href="https://teamnobox.com/
    "
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
            >
              teamnobox.com
            </Button>
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="/images/projects/teamNOBOX1.png" alt="tippo" />
      
      <div>
      {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src={video} type={"video/mp4"}></source>
      </video> */}
  </div>

    </Container>
  </Layout>
)

export default Project
