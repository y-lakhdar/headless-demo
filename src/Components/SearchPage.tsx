import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchBox from './SearchBox';
import ResultList from './ResultList';
import {AnalyticsActions, SearchActions, Engine} from '@coveo/headless';
import {EngineProvider} from '../common/engineContext';

interface ISearchPageProps {
  engine: Engine;
}

const SearchPage: React.FunctionComponent<ISearchPageProps> = (props) => {
  const {engine} = props;
  useEffect(() => {
    const {dispatch} = engine;
    const action = SearchActions.executeSearch(
      AnalyticsActions.logInterfaceLoad()
    );
    dispatch(action);
  }, [engine]);

  return (
    <EngineProvider value={engine}>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid item md={8}>
            <SearchBox />
          </Grid>
        </Grid>

        <Box my={4}>
          <Grid container>
            <Grid item md={9} sm={12}>
              <Box pl={3}>
                <ResultList />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </EngineProvider>
  );
};

export default SearchPage;
