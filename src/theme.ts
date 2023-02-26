import {createGlobalStyle} from "styled-components";

export const lightTheme ={
    body:"white",
   
}

export const darkTheme ={

    body:"black",
    
}


export const GlobalStyles = createGlobalStyle`
    body{
        background-color:${(props:any) =>props.theme.body};
        color:${(props:any)=>props.theme.text};
    }
   
    
`
