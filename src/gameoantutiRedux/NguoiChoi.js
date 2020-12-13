import React, { Component } from 'react'
import {connect} from 'react-redux'

class NguoiChoi extends Component {
    render() {
        return (
            <div className="text-center nguoichoi_content">
                <div className="keo_bua_bao">
                <img  src={this.props.mangHanhDong.find(items=>items.datCuoc===true).hinhAnh}/>
                </div>
                <div className="speech-bubble">

                </div>
                <img src="./img/gameOanTuTi/player.png" width="200" height="180" alt="123"/>
                <div className="row">
                    {this.props.mangHanhDong.map((items,index)=>{
                        
                        //Xét giá trị
                        let border= {};
                        if(items.datCuoc){
                            border ={
                                border:'3px solid red'
                            }
                        }
                        return  <div className="col-4" key={index}>
                        <button style={border} className="button_Item" onClick={()=>{
                            this.props.chonHanhDong(items.ma);
                        }}>
                        <img src={items.hinhAnh}/>
                        </button>
                      
                    </div>
                    })}
                   
                    {/* <div className="col-4">
                        <button className="button_Item">
                        <img src="./img/gameOanTuTi/bua.png"/>
                        </button>
                       
                    </div>
                    <div className="col-4">
                        <button className="button_Item">
                        <img src="./img/gameOanTuTi/bao.png"/>
                        </button>
                        
                    </div> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        mangHanhDong : state.stateGameOanTuTi.mangHanhDong
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        chonHanhDong : (maCuoc)=>{
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NguoiChoi)