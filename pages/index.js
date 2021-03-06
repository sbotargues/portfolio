import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
} from 'react-icons/io5'
import { PhoneIcon } from '@chakra-ui/icons'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Spain!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sergi Botargues
          </Heading>
          <p>Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="130px"
            display="inline-block"
            borderRadius="full"
            src="/images/Sergi.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Sergi is a full-stack developer based in Barcelona with a passion for building digital services. He has a knack for launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves producing music.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <Paragraph>
        JavaScript - Typescript - Angular - React.js(hooks)HTML5 - CSS3 - MongoDB - AWS (Lambda, API Gateway, S3, cloudwatch, cloudfront, pipeline, dynamodb...) - Node.js - Java - Springboot - Express - Next.js - chakra UI - Framer Motion - Three.js - Tailwind CSS - Storybook - Sass - Mailchimp - Axios - MySQL - AWS - IOS - Wordpress - Shopify - SEO - Git - Shopify - Wordpress - VSCode, Cloud9, Agile(Azure, Jira...)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Barcelona, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Degree in network systems administration at the UOC
          (Universitat Oberta de Catalunya)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bootcamp in Ironhack Barcelona
        </BioSection>
        <BioSection>
          <BioYear>September 2020 - June 2021</BioYear>
          Worked at Niikiis, Barcelona
        </BioSection>
        <BioSection>
          <BioYear>June 2021 - Present</BioYear>
          Projects as a freelance, colaboration with DigitalChallenge and TeamNOBOX
        </BioSection>
        <BioSection>
          <BioYear>December 2021 - Present</BioYear>
          Working at Quantion, Barcelona
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ???
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://soundcloud.com/sergi-botargues" target="_blank">
            Music,{' '}
          </Link>
          <Link href="https://www.twitch.tv/botarguess" target="_blank">
            Streaming
          </Link>
          , Analog, Film, Digital Marketing
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sbotargues?tab=repositories.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @sbotargues
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/sergi-botargues/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @sergi-botargues
              </Button>
            </Link>
          </ListItem>
          <Heading as="h3" variant="section-title">
          Contact
        </Heading>
          <ListItem>
            <Link href="mailto:sbotargues@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                sbotargues@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="tel:+34608162699" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={PhoneIcon} />}
              >
                +34 608162699
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
