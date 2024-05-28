import {db} from "../db.js";

export const getCarros = (_,res) => {
    const q = "SELECT * FROM automovel";

    
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
let veiculosTable = "automovel"
export const getCarrosByModel = (req, res) => {
  const { modelo } = req.query;
  db.query(
    "SELECT * FROM " + veiculosTable + " WHERE modelo_veiculo = ?",
    [modelo],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
};

export const updateCarros = (req, res) => {
  const { id, placa_veiculo, modelo_veiculo, preco_veiculo } = req.body;
  db.query(
    "UPDATE " +
      veiculosTable +
      " SET placa_veiculo = ?, modelo_veiculo = ?, preco_veiculo = ? WHERE id = ?",
    [placa_veiculo, modelo_veiculo, preco_veiculo, id],
    (err, results) => {
      if (err) throw err;
      res.json({ message: "Veículo atualizado com sucesso", results });
    }
  );
};

export const removeCarros = (req, res) => {
  const { id } = req.body;
  db.query("DELETE FROM automovel WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json({ message: "Veículo removido com sucesso", results });
  });
};

export const addCarros = (req, res) => {
  const { placa_veiculo, modelo_veiculo, preco_veiculo } = req.body;
  db.query(
    "INSERT INTO automovel (placa_veiculo, modelo_veiculo, preco_veiculo) VALUES (?, ?, ?)",
    [placa_veiculo, modelo_veiculo, preco_veiculo],
    (err, results) => {
      if (err) throw err;
      res.json({ message: "Veículo adicionado com sucesso", results });
    }
  );
};
