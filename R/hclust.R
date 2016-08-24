# playground
rm(list=ls())
library(dplyr)
library(tibble)
library(apcluster)

cars <- sample_n(mtcars, 32)
dm <- dist(cars)
hc <- hclust(dm)
dend <- as.dendrogram(hc)
plot(dend, type="triangle")

hc <- function(df, no) {
  if (length(no) == 0 || no == 1) {
    ret <- tbl_df(data.frame(rowname = 1:nrow(df), value=rep(1,nrow(df))))
    return(ret)
  }

  k <- no[1]
  i <- length(no)
  colname <- paste("level", i, sep="_")
  value <- "value"
  km <- kmeans(df, k)

  this_level <- tbl_df(km$cluster) %>%
    mutate(rowname = as.integer(row_number()))

  next_level <- hc(tbl_df(km$centers), no[-1])

  ret <- this_level %>%
    left_join(next_level, by=c("value" = "rowname"))

  return(ret)
}

# numeric matrix
df <- cars
no <- c(10,5,1)

df_cluster <- hc(df, no)
data <- df %>%
  mutate(rowname = as.integer(row_number())) %>%
  left_join(df_cluster)

# run kmeans
km <- kmeans(df, 10)

# map leaves to cluster
level_1 <- tbl_df(km$cluster) %>%
  mutate(rowname = as.integer(row_number())) %>%
  #mutate(rowname = as.integer(rowname)) %>%
  rename(level_1 = value)

  # numeric matrix
  df1 <- tbl_df(km$centers)

  # run kmeans
  km1 <- kmeans(df1, 5)

  # map leaves to cluster
  level_2 <- tbl_df(km1$cluster) %>%
    mutate(rowname = as.integer(row_number())) %>%
    rename(level_2 = value)

ret <- level_1 %>%
  #mutate(rowname = as.integer(row_number())) %>%
  left_join(level_2, by=c("level_1" = "rowname"))

out <- df %>%
  mutate(rowname = row_number()) %>%
  left_join(ret)







