import * as React from "react";

import Navigation, { NAV_LINKS } from "./Navigation";
import * as Layout from "./Layout";

import numeral from "numeral";
import { Table, Typography } from "@mui/joy";
import FolderIcon from "@mui/icons-material/Folder";

const formatFileSize = (size) => {
    if (!size) {
        return "-";
    }
    if (size < 1024) {
        return numeral(size).format("0 ib");
    }

    return numeral(size).format("0.0 ib");
};

export default function Files(props) {
    const { classFileListing } = props;

    return (
        <Layout.Root>
            <Layout.SideNav>
                <Navigation selected={NAV_LINKS.FILES} />
            </Layout.SideNav>
            <Layout.Main>
                <Typography startDecorator={<FolderIcon />} level="title-lg">
                    Manage Files
                </Typography>
                <Typography level="title-md">
                    {classFileListing?.label}
                </Typography>
                <Table
                    hoverRow
                    size="lg"
                    borderAxis="none"
                    variant="soft"
                    sx={{
                        "--TableCell-paddingX": "1rem",
                        "--TableCell-paddingY": "1rem",
                    }}
                >
                    <tbody>
                        {classFileListing?.files.map((file) => (
                            <tr key={file.path}>
                                <td>
                                    <Typography
                                        level="title-sm"
                                        sx={{ alignItems: "flex-start" }}
                                    >
                                        {file.label}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="title-sm">
                                        {formatFileSize(file["file-size"])}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="title-sm">
                                        {file["date-modified"]}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Layout.Main>
        </Layout.Root>
    );
}
