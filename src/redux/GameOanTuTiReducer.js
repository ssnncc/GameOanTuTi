const stateDefault={
   mangHanhDong: [
       {ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png',datCuoc:true},
       {ma:'bua',hinhAnh:'./img/gameOanTuTi/bua.png',datCuoc:false},
       {ma:'bao',hinhAnh:'./img/gameOanTuTi/bao.png',datCuoc:false}
   ],
   ketQua :"I'm Iron man, i love you 3000",
   soBanThang:0,
   soBanChoi:0,
   mayTinh:{ma:'keo',hinhAnh:'./img/gameOanTuTi/keo.png'}
};
export const GameOanTuTiReducer = (state= stateDefault, action)=>{

    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
                //reset lại dạt cượt
            let mangHanhDongUpdate =[...state.mangHanhDong];
            // Tạo ra mảng cược mới khi người dùng chọn hành động 
            mangHanhDongUpdate = mangHanhDongUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return{...item,datCuoc:true}
                }
                return{...item,datCuoc:false}
            })
            
            //Cập nhật lại state
            state.mangHanhDong= mangHanhDongUpdate;
            return {...state};
        }
        case 'RAN_DOM':{
            //Random 
            let soNgauNhien = Math.floor(Math.random() *3);
            let hanhDongNgauNhien = state.mangHanhDong[soNgauNhien];
            state.mayTinh = hanhDongNgauNhien;
            return {...state};
        }
        case 'END_GAME':{
            
            let nguoiChoi = state.mangHanhDong.find(item=>item.datCuoc===true);
            let mayTinh = state.mayTinh;
            switch(nguoiChoi.ma){
                case 'keo':
                    if(mayTinh.ma ==='keo'){
                        state.ketQua='Hòa nhau !!!';
                    }else if(mayTinh.ma ==='bua'){
                        state.ketQua ='Thua rồi !!!';
                    }else{
                        state.soBanThang +=1;
                        state.ketQua ="I'm Iron man, i love you 3000";
                    };
                    break;
                    case 'bua':
                        if(mayTinh.ma ==='keo'){
                            state.soBanThang +=1;
                            state.ketQua="I'm Iron man, i love you 3000";
                        }else if(mayTinh.ma ==='bua'){
                            state.ketQua ='Hòa rồi';
                        }else{
                            state.ketQua ="Thua rồi";
                        };
                        break;
                    case 'bua':
                         if(mayTinh.ma ==='keo'){
                                state.ketQua="Thua";
                         }else if(mayTinh.ma ==='bua'){
                                state.soBanThang +=1;
                                state.ketQua ="I'm Iron man, i love you 3000";
                         }else{
                                state.ketQua ="Hòa";
                        };
                            break;
                    default: state.ketQua ="I'm Iron man, i love you 3000";
            }
            state.soBanChoi +=1;
            return {...state};
          
        }
        default : return {...state};
        
    }
    return {...state};
}
