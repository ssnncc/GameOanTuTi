import React, { Component } from 'react'
import {connect} from 'react-redux'

 class MayChoi extends Component {
    render() {
        // let keyframe =`@keyframes randomItem${Date.now()}{
        //     0%{ top:-50px;}
        //     25%{ top: 100px}
        //     50%{ top: -50px}
        //     75%{ top: 100px}
        //     100%{ top: 0}
        //   }`
        return (
            <div className="text-center nguoichoi_content">
                 {/* <style>
                 {keyframe}
                </style> */}
                <div className="keo_bua_bao">
                    <img  src={this.props.mayTinh.hinhAnh} />
                </div>
                <div className="speech-bubble">

                </div>
                <img src="./img/gameOanTuTi/playerComputer.png" width="200" height="180" alt="123"/>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        mayTinh : state.stateGameOanTuTi.mayTinh
    }
}
export default connect(mapStateToProps)(MayChoi)