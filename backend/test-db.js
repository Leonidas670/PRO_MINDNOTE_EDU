const pool = require('./config/db');

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS fecha_actual');
    console.log('✅ Conexión exitosa:', rows[0].fecha_actual);
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
}

testConnection();
