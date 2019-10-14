

#* @filter cors
function(res) {
  # res$setHeader('Access-Control-Allow-Origin', '*') 
  plumber::forward()
}


#* @serializer unboxedJSON
#* @get /hello
function(){
  status <- 200
  message <- 'Hello, Plumber!'

  list(
    status = status,
    data = list(
      message = message
    )
  )
}



#* @assets ./files/static /
list()

