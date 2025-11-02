import pool from './db.js';

(async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS fecha');
    console.log('✅ Conexión exitosa:', rows[0].fecha);
  } catch (error) {
    console.error('❌ Error en la conexión:', error);
  }
})();
