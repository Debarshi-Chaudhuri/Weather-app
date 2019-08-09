const initialState={
    weather:[],
    others:{}
}
export const weather=(state=initialState,action)=>{
    switch(action.type){
        case 'ON_CLICK':
            while(action.payload.weather.length-1)
            action.payload.weather.pop();
                return{
                    ...state,
                    weather:action.payload.weather,
                    others:action.payload
                }
                
        default: return (state);
    }
}