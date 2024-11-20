// Import required packages
const Sequelize = require('sequelize');
require('dotenv').config();

// Create connection to database
let sequelize;

// Check if running on Render (production)
if (process.env.DATABASE_URL) {
  // Configure SSL settings for Render's PostgreSQL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  // Local development configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
      logging: false,
    }
  );
}

module.exports = sequelize; 