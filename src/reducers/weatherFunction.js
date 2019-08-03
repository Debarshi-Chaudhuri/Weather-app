const initialState={
    weather:{}
}
export const weather=(state=initialState,action)=>{
    switch(action.type){
        case 'ON_CLICK':
                
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=989aeb61637efc432e57044c6c5bd577`).then(
                    (response)=>{
                        return response.json();
                    }).then((json)=>{
                    console.log(json);
                    /*return({
                        ...state,
                        weather:{}
                    });*/
                });
                break;
        default: return (state);
    }
}