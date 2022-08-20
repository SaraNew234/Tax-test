import React, {createContext, useContext, useReducer} from "react";


export const AppContext = createContext({
   applicable_items:[],
   applied_to:'some',
   name:'',
   rate:0,
 

});

const appReducer = (state, action) => {
    switch (action.type) {
        case "some": {
            return {
                ...state,
                applied_to: action.data,
            };
        }
        case "all": {
         
            return {
                ...state,
                applied_to: action.data,
              
            };
        }
        case "selectAll": {
            let data=action.data.map((item)=>{
                return item.id;
            })
           
            let tempItems=[]
            data.forEach(element => {
                if(state.applicable_items.indexOf(element)===-1){
                    tempItems.push(element)
                }
             
            });
            
            return {
                ...state,
                applicable_items:[...state.applicable_items,...tempItems]
           
            };
        }
        case "removeAll": {
            let tempItems=[...state.applicable_items]
            tempItems.splice(tempItems.indexOf(action.data),1)
            return {
                ...state,
                applicable_items:[...tempItems]
           
            };
        }
        case "select": {
            let tempItems=[]
          
                if(state.applicable_items.indexOf()===-1){
                    tempItems.push(action.data)
                }
             
       
            return {
                ...state,
                applicable_items:[...state.applicable_items,...tempItems]
           
            };
        }
        case "UnSelect": {
            let tempItems=[...state.applicable_items]
            tempItems.splice(tempItems.indexOf(action.data),1)
            return {
                ...state,
                applicable_items:[...tempItems]
           
            };
        }
        default: {
            return state;
        }
    }
};

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, {
        applicable_items:[],
        applied_to:'some',
        name:'',
        rate:0   
    
    });
  
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("AppProvider");
    }
    return context;
};

export {AppProvider, useApp};
