import { GetStaticProps } from 'next'

import { getPlantList } from '@api'

import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'

type HomeProps = {
  plants: Plant[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = await getPlantList({ limit: 10 })

  return {
    props: {
      plants,
    },
  }
}

const Home: React.FC<HomeProps> = ({ plants }) => {
  return (
    <Layout>
      <PlantCollection plants={plants} variant="square" />
    </Layout>
  )
}

export default Home
