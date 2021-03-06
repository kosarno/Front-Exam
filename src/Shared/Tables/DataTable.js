import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import { createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#fff',
            dark: ' #3797a4'
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('سجاد' , 200 ,33 , 13 , 22),
    createData('علی' , 300 ,32 , 12 , 20),
    createData('احمد' , 300 ,33 , 13 , 22),
    createData('کامران' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),
    createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),createData('بهنام' , 300 ,33 , 13 , 22),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ?
        (a, b) => descendingComparator(a, b, orderBy) :
        (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}



function EnhancedTableHead(props) {
    const { headers, classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return ( <
        TableHead >
        <
        TableRow >
        <
        TableCell padding = "checkbox" >
        < /
        TableCell > {
            headers.map((header) => ( <
                TableCell key = { header.id }
                align = "right"
                style={{flexDirection :"unset",
                        fontWeight:"600",
                        fontSize:"16px",
                        textShadow:" 1px 1px 2px silver, 0 0 25px cyan",
                        fontFamily:"Samim"
                    }}
                padding = { header.disablePadding ? 'none' : 'default' }
                // sortDirection = { orderBy === headcell.id ? order : false }
                 >
                <
                TableSortLabel active = { orderBy === header.id }
                direction = { orderBy === header.id ? order : 'asc' }
                onClick = { createSortHandler(header.id) } > { header.label } {
                    orderBy === header.id ? ( <
                        span className = { classes.visuallyHidden } > { order === 'desc' ? 'sorted descending' : 'sorted ascending' } <
                        /span>
                    ) : null
                } <
                /TableSortLabel>
                 < /
                TableCell >
            ))
        } <
        /TableRow> < /
        TableHead >
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight: theme.palette.type === 'light' ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.primary.dark, 0.85),
    } : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.dark,
    },
    title: {
        flex: '1 1 100%',
    },
}));

// const EnhancedTableToolbar = (props) => {
//     const classes = useToolbarStyles();
//     const { numSelected } = props;

//     return ( <
//         Toolbar className = {
//             clsx(classes.root, {
//                 [classes.highlight]: numSelected > 0,
//             })
//         } > {
//             numSelected > 0 ? ( <
//                 Typography align = "right"
//                 className = { classes.title }
//                 color = "inherit"
//                 variant = "subtitle1"
//                 component = "div" > { numSelected }
//                 selected <
//                 /Typography>
//             ) : ( <
//                 Typography align = "right"
//                 className = { classes.title }
//                 variant = "h6"
//                 id = "tableTitle"
//                 component = "div" >
//                 Nutrition <
//                 /Typography>
//             )
//         }

//         {
//             numSelected > 0 ? ( <
//                 FaRemoveFormat / >
//                 // <
//                 // IconButton aria_label = "delete" >
//                 // <
//                 // DeleteIcon / >
//                 // <
//                 // /IconButton> < /
//                 // Tooltip >
//             ) : ( <
//                 FaBars /
//                 >
//                 // <
//                 // /IconButton> < /
//                 // Tooltip >
//             )
//         } <
//         /Toolbar>
//     );
// };

// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
        // text_align: 'right'
    },
}));

const DataTable = props => {
        const classes = useStyles();
        const [order, setOrder] = React.useState('asc');
        const [orderBy, setOrderBy] = React.useState('calories');
        const [selected, setSelected] = React.useState([]);
        const [page, setPage] = React.useState(0);
        const [dense, setDense] = React.useState(false);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);

        const handleRequestSort = (event, property) => {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
        };

        const handleSelectAllClick = (event) => {
            if (event.target.checked) {
                const newSelecteds = rows.map((n) => n.name);
                setSelected(newSelecteds);
                return;
            }
            setSelected([]);
        };

        const handleClick = (event, name) => {
            const selectedIndex = selected.indexOf(name);
            let newSelected = [];

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, name);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            } else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    selected.slice(0, selectedIndex),
                    selected.slice(selectedIndex + 1),
                );
            }

            setSelected(newSelected);
        };

        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        };

        const handleChangeDense = (event) => {
            setDense(event.target.checked);
        };

        const isSelected = (name) => selected.indexOf(name) !== -1;

        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        //headcells---------------
        const headers=props.headcells

        return ( <div className = { classes.root }  >
            <Paper className = { classes.paper } >
             <
            TableContainer >
            <
            Table className = { classes.table }
            
            aria_labelledby = "tableTitle"
            size = { dense ? 'small' : 'medium' }
            aria_label = "enhanced table" >
            <
            EnhancedTableHead headers={headers} classes = { classes }
            numSelected = { selected.length }
            order = { order }
            orderBy = { orderBy }
            onSelectAllClick = { handleSelectAllClick }
            onRequestSort = { handleRequestSort }
            rowCount = { rows.length }
            /> <
            TableBody > {
                stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return ( <
                        TableRow hover  >
                        <
                        TableCell padding = "checkbox" >
                       
                         < /
                        TableCell > <
                        TableCell align = "right"
                        component = "th"
                        id = { labelId }
                        scope = "row"
                        padding = "none"
                        style={{fontFamily:"Samim"}} > { row.name } <
                        /TableCell> <
                        TableCell align = "right" style={{fontFamily:"Samim"}}> { row.calories } < /TableCell> <
                        TableCell align = "right" style={{fontFamily:"Samim"}}> { row.fat } < /TableCell> <
                        TableCell align = "right" style={{fontFamily:"Samim"}}> { row.carbs } < /TableCell> <
                        TableCell align = "right" style={{fontFamily:"Samim"}}> { row.protein } < /TableCell> < /
                        TableRow >
                    );
                })
            } {
                emptyRows > 0 && ( <
                    TableRow style = {
                        { height: (dense ? 33 : 53) * emptyRows }
                    } >
                    <
                    TableCell colSpan = { 6 }
                    /> < /
                    TableRow >
                )
            } <
            /TableBody> < /
            Table > <
            /TableContainer> <
            TablePagination style={{direction:"ltr",fontFamily:"Samim"}}  rowsPerPageOptions = {
                [5, 10, 25]
            }
            component = "div"
            labelRowsPerPage = "  تعداد در هر صفحه"
            
            count = { rows.length }
            rowsPerPage = { rowsPerPage }
            page = { page }
            onChangePage = { handleChangePage }
            onChangeRowsPerPage = { handleChangeRowsPerPage }
            
            /> < /
            Paper >
                <
                /div>
            );
        }




        export default DataTable