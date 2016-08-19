#' @export
paco.start <- function() {
  datasets::mtcars
}

#' @export
paco.setData <- function(x) {
  as.data.frame(base::eval(base::parse(text=x)))
}

#' @export
paco.loadFromURL <- function(x) {
  jsonlite::fromJSON(as.character(x))
}

# potential security risk
#pacode.identity <- base::identity
