module.exports = (server)=>{
return process.on("unhandledRejection", err=>{
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server doe to Unhandled Promise Rejection `)

  server.close(()=>{
    process.exit(1)
  });
  
})
}