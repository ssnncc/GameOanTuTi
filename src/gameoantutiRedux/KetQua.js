import React, { Component } from 'react'
import {connect} from 'react-redux'

 class KetQua extends Component {
    render() {
        return (
            <div className=" text-center">
                <h1 className="display-4 "> <span className="display-4 text-danger">{this.props.ketQua}</span></h1>
                <h1 className="display-4 text-white">Số bàn thắng: <span className="display-4 text-warning">{this.props.soBanThang}</span></h1>
                <h1 className="display-4  text-white">Số bàn chơi: <span className="display-4 text-warning">{this.props.soBanChoi}</span></h1>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
      ketQua: state.stateGameOanTuTi.ketQua,
      soBanThang:state.stateGameOanTuTi.soBanThang,
      soBanChoi:state.stateGameOanTuTi.soBanChoi,
    }
}
export default connect(mapStateToProps)(KetQua);