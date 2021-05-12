export const appHelpers = {
  modifyFirstWord: function (className) {
    let projectDescriptions = document.querySelectorAll(className)
    let fragment = document.createDocumentFragment()

    for (let i = 0; i < projectDescriptions.length; i++) {
      //get the first paragraph
      let firstParagraph = projectDescriptions[i].firstElementChild

      // split the first paragraph to an array.
      // Slice the first word
      // Slice out the remaining words. set the innerText of the first
      // paragraph as the remainingText
      const firstParagraphArray = firstParagraph.innerText.split(" ")
      let slicedText = firstParagraphArray.splice(0, 1).join(" ")
      let remainingText = firstParagraphArray.splice(0).join(" ")
      firstParagraph.innerText = remainingText

      // Create a newSpan and
      // Set the inner text of the newSpan element as the slicedText
      let newSpan = document.createElement("span")
      newSpan.innerText = slicedText
      newSpan.className = "project__name"

      fragment.appendChild(newSpan)

      // attach the fragment before the first child of the first paragraph
      firstParagraph.prepend(fragment)
    }
  },
  clampBuilder: function (minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
    const root = document.querySelector("html")
    const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2))

    const minWidth = minWidthPx / pixelsPerRem
    const maxWidth = maxWidthPx / pixelsPerRem

    const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
    const yAxisIntersection = -minWidth * slope + minFontSize

    return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
      slope * 100
    }vw, ${maxFontSize}rem)`
  },
  calculateCh: function (element, fontSize) {
    const zero = document.createElement("span")
    zero.innerText = "0"
    zero.style.position = "absolute"
    zero.style.fontSize = fontSize

    element.appendChild(zero)
    const chPixels = zero.getBoundingClientRect().width
    element.removeChild(zero)

    return chPixels
  },
}
