import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import styles from './styles.module.scss';
import React from "react";

interface BreadCrumbsProps {
    breadcrumbs: JSX.Element[];
    highlightLastItem?: boolean;
}

/**
 * Component that displays breadcrumbs.
 * @param {Array<JSX.Element>} breadcrumbs - Array of breadcrumbs. Each breadcrumb must be a `JSX.Element`
 * @param {boolean} [highlightLastItem=true] - Whether to highlight the last item in the breadcrumbs. Default is `true`.
 * @returns {JSX.Element} The component
 */
function BreadCrumbs({ breadcrumbs, highlightLastItem = true }: BreadCrumbsProps): JSX.Element {

    const updatedBreadCrumbs = breadcrumbs.map((breadcrumb, index) => {
        return React.cloneElement(breadcrumb, {
            className: (highlightLastItem && index === breadcrumbs.length - 1) ? styles.highlight : '',
        })
    })

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={styles.breadcrumbs}
        >
            {updatedBreadCrumbs}
        </Breadcrumbs>
    )
}

export default BreadCrumbs;