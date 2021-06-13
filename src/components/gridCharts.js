import { GridItem, Grid } from '@chakra-ui/react';
import ChartBlock from '../components/chartBlock';
import { isMobile } from 'react-device-detect';

const GridCharts = ({ cData }) => {
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
      gap={10}
      px={[8, 20]}
      my={[4, 12]}
    >
      <GridItem colSpan={1}>
        <ChartBlock {...cData[0]} />
      </GridItem>

      <GridItem colSpan={[1, 2]}>
        <ChartBlock {...cData[1]} csWidth={isMobile ? 250 : 500} />
      </GridItem>
    </Grid>
  );
};

export default GridCharts;
