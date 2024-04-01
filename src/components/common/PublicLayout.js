import * as React from "react";

import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";

import MainHeader from "@/components/common/Header";

function PublicLayout({ children }) {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Root>
        <Header>
          <MainHeader />
        </Header>
        <Main>{children}</Main>
      </Root>
    </CssVarsProvider>
  );
}

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.appBody",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[
        { px: 12, py: 6 },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Footer(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
          gridColumn: "1 / -1",
          mt: "auto",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {props.children}
    </Box>
  );
}

export default PublicLayout;
