/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>Sistema de Auditoría</div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()} Realizado por la Universidad de
            Camagüey
          </span>
        </p>
      </div>
    </footer>
  );
}
