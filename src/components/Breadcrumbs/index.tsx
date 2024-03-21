import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";



function BreadCrumbs(props) {
    const { breadcrumbs } = props;
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
      </Breadcrumbs>
    )
}

export default BreadCrumbs;