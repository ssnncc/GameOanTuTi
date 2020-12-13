import React, { Component } from "react";
import "./GameOanTuTi.css";
import KetQua from "./KetQua";
import MayChoi from "./MayChoi";
import NguoiChoi from "./NguoiChoi";
import {connect} from "react-redux"

 class GameOanTuTi extends Component {
  render() {
    
    return (
      <div className="bg-game">
       
        <div className="row text-center mt-5">
          <div className="col-4">
              <NguoiChoi/>
          </div>
          <div className="col-4">
              <KetQua/>
              <button onClick={()=>this.props.playGame()} className="btn btn-success"> Player</button>
          </div>
          <div className="col-4">
              <MayChoi/>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    playGame :()=>{
      let count =0;
      //Khai báo hàm lặp đi lặp lại
      let randomMayChoi = setInterval(()=>{
        dispatch({
          type:'RAN_DOM'
        })
        count ++;
        if(count >=100){
          clearInterval(randomMayChoi);//Dừng hàm lặp đi lặp lại
         dispatch({
           type:'END_GAME',
         })
        }
      })
      
    }
  }
}
export default connect(null,mapDispatchToProps)(GameOanTuTi)