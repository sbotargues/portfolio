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
  import { Title, WorkImage, Meta } from '../../components/project'
  import P from '../../components/paragraph'
  
  const Project = () => (
    <Layout title="niikiis">
      <Container>
        <Title>
          niikiis <Badge>2020</Badge>
        </Title>
        <P>
        niikiis is a social network that apart from providing the utilities of following and giving likes, you can immediately meet a person that interests you.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>WEB, iOS, Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>AWS - Javascript - React.js - CSS3 - Node.js - Express.js - MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>SITE</Meta>
            <Link
            href="https://www.niikiis.com/
    "
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
            >
              niikiis.com
            </Button>
              </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage src="/images/projects/niikiis.png" alt="niikiis" />
        <WorkImage src="/images/projects/niikiis2.png" alt="niikiis" />
       </Container> 
    </Layout>
  )
  
  export default Project