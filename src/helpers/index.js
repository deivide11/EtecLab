export const getURL = () => {
  return window.location.href;
};

export const getRoot = () => {
  const url = getURL();
  const indiceSrc = url.indexOf("src");
  const root = url.substring(0, indiceSrc);
  return root;
};

export const getRouteName = (completo) => {
  const url = getURL();
  const partes = url.split("/");
  const nomeDaRotaCompleto = partes[partes.length - 1];
  const nomeDaRota = nomeDaRotaCompleto.split(".")[0];

  if (completo) {
    return nomeDaRotaCompleto;
  }
  return nomeDaRota;
};

export const navigateTo = (path) => {
  const root = getRoot();
  window.location.replace(`${root}${path}`);
};
