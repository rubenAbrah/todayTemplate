 
 function useChangeTitleColor(color) {
  document.documentElement.style.setProperty(
        "--title-background-global", color 
    )  
}  
export {useChangeTitleColor}