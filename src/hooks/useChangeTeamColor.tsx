function useChangeTitleColor(e) {
  helper("--title-background-global", "background-image", e.target);
}

function useChangeSidebarBackgroundColor(e) {
  e.target.getAttribute("data-color") == 'type2' ?
  document.querySelector('body').setAttribute('data-menuTheme','dark')
  :
  document.querySelector('body').removeAttribute('data-menuTheme')
  
}
function useChangeTeam(e) {
  e.target.getAttribute("data-color") == 'type2' ?
  document.querySelector('body').setAttribute('data-theme','dark')
  :
  document.querySelector('body').removeAttribute('data-theme') 
} 

export { useChangeTitleColor, useChangeSidebarBackgroundColor, useChangeTeam };
