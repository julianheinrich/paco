library(opencpu)

paco.startServer <- function() {
  require(opencpu)
  opencpu$stop()
  opencpu$start(5307)
}
