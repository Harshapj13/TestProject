import { connect, Connect } from "react-redux";
import { AppData } from "../Services/Actions/Action";
import Table from "../Table";

const mapStateToProps = state =>({
    data : state.ReduceAppData.AppData
})

const mapDispatchToProps = (dispatch) =>({
    addDataHandler:data=>dispatch(AppData(data))
})

// export default Table
export default connect(mapStateToProps,mapDispatchToProps)(Table)

