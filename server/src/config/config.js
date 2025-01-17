module.exports = {
      port: process.env.PORT || 8081,
      db: {
      //process.env.DB_NAME is a environmental variable if that is not set then use 'vueproject'
      database: process.env.DB_NAME || 'vueproject',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      options: {
        //dialect - refers to the type of database you are connecting to
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './grocerydelivery.sqlite',
        
        }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
  }