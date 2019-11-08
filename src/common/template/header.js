import React from "react";
import Grid from "@material-ui/core/Grid";
import Typograph from "@material-ui/core/Typography";

export default props => (
  <div>
    <Grid container>
      <Grid item xs={12} sd={12} md={12}>
        <Typograph variant="h4" gutterBottom>
          {props.label}
        </Typograph>
      </Grid>
    </Grid>
  </div>
);
