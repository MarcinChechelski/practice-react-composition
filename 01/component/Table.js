// import React from "react";
// import TableHeader from "./TableHeader";
// import TableBody from "./TableBody";
// class Table extends React.Component {
//     render() {
//         const { data } = this.props;
//         console.log(data);

//         return (
//             <table>
//                 <TableHeader
//                     colNames={["id", "nazwa", "cena", "ilość", "razem"]}
//                 />
//                 <TableBody />
//             </table>
//         );
//     }
// }

// export default Table;

import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody data={data} />
                <TableFooter data={data} />
            </table>
        );
    }
}

export default Table;
