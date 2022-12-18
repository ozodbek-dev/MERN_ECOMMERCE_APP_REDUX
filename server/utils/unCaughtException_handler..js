process.on("uncaughtException",err=>{
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server doe to  Uncaught Exception  `)
  process.exit(1);
})