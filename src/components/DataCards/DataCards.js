import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./DataCards.module.css";
import cx from "classnames";

// destructure the data state being passed in so we can call positive, recovered, and death directly
function DataCards({ data: { positive, recovered, death } }) {
    // if the data is not yet fetched and loaded into state, return a loading message
  return (
    <div className={styles.container}>
      {!positive ? (
        <>
          <CircularProgress />
          <p>Loading data cards, please wait a few seconds.</p>
        </>
      ) : (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid
            item
            component={Card}
            xs={12}
            sm
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography variant="h4">Infected</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={positive} duration={2} separator="," />
              </Typography>
              <Typography variant="subtitle1">
                Total positive cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            sm
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography variant="h4">Recovered</Typography>
              {recovered === null ? (
                <Typography variant="h5">?</Typography>
              ) : (
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2}
                    separator=","
                  />
                </Typography>
              )}
              <Typography variant="subtitle1">
                Total recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            sm
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography variant="h4">Deaths</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={death} duration={2} separator="," />
              </Typography>
              <Typography variant="subtitle1">
                Total number of deaths from COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default DataCards;
