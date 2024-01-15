export const useIsIframe = () => {
  if (process.client) {
    return window.location !== window.parent.location || window.frameElement
  }
  return false
}
