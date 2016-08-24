#' @export
paco.start <- function(x = datasets::mtcars) {
  if (is.data.frame(x)) {
    return(x)
  }
  return(datasets::mtcars)
}

#' @export
paco.setData <- function(x) {
  as.data.frame(base::eval(base::parse(text=x)))
}

#' @export
paco.loadFromURL <- function(x) {
  jsonlite::fromJSON(as.character(x))
}

#' @export
paco.data <- datasets::iris

# potential security risk
#pacode.identity <- base::identity
