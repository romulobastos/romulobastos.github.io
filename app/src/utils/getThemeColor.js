const getThemeColor = () => {
  // verifica se window ja existe antes de buscar o valor de __theme
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
