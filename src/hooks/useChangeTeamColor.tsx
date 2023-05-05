function useChangeTitleColor(e) {
  helper("--title-background-global", "background-image", e.target);
}

function useChangeSidebarBackgroundColor(e) {
  let type = e.target.getAttribute("data-color");
  helper(
    "--sidebar-background-color-global",
    `--sidebar-background-color-${type}`
  );
  helper("--sidebar-text-color-global", `--sidebar-text-color-${type}`);
}
function useChangeTeam(e) {
  let type = e.target.getAttribute("data-color");
  helper("--theme-body-global", `--theme-body-${type}`);
  helper("--text-color-global", `--text-color-${type}`);
  helper("--section-background-color", `--section-background-${type}`);
  helper(
    "--header-background-color-global",
    `--header-background-color-${type}`
  );
}
function helper(globalColor, newColor, colorParent = document.body) {
  document.documentElement.style.setProperty(
    globalColor,
    getComputedStyle(colorParent).getPropertyValue(newColor)
  );
}

export { useChangeTitleColor, useChangeSidebarBackgroundColor, useChangeTeam };
