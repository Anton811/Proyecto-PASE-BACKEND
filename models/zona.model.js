const db = require("../config/db.config");
const sectores = ["A", "B", "C", "D", "E", "F"];

const zona = {
  agregarZona: async (piso, sector, numZona, idSucursal) => {
    const [result] = await db.query(
      "INSERT INTO zona (pisoZona,sectorZona,numZona,idSucursal) VALUES (?,?,?,?)",
      [piso, sectores[sector - 1], numZona, idSucursal],
    );
    return result;
  },
  cargarZonas: async (sucursal) => {
    const [results] = await db.query(
      "SELECT * FROM zona WHERE idSucursal = ? ORDER BY pisoZona,SectorZona,numZona",
      [sucursal],
    );

    return results;
  },
};

module.exports = zona;
