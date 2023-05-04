function useChangeTitleColor(e) {
  helper("--title-background-global","background-image", e.target);
}

function useChangeSidebarBackgroundColor(e) {
  helper(
    "--sidebar-background-color-global",
    `--sidebar-background-color-${e.target.getAttribute("data-color")}`
  );
  helper(
    "--sidebar-text-color-global",
    `--sidebar-text-color-${e.target.getAttribute("data-color")}`
  );
}
function useChangeTeam(e) {
  if (e.target.checked) {
    helper("--theme-body-global", "--theme-body-type1");
    helper("--text-color-global", "--text-color-type1");
    helper("--section-background-color", "--section-background-type1");
    helper(
      "--header-background-color-global",
      "--header-background-color-type1"
    );
  } else {
    helper("--theme-body-global", "--theme-body-type2");
    helper("--text-color-global", "--text-color-type2");
    helper("--section-background-color", "--section-background-type2");
    helper(
      "--header-background-color-global",
      "--header-background-color-type2"
    );
  }
}
function helper(globalColor, newColor, colorParent = document.body) {
  document.documentElement.style.setProperty(
    globalColor,
    getComputedStyle(colorParent).getPropertyValue(newColor)
  );
}

export { useChangeTitleColor, useChangeSidebarBackgroundColor, useChangeTeam };
