const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET request
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "list";`;
    pool
    .query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(`Error making database GET request`, error);
        res.sendStatus(500);
    });
})
// POST request
router.post('/', (req, res) => {
    console.log(req.body);
    const newItem = req.body;
    const queryText = `INSERT INTO "list" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);`;

    pool
    .query(queryText, [newItem.name, newItem.quantity, newItem.unit ])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database POST`, error);
        res.sendStatus(500);
    });
})

// DELETE request
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("DELETE route /list with id of:", id);
    // sanitize data
    const queryText = `DELETE FROM "list" WHERE "id" = $1;`
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(204); 
      })
    .catch((err) => {
        console.log("error in DELETing item from list table", err);
        res.sendStatus(500);
    });
})

// PUT request
router.put("/:id", (req, res) => {
    const id = req.params.id;
    console.log("PUT route in /list/ with id of ", id);
    const item = req.body;
    let queryText = `UPDATE "list" SET "purchased" = true WHERE "id" = $1; `;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(204);
    }).catch((err) => {
        console.log("error in PUT", err);
        res.sendStatus(500);
    });
});

module.exports= router;