import {db} from "../db.js";

export const getCarros = (_,res) => {
    const q = "SELECT * FROM carros";

    
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};