import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNiikiis from '../public/images/projects/niikiisHome.png'
import thumbNobox from '../public/images/projects/teamnobox.png'
import thumbtippo from '../public/images/projects/tippo.png'
import thumbquantion from '../public/images/projects/fondo-quantion.png'

const projects = () => (
  <Layout title="projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects/Collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="Quantion" title="Quantion" thumbnail={thumbquantion}>
          Quantion is a company dedicated to the digital transformation of companies, where I am helping to create one of the projects.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="teamNOBOX" title="TeamNOBOX" thumbnail={thumbNobox}>
          Colaboration with TeamNOBOX, is an agency specialized in strategy, marketing and brand building focused on startups in the launch and growth phase.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="niikiis"
            title="niikiis"
            thumbnail={thumbNiikiis}
          >
            niikiis is the all-in-one HR software that saves SMEs time and money. Configurable, intuitive, and Plug & Play; niikiis is more than HR software: it adapts to the needs of your company.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}

      

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="tippo" thumbnail={thumbtippo} title="tippo">
          This is a social network that apart from providing the utilities of following and giving likes, you can immediately meet a person that interests you.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default projects
